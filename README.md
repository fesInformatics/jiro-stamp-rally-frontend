#  二郎スタンプラリー FE

## 概要

- Node 18.17.1
- React
- TypeScript

## 環境構築

### 初回セットアップ

1. レポジトリのクローン
    ``` sh
    git clone git@github.com:fesInformatics/jiro-stamp-rally-frontend.git
    ```

2. 環境変数のロード
    ``` sh
    # direnv 未インストールの場合は以下も実行
    brew install nodenv
    echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
    source ~/.zshrc

    # 環境変数のロード
    cd jiro-stamp-rally-frontend
    direnv allow .
    ```

### コンテナの起動

Dokcer, DockerComposeがインストールされている前提です。

```bash
docker compose up -d
```

`http://localhost:5173/`をブラウザで開いて、正しく表示されることを確認してください。
