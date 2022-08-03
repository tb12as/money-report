<template>
  <div id="app" class="text-gray-700">
    <router-view />
  </div>
</template>
<script>
import NavCustom from "./components/Nav.vue";
export default {
  data() {
    return {
      loading: undefined,
    };
  },
  components: {
    NavCustom,
  },

  beforeCreate() {
    this.axios.interceptors.request.use((req) => {
      this.loading = this.$vs.loading({
        type: "square",
        text: "Loading...",
      });

      return req;
    });

    this.axios.interceptors.response.use(
      (response) => {
        this.loading.close();

        return response;
      },
      (error) => {
        this.loading.close();
        // console.log(error.response.status)
        // console.log(error);
        if (error.response.data.message) {
          this.$vs.notification({
            progress: "auto",
            position: "top-right",
            title: "Error",
            color: "danger",
            text: error.response.data.message,
          });
        } else {
          this.$vs.notification({
            progress: "auto",
            position: "top-right",
            title: "Error",
            color: "danger",
            text: error.message,
          });
        }

        return Promise.reject(error.response);
      }
    );
  },
};
</script>
