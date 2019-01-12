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
    function handleStream (stream) {
      const video = document.querySelector('video')
      video.srcObject = stream
      video.onloadedmetadata = (e) => video.play()
    }

    function handleError (e) {
      console.log(e)
    }
    getSources().then((sources) => {
      getVideo(sources[0]).then(handleStream).catch(handleError)
    })
  }
}
</script>
<style lang="less">
#cube {
      transform: translateZ(0);
   }
</style>
