# Project Instructions

## Stack

- このプロジェクトは Next.js / React / TypeScript / Tailwind CSS で実装する。
- 変更や技術判断の前に、対象ファイルと必要な関連コードを確認する。

## Project map

- `docs/`
  - Project全体の知識、方針、確定事項を管理する。

- `references/images/`
  - Design explorationで参照する画像を置く。
  - Production assetとして直接使用しない。

- `reference-notes/`
  - 参考画像ごとの参照意図、取り入れたい点、取り入れない点をSection別に管理する。
  - `asset-notes/` と同じSection名を使う。記載方法は `reference-notes/README.md` を参照する。

- `public/images/`
  - LPで実際に使用する画像素材を置く。
  - 原則として画像の役割ごとに整理する。

- `asset-notes/`
  - `public/images/` 内の素材の役割や扱い上の制約をSection別に管理する。

- `work/images/`
  - 生成した画像案・比較案を置く。採用した素材を `public/images/` にコピーして使用する。

- `work/prototypes/`
  - 簡単なHTML/CSSなど、デザイン判断用の試作を置く。
  - Next.jsでの実装は `src/` で進める。

- `src/components/sections/`
  - LP固有のSection componentを置く。

- `src/components/ui/`
  - Sectionをまたいで再利用するUI componentやEffectを置く。

## Scope and change policy

- ユーザーが指定した目的と変更範囲を優先する。
- 依頼されていないSection、機能、デザインへ変更範囲を勝手に拡張しない。
- 既存のデザイン判断や確定済みComponentを、必要なく変更しない。
- 見た目の変更だけが目的の場合、不要なロジック変更や構造変更を行わない。
- 大規模なrefactor、抽象化、汎用化は、依頼された場合または明確な必要性がある場合に限る。
- 既存のComponentやEffectで対応できる場合は、新規実装より再利用を優先する。

## Implementation modes

### Design exploration

デザイン判断のための実装。

- 見た目を素早くブラウザで確認できることを優先する。
- 現在の判断に不要なComponent化、汎用化、refactorを行わない。
- Responsive、Accessibility、Animation、Performanceは、現在の探索に必要な場合だけ扱う。
- 探索中の内容を確定事項として扱わない。

### Production implementation

確定したデザインをWebとして仕上げる実装。

- 既存の探索コードを可能な限り活かす。
- 必要に応じてComponent整理、Responsive対応、Accessibility、Animation、Performance改善、Lint、Build確認を行う。
- 確定済みのデザインを、実装上の都合だけで不用意に変更しない。

Design exploration から Production implementation へ移行する判断はユーザーが行う。

依頼からモードが明確でない場合は、依頼範囲を超えてProduction品質まで拡張しない。

## Documentation routing

判断に必要な場合だけ、対応するdocumentを参照する。
明確に不要なdocumentは読まない。

- 商品、ターゲット、顧客課題、価値提案、訴求内容
  → `docs/product.md`

- LP全体の構成、Sectionの役割、情報の順序、伝える内容
  → `docs/lp-structure.md`

- Visual hierarchy、Layout、Typography、Color、Spacing、画像の扱い、Effectなどのデザイン判断
  → `docs/design-direction.md`

- 参考LP、参考画像、参考デザインとその利用方針
  → `docs/references.md`

- 個々の参考画像の参照意図・取り入れる点・取り入れない点
  → `reference-notes/` の該当Section

- 実際に使用する画像素材の役割・扱い上の制約
  → `asset-notes/` の該当Section

具体的な変更内容が既存コードだけで十分に判断できる場合は、project documentationを参照しなくてよい。

複数領域にまたがる場合のみ、必要な複数documentを参照する。

ユーザーが参照するdocumentを明示した場合は、その指定を優先する。

## Documentation maintenance

- Project documentationは、現在有効で今後の判断にも影響するProject-levelの情報だけを維持する。
- 一時的な試行錯誤、比較案、細かな実装調整は原則として記録しない。
- ユーザーがProject-levelの方針を確定または変更した場合、必要なdocumentだけを更新する。
- Design exploration中の実装だけを理由にdocumentationを更新しない。
- Documentationの詳細度は、対象の確定度に合わせる。
- 未確定の内容を埋めるために、Copy、Content、Design仕様を推測で具体化しない。
- 空または情報の少ないdocumentを、completenessのためだけに埋めない。必要なProject-level判断が生まれた時点で追加する。
- 探索中のSectionでは、Purpose、Core idea、制約など、今後の判断に必要な最小限の情報だけを維持する。
- 具体的なCopy、Content、Design仕様は、確定した段階で追加する。
- `docs/design-direction.md` と `docs/references.md` はDesign explorationを通じて育て、今後の判断にも影響する確定事項だけを記録する。
- 過去の判断を追記し続けず、現在有効な状態が分かるように整理する。
- 同じ情報を複数のdocumentへ重複して記録しない。
- 具体的なCSS値、Component内部の実装、InteractionやAnimationの詳細など、source codeが正確なSource of Truthとなる情報はdocumentationへ重複して記載しない。
