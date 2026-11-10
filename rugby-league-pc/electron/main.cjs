// Desktop shell: opens the bundled game in its own window. F11 toggles fullscreen, Alt+F4 quits.
const { app, BrowserWindow, Menu } = require('electron');
const path = require('node:path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1600, height: 900, minWidth: 960, minHeight: 540, backgroundColor: '#05090d', autoHideMenuBar: true, show: false,
    title: 'Sixth Tackle', icon: path.join(__dirname, 'icon.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false, backgroundThrottling: false },
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, '..', 'play', 'index.html'));
  win.once('ready-to-show', () => { win.show(); win.focus(); });
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') { win.setFullScreen(!win.isFullScreen()); event.preventDefault(); }
  });
}
app.commandLine.appendSwitch('disable-frame-rate-limit', 'false');
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
