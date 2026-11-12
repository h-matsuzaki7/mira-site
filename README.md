# MIRA 簡易版サイト

Cloudflare Pages にこのフォルダの中身をそのままアップロードすれば公開できます（ビルド不要）。

## 構成
```
index.html            トップページ（1ページ構成）
404.html              存在しないURL用
_headers              Cloudflare Pages のキャッシュ・セキュリティ設定
robots.txt / sitemap.xml
favicon.ico / favicon-32.png / apple-touch-icon.png
assets/css/style.css  スタイル（VIガイドラインの色・書体をトークン化）
assets/js/main.js     メニュー開閉・ヘッダー影・現在地表示（約2KB、ライブラリなし）
assets/img/           ロゴ（WebP）、OGP画像
```

## 公開前に差し替えるもの（`TODO` で検索）
- 本番ドメイン：canonical / og:url / og:image / JSON-LD / robots.txt / sitemap.xml
- 問い合わせメールアドレス（`info@mira.or.jp` は仮）
- 役員の肩書き（掲載了承と最新情報の確認後）
- 利益相反の管理方針の一文（理事会で方針が決まったら差し替え）

## 画像を差し替えるとき
`/assets/*` は1週間キャッシュされます。同じファイル名で差し替える場合は、Cloudflare のキャッシュを削除するか、ファイル名を変えてください。
