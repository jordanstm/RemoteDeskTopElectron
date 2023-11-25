const{
    app,
    BrowserWindow
} = require('electron');

// const path= require('path');

const createWindow =()=>{
          const mainWindow = new BrowserWindow({
            show:false,
            width:800,
            height:600
          })

           mainWindow.loadURL('http://localhost:4000')

           mainWindow.once('ready-to-show',()=>{
              mainWindow.show()
              mainWindow.setPosition(0,0)
           })
} 

 app.on('ready',()=>{
      createWindow();
 })