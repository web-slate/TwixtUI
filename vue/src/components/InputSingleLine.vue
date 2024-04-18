<template>
  <input type="text" required v-model="itemName">
</template>

<script>
export default {
  name: 'InputSingleLine',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
