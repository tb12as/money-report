 
<template>
  <div class="center examplex">
    <vs-navbar
      target-scroll="#hide-scroll-content"
      hide-scroll
      center-collapsed
      v-model="active"
    >
      <template #left>
        <vs-navbar-item :active="active == 'money'" id="money">
          Input
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'report'" id="report">
          Laporan
        </vs-navbar-item>
      </template>

      <template #right>
        <vs-button flat>Login</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: "guide",
  }),
};
</script>
