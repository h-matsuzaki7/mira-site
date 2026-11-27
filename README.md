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
assets/img/logo/      ロゴ（VIガイドライン v2.0 の公式データ。ファイル名は命名規則のまま）
assets/img/ogp.png    SNS共有用の画像
```

## 公開前に差し替えるもの（`TODO` で検索）

## 画像を差し替えるとき
`/assets/*` は1週間キャッシュされます。同じファイル名で差し替える場合は、Cloudflare のキャッシュを削除するか、ファイル名を変えてください。

## ロゴについて
- VIガイドライン v2.0／ブランドアセット v2.0案（2026-11-24）の公式データをそのまま使用（改変なし）。
- 縦組み（vertical）フルカラーは制作元のマスターデータ。横組み（horizontal）・白抜き（white）・シンボル（ファビコンの元）は事務局案で、制作元の確認待ち。
- 確定版が届いたら、assets/img/logo/ の同名ファイルを上書きし、favicon と ogp.png を作り直す。
