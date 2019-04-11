<template>
  <div>
    <b-button
      @click.prevent="answerSubmit(option.result)"
      :key="option.text"
      variant="primary"
    >{{ option.text }}</b-button>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    answerSubmit(result) {
      if (result) {
        console.log("Right Answer!");
        this.$store.dispatch("incrementScore");
        this.$store.dispatch("nextQuestion");
      } else {
        console.log("Wrong Answer");
        this.$store.dispatch("nextQuestion");
      }
    }
  }
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
