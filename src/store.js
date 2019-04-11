import Vue from "vue";
import Vuex from "vuex";
import QuizService from "@/services/QuizService.js";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    question: {},
    score: 0,
    index: 0,
    answered: [],
    game_over: false
  },
  mutations: {
    SET_QUESTIONS(state, questions) {
      state.questions = questions;
    },
    SET_QUESTION(state, question) {
      state.question = question;
    },
    INCREMENT_SCORE(state, score) {
      state.score = state.score + score;
    },
    GAME_OVER(state) {
      state.game_over = true;
    }
  },
  actions: {
    initialize({ commit, state }) {
      QuizService.getQuestions()
        .then(response => {
          console.log("resp is here", response.data);
          var questions = response.data;
          commit("SET_QUESTIONS", questions);
          var index = state.questions.length - 1;
          var question = state.questions[index];
          commit("SET_QUESTION", question);
        })
        .catch(error => {
          console.log("error fetching questions :", error.message);
          //dispatch("notification/add", notification, { root: true });
        });
    },
    incrementScore({ commit, state }) {
      commit("INCREMENT_SCORE", 1);
      console.log("ans len:", state.answered.length);
      console.log("ques len:", state.questions.length);
    },
    nextQuestion({ commit, state }) {
      state.questions.pop();
      if (state.questions.length) {
        var index = state.questions.length - 1;
        var question = state.questions[index];
        commit("SET_QUESTION", question);
      } else {
        commit("GAME_OVER");
      }
    }
  },
  getters: {
    _gameover: state => {
      if (state.questions.length) {
        return false;
      } else {
        return true;
      }
    }
  }
});
