<template>
<iframe src="https://gnipbao.github.io/h5-test/src/Game-demo/caisse/index.html" frameborder="0" width="100%" :height=height></iframe>
</template>

<script>
export default {
  data(){
    return{
      height:0
    }
  },
  mounted(){
    console.log();
     this.height=window.innerHeight-320
  }
}
</script>