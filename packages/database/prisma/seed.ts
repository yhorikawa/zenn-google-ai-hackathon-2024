import { prisma } from "../src/index.js";

async function main() {
  await prisma.url.deleteMany({});
  await prisma.content.deleteMany({});
  await prisma.article.deleteMany({});

  const articlesData = [
    {
      title: "記事1: リリース直前に重大バグ発覚も迅速対応！",
      date: "2023-01-01",
      thumbnail: "sample.webp",
      contents: [
        {
          title: "コンテンツ1",
          content: "これは最初のコンテンツです。",
          image: "content1.jpg",
          links: [{ url: "https://example.com/first1" }],
        },
      ],
    },
    {
      title: "記事2: 新機能の追加と改善",
      date: "2023-02-01",
      thumbnail: "sample.webp",
      contents: [
        {
          title: "コンテンツ2",
          content: "これは2番目のコンテンツです。",
          image: "content2.jpg",
          links: [{ url: "https://example.com/second2" }],
        },
      ],
    },
  ];

  for (let i = 3; i <= 20; i++) {
    articlesData.push({
      title: `記事${i}: サンプル記事`,
      date: `2023-${String(i).padStart(2, "0")}-01`,
      thumbnail: "sample.webp",
      contents: [
        {
          title: `コンテンツ${i}`,
          content: `これは${i}番目のコンテンツです。`,
          image: `content${i}.jpg`,
          links: [{ url: `https://example.com/sample${i}` }],
        },
      ],
    });
  }

  for (const articleData of articlesData) {
    await prisma.article.create({
      data: {
        title: articleData.title,
        date: articleData.date,
        thumbnail: articleData.thumbnail,
        contents: {
          create: articleData.contents.map((content) => ({
            title: content.title,
            content: content.content,
            image: content.image,
            links: {
              create: content.links,
            },
          })),
        },
      },
      include: {
        contents: {
          include: {
            links: true,
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
