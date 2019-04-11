<template>
  <div>
    <p>Your Score : {{ _score }}</p>
    <p v-if="_gameover">gameover!</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    _score() {
      console.log("score is ", this.$store.state.score);
      return this.$store.state.score;
    },
    _gameover() {
      return this.$store.state.gameover;
    },
    ...mapGetters(["_gameover"])
  }
};
</script>

<style scoped>
</style>