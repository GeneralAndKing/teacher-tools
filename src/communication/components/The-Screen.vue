<template lang="pug">
  #cube
    video(width="320" height="500")

</template>

<script>
// @ is an alias to /src
const { getSources, getVideo } = require('common@/lib/screen')
export default {
  name: 'TheScreen',
  mounted: function () {
    function handleStream (mediaStream) {
      console.log(mediaStream)
      // const video = document.querySelector('video')
      // video.srcObject = stream
      // video.onloadedmetadata = (e) => video.play()
      // eslint-disable-next-line no-undef
      let mediaRecorder = new MediaRecorder(mediaStream)
      mediaRecorder.onstart = function (e) {
        this.chunks = []
      }
      mediaRecorder.ondataavailable = function (e) {
        this.chunks.push(e.data)
      }
      mediaRecorder.onstop = function (e) {
        // let blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' })
        // socket.emit('radio', blob)
      }

      // Start recording
      mediaRecorder.start()

      // Stop recording after 5 seconds and broadcast it to server
      setTimeout(function () {
        mediaRecorder.stop()
      }, 5000)
    }

    function handleError (e) {
      console.log(e)
    }
    getSources().then((sources) => {
      getVideo(sources[0]).then(handleStream).catch(handleError)
    })
    // When the client receives a voice message it will play the sound
    // socket.on('voice', function (arrayBuffer) {
    //   let blob = new Blob([arrayBuffer], { 'type': 'audio/ogg; codecs=opus' })

    //   const video = document.querySelector('video')
    //   video.srcObject = blob
    //   video.onloadedmetadata = (e) => video.play()
    // })
  }

}
</script>
<style lang="less">
#cube {
      transform: translateZ(0);
   }
</style>
