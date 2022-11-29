<script lang="ts" setup>
import { onMounted,nextTick } from "vue"
const { $flv } = useNuxtApp()

onMounted(() => {
  nextTick(() => {
    if ($flv.isSupported()) {
      const videoElement:HTMLElement | null = document.getElementById('videoElement');
      videoElement && videoElement.addEventListener("ended",() => {
          console.log("video ended");
      })
      const flvPlayer = $flv.createPlayer({
        type: 'flv',
        isLive:true,
        url: 'http://localhost:8000/live/STREAM_NAME.flv'
      });
      if(videoElement){
        flvPlayer.attachMediaElement(videoElement as HTMLMediaElement);
        flvPlayer.load();
        flvPlayer.play();
      }

    }
  })

})


</script>

<template>
  <div class="live-content">
    <video id="videoElement" style="width: 100%;height: 100%;object-fit: fill"></video>
  </div>
</template>
<style>
@import "./index.css";
</style>