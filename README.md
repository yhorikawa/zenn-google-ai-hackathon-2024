# zenn-google-ai-hackathon-2024

## Setup

```bash
bun install

bun turbo db:generate

bun turbo db:seed
```


- 注意
  - .env.exampleをコピーしてください
    - prismaでは`DATABASE_URL'を使います
    - prismaをimportしているところでは全て必要です

## Swagger UI
- http://localhost:3000/doc/swagger-ui