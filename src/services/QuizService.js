import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://my-json-server.typicode.com/nzee/bollywood-quiz/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getQuestions() {
    return apiClient.get("/celeb-quiz");
  },
  getQuestion(id) {
    return apiClient.get("/celeb-quiz/" + id);
  }
};
