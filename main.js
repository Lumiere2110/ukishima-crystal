// 浮島クリスタルを Windows アプリとして起動するためのファイル(Electron)。
// ゲーム本体は index.html で、ここではウィンドウを作って開くだけです。
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 760,
    title: '浮島クリスタル',
    backgroundColor: '#0d1426',
    autoHideMenuBar: true, // 上のメニューバーを隠す
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);
// ウィンドウを全部閉じたらアプリも終わる
app.on('window-all-closed', () => app.quit());
