<template lang="pug">
  #cube
    video(width="320" height="500")

</template>

<script>
// @ is an alias to /src
import IMServer from 'common@/lib/IMServer'
const { getSources, getVideo } = require('common@/lib/screen')
const fs = require('fs')
export default {
  name: 'TheScreen',
  mounted: function () {
    let components = []
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-undef
    const files = fs.readdirSync(__static)
    console.log(files)
    files.forEach(function (item, index) {
      // eslint-disable-next-line no-undef
      let stat = fs.lstatSync(__static + '/' + item)
      if (stat.isDirectory() === true) {
        components.push(item)
      }
    })

    console.log(components)
    let _this = this
    _this.server = new IMServer()

    function handleStream (stream) {
      const video = document.querySelector('video')
      video.srcObject = stream
      video.onloadedmetadata = (e) => video.play()
      _this.server.start('127.0.0.1', '8888', stream)
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
