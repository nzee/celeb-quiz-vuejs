<template>
  <div class="home">
    <NavBar/>
    <b-jumbotron header="Bollywood Celeb Quiz" lead="Fresh faces - Female"></b-jumbotron>
    <ScoreCard/>
    <template v-if="!_gameover">
      <QuizCard :key="question.id" :question="question"/>
    </template>
  </div>
</template>

<script>
import QuizCard from "@/components/QuizCard.vue";
import ScoreCard from "@/components/ScoreCard.vue";
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    QuizCard,
    NavBar,
    ScoreCard
  },
  computed: {
    ...mapState(["questions", "question", "gameover"]),
    ...mapGetters(["_gameover"])
  },
  created() {
    this.$store.dispatch("initialize");
    this.$store.dispatch("nextQuestion");
  },
  data() {
    return {
      //var questions = this.$store.questions
      //question: questions[Math.floor(Math.random() * items.length)]
    };
  }
};
</script>