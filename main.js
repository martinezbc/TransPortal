const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', () => {
    //Create new window
    mainWindow = new BrowserWindow({});

    //Load HTML into mainWindow
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    
    Menu.setApplicationMenu(mainMenu);
});


const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: 'CTRL+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
]