# zenn-google-ai-hackathon-2024
<!-- このREADMEは Claude Code によって生成されました -->
> [!NOTE]
> 🤖 This Readme Generated with [Claude Code](https://www.anthropic.com/claude-code)

**シャリ無しわさび増し** - AI を活用した社内ニュース自動生成システム

## 概要

このプロジェクトは、Google AI Hackathon 2024 で3位に入賞した[社内のぞき見新聞 ～The Internal Times～](https://zenn.dev/kaitat1231/articles/afce2c2202fa2b)です。
社内のSlackやNotionのデータを活用し、AI（Google Vertex AI）を使用して社内ニュースを自動生成し、新聞形式のWebサイトで配信します。

## 主な機能

- **社内トピック抽出**: 社内の重要なトピックを自動で抽出
- **記事生成**: AI を使用して新聞記事形式の記事を生成
- **タイトル生成**: 記事内容に基づいたタイトルの自動生成
- **社説作成**: 建設的な提案を含む社説の自動生成
- **今日の格言**: 社内の印象的な発言を格言として抽出
- **社員紹介**: 注目すべき社員の活動を記事として紹介
- **画像生成**: 記事に合わせた画像を自動生成

## 技術スタック

### フロントエンド（Web アプリケーション）

- **Next.js 15** - React ベースのフルスタックフレームワーク
- **TypeScript** - 型安全な JavaScript
- **Tailwind CSS** - ユーティリティファーストの CSS フレームワーク
- **Flowbite** - Tailwind CSS ベースの UI コンポーネント
- **React Icons** - アイコンライブラリ

### バックエンド・データベース

- **MongoDB** - NoSQL データベース
- **Prisma** - データベース ORM
- **Zod** - スキーマバリデーション

### AI・機械学習

- **Google Vertex AI** - AI モデルの実行環境
- **AI SDK** - AI 機能の統合
- **Google Cloud Storage** - 画像ファイルの保存
- **Google Cloud Discovery Engine** - 情報検索

### 開発環境・ツール

- **Bun** - JavaScript ランタイム・パッケージマネージャー
- **Turborepo** - モノレポ管理ツール
- **Biome** - コードフォーマッター・リンター
- **Docker** - コンテナ化
- **Husky** - Git フック管理

## プロジェクト構成

```
zenn-google-ai-hackathon-2024/
├── apps/
│   ├── web/                 # Next.js Web アプリケーション
│   └── scripts/             # AI 記事生成スクリプト
├── packages/
│   ├── database/            # Prisma データベース設定
│   └── typescript-config/   # TypeScript 設定
└── docker/                  # Docker 設定
```

## セットアップ

### 前提条件

- Bun 1.2.2 以上
- MongoDB データベース
- Google Cloud Platform アカウント（Vertex AI 使用）

### インストール

1. 依存関係のインストール

```bash
bun install
```

2. データベース設定

```bash
bun turbo db:generate
```

3. 環境変数の設定

```bash
cp .env.example .env
```

必要な環境変数:

- `DATABASE_URL` - MongoDB 接続文字列
- Google Cloud 認証情報（Vertex AI 用）

## 使用方法

### 開発サーバーの起動

```bash
bun turbo dev
```

### 記事生成スクリプトの実行

```bash
cd apps/scripts
bun run index.ts --date "2024-01-01"
```

### ビルド

```bash
bun turbo build
```

### コードフォーマット・リント

```bash
bun run format-and-lint
bun run format-and-lint:fix
```

## API エンドポイント

- `GET /api/v1/hello-world` - ヘルスチェック
- `GET /api/v1/images` - 画像生成・取得

## 主要な機能モジュール

### 記事生成（scripts/src/）

- `get-project-topix.ts` - プロジェクトトピック抽出
- `get-adage.ts` - 格言抽出
- `get-profile.ts` - 社員プロファイル作成
- `get-editorial.ts` - 社説生成
- `generate-title.ts` - タイトル生成
- `generate-image.ts` - 画像生成

### Web アプリケーション（web/src/）

- `app/page.tsx` - ホームページ（参加メンバー表示）
- `app/articles/` - 記事一覧・詳細ページ
- `components/` - 再利用可能なコンポーネント

## データベーススキーマ

```prisma
model Article {
  id       String    @id @default(auto()) @map("_id") @db.ObjectId
  title    String
  date     DateTime
  contents Content[]
}

type Content {
  title   String?
  content String
  image   String
  links   String[]
}
```
