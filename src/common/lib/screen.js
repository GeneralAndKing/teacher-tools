const { desktopCapturer, screen } = require('electron')
const getSources = () => {
  const promise = new Promise(function (resolve, reject) {
    desktopCapturer.getSources({ types: ['screen'] }, (error, sources) => {
      if (error) reject(error)
      resolve(sources)
    })
  })
  return promise
}
// 获取有声音源的屏幕流
const getVideoAndAudio = (source) => {
  const promise = new Promise(
    function (resolve, reject) {
      navigator.mediaDevices.getUserMedia({
        audio: {
          mandatory: {
            chromeMediaSource: 'desktop'
          }
        },
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: source.id,
            minWidth: 800,
            maxWidth: screen.getPrimaryDisplay().workAreaSize.width,
            minHeight: 600,
            maxHeight: screen.getPrimaryDisplay().workAreaSize.width
          }
        }
      }).then((stream) => resolve(stream))
        .catch((e) => reject(e))
    }
  )
  return promise
}
// 获取无声音源的屏幕流
const getVideo = (source) => {
  const promise = new Promise(
    function (resolve, reject) {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: source.id,
            minWidth: 800,
            maxWidth: screen.getPrimaryDisplay().workAreaSize.width,
            minHeight: 600,
            maxHeight: screen.getPrimaryDisplay().workAreaSize.width
          }
        }
      }).then((stream) => resolve(stream))
        .catch((e) => reject(e))
    }

  )
  return promise
}
export {
  getSources, getVideoAndAudio, getVideo
}
