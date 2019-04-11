<template>
  <div>
    <b-img height="400px" center :src="question.img" alt="Celeb Quiz"/>
    <OptionBox v-for="option in _options" :key="option.text" :option="option"/>
  </div>
</template>

<script>
import OptionBox from "@/components/OptionBox.vue";
export default {
  components: {
    OptionBox
  },
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  computed: {
    _options() {
      return this.question.options;
    }
  }
};
</script>

<style scoped>
</style>