const {app, BrowserWindow, ipcMain} = require("electron");

let ventana;

function createWindow(){
    ventana = new BrowserWindow({
        width: 550,
        height: 675,
    });
    ventana.loadFile("index.html")
}


app.whenReady().then(createWindow)