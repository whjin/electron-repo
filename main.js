const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainwindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    mainwindow = new BrowserWindow({width: 800, height: 600});
    mainwindow.loadURL('D:\\360安全浏览器下载\\红粉世家.txt');

    mainwindow.openDevTools();

    mainwindow.on('closed',function () {
        mainwindow=null;
    })
});

app.addRecentDocument('D:\\360安全浏览器下载\\红粉世家.txt');

