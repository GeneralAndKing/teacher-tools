'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { message, appMessage } from './message'
import { getUserDataPath, getExtensionsPath } from './config'
import IMServer from './servers/IMServer'
const isDevelopment = process.env.NODE_ENV !== 'production'
// const cp = require('child_process')
// const path = require('path')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
process.env.USER_DATA = getUserDataPath()
process.env.ENTENSIONS = getExtensionsPath()
global.IMserver = new IMServer()
global.TASKserver = null
global.IMserver.start()
// app.setPath('extensions', getExtensionsPath())
// 只有使用fork才可以使用message事件和send()方法
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
      transparent: true,
      backgroundColor: '#3C3C3C'
    }
  )
  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'communication.html')
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
  appMessage(win)
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
