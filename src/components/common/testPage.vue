<template>
  <div>
    <!-- 模版 -->
    <p @click="handleClick">测试</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
    };
  },
  computed: {
    // ...mapState([''])
  },
  methods: {
    // ...mapMutations(['']),
    handleClick() {
      alert(2);
    }
   },
  watch: {

   },
  mounted() {
    
  }

};
</script>

<style scoped>
</style>
