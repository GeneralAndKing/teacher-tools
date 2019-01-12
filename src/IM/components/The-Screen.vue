<template lang="pug">
  video(width="100%" height="100%")

</template>

<script>
// @ is an alias to /src
const { desktopCapturer } = require('electron')
export default {
  name: 'TheScreen',
  mounted: function () {
    desktopCapturer.getSources({ types: ['screen'] }, (error, sources) => {
      if (error) throw error
      for (let i = 0; i < sources.length; ++i) {
        if (sources[i].name === 'Screen 1') {
          navigator.mediaDevices.getUserMedia({
            audio: {
              mandatory: {
                chromeMediaSource: 'desktop'
              }
            },
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720
              }
            }
          }).then((stream) => handleStream(stream))
            .catch((e) => handleError(e))
          return
        }
      }
    })

    function handleStream (stream) {
      const video = document.querySelector('video')
      video.srcObject = stream
      video.onloadedmetadata = (e) => video.play()
    }

    function handleError (e) {
      console.log(e)
    }
  }
}
</script>
