import path from 'path'
const appRoot = process.cwd()
function getApplicationPath () {
  if (process.platform === 'darwin') {
    return appRoot
  }

  return appRoot
}
function getUserDataPath () {
  return path.join(getApplicationPath(), 'user-data')
}
function getExtensionsPath () {
  return path.join(getApplicationPath(), 'extensions')
}
export {
  getUserDataPath, getExtensionsPath
}
