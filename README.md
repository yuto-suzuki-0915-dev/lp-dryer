# AIRFOLD DUO LP

AIRFOLD DUO のランディングページ制作プロジェクトです。

Next.js / React / TypeScript / Tailwind CSS を使用します。

## Development

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで表示を確認しながら制作を進めます。

## Project structure

- `AGENTS.md`
  - AI / Codex向けのProject運用ルール。
- `docs/`
  - 商品情報、LP構成、確定したDesign方針、Reference方針。
- `references/images/`
  - Design exploration用の参考画像。Production assetとして直接使用しません。
- `public/images/`
  - LPで実際に使用する画像素材。
- `asset-notes/`
  - `public/images/` 内の素材の役割や扱い上の制約。
- `src/`
  - LPの実装コード。

## Notes

このREADMEは人間向けの簡単なProject案内です。

AI / Codexの作業ルールやDocumentationの参照・更新方針は `AGENTS.md` をSource of Truthとします。
このREADMEをAIが毎回参照する必要はありません。
