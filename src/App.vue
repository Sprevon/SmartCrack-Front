<template class="full">
  <div >
    <router-view></router-view>
  </div>
  <div class="footer">
    <p>Footer</p>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.footer{
    position: fixed;
    bottom: 0;
}
.full{
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
