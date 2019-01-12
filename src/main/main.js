'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { message } from './message'
const isDevelopment = process.env.NODE_ENV !== 'production'
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true })
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow(
    {
      width: 800,
      height: 600,
      frame: false,
      minWidth: 800,
      minHeight: 600,
      transparent: true
    }
  )
  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'IM.html')
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    win.webContents.openDevTools()
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./IM.html')
  }

  win.on('closed', () => {
    win = null
  })
}

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  require('electron-debug')({ showDevTools: true })
  if (isDevelopment && !process.env.IS_TEST) {
    // BrowserWindow.addDevToolsExtension('/home/echo/.config/google-chrome/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/4.1.5_0')
    // BrowserWindow.addDevToolsExtension('_n/vue-devtools/vender')
    // require('vue-devtools').install()
    // Install Vue Devtools
    // await installVueDevtools()
  }
  createWindow()
})

message()
