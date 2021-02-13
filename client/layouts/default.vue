<template>
  <div>
    <div v-if="!this.$store.state.users.isLoggedIn">
      <LoginRegister />
    </div>
    <div v-if="this.$store.state.users.isLoggedIn">
      <Loader />
      <Navigation />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import checkUserAuthentication from "../plugins/helpers/checkUserAuthentication.js";
export default {
  watch: {
    $route() {
      checkUserAuthentication(this.$store);
    },
  },
};
</script>

<style>
</style>