# MasterDataManagerFront開発ガイド

### ローカルサーバー起動

```
npm run dev
```

### APIクライアントコードの自動生成（orvalというライブラリを使う）

APIクライアントコードはOpenAPIドキュメントからコードを自動生成する方針とします。

#### 手順

1. バックエンドのサーバを起動する
2. `npm run gen`実行（docs/api-docs.yamlにドキュメントをダウンロードします。）
3. `src/gen`配下にコードが生成されます。

#### 自動生成されたコードは手動で修正しないように気をつけましょう！


