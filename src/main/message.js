const { app, ipcMain } = require('electron')
const isDevelopment = process.env.NODE_ENV !== 'production'
function message () {
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  // Exit cleanly on request from parent process in development mode.
  if (isDevelopment) {
    if (process.platform === 'win32') {
      process.on('message', data => {
        if (data === 'graceful-exit') {
          app.quit()
        }
      })
    } else {
      process.on('SIGTERM', () => {
        app.quit()
      })
    }
  }
}
function appMessage (win) {
  ipcMain.on('min', e => {
    win.minimize()
  })
  ipcMain.on('max', e => {
    win.isMaximized() ? win.unmaximize() : win.maximize()
  })
  ipcMain.on('close', e => {
    win.close()
  })
}
export {
  message, appMessage
}
