<template>
  <div id="app" class="text-gray-700">
    <router-view />
  </div>
</template>
<script>
import NavCustom from "./components/Nav.vue";
export default {
  components: {
    NavCustom,
  },
};
</script>
