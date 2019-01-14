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
    let _this = this
    _this.$socket.emit('online', '我上线')
    _this.$socket.on('receiRadio', function (arrayBuffer) {
      console.log('我收到了')
      let blob = new Blob([arrayBuffer], { type: 'audio/ogg; codecs=opus' })
      const audio = document.querySelector('audio')
      audio.src = window.URL.createObjectURL(blob)
      audio.play()
    })
    function handleStream (mediaStream) {
      let mediaRecorder = new MediaRecorder(mediaStream)
      mediaRecorder.onstart = function (e) {
        this.chunks = []
      }
      mediaRecorder.ondataavailable = function (e) {
        this.chunks.push(e.data)
        console.log(e.data)
      }
      mediaRecorder.onstop = function (e) {
        console.log('结束')
        let blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' })
        _this.$socket.emit('sendRadio', blob)
      }
      console.log(mediaRecorder)

      // Start recording
      mediaRecorder.start()

      // Stop recording after 5 seconds and broadcast it to server
      setTimeout(function () {
        mediaRecorder.stop()
        console.log('结束')
      }, 5000)
    }

    function handleError (e) {
      console.log(e)
    }
    getSources().then(sources => {
      getVideo(sources[0])
        .then(handleStream)
        .catch(handleError)
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
