# 浮島クリスタル

夜空に浮かぶ島でクリスタルを集めて、追いかけてくるトゲ玉を避ける3Dアクションゲームです。[Three.js](https://threejs.org/) で作っています。

**ブラウザで遊ぶ:** https://lumiere2110.github.io/ukishima-crystal/

**Windows アプリ版をダウンロード:** [最新版(Releases)](https://github.com/Lumiere2110/ukishima-crystal/releases/latest) から `UkishimaCrystal-win64.zip` をダウンロードし、展開して中の `UkishimaCrystal.exe` をダブルクリックします(インストール不要)。

## 操作

| 操作 | キー |
|---|---|
| 移動 | WASD / 矢印キー |
| ジャンプ | Space |
| スマホ | 画面の左をドラッグで移動、右下のボタンでジャンプ |

## ルール

- クリスタルを取ると1点。5個ごとにレベルが上がり、トゲ玉が1体増えて速くなります。
- トゲ玉に当たるか島から落ちると、ライフが1つ減ります。ライフ3つがなくなるとゲームオーバーです。
- ベスト記録はブラウザに保存されます。

ファイルは `index.html` 1つだけで、ブラウザで開けばそのまま遊べます。

## ソースコードからアプリを動かす

[Electron](https://www.electronjs.org/) でアプリにできます。[Node.js](https://nodejs.org/) を入れてから、次を実行します。

```bash
npm install
npm start
```

`npm start` でゲームのウィンドウが開きます。three.js は `vendor/three.min.js` に同梱しているので、ネットにつながっていなくても遊べます。
