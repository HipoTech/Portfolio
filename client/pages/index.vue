<template>
  <div>
    <!-- <LoginRegister v-if="!isLoggedIn" /> -->
    <Introduction />
    <About />
    <Resume />
    <Portfolio />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isLoggedIn: false,
    };
  },
  components: {},
};
</script>

<style>
</style>
