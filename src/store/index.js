import { createStore } from "vuex";
import authModule from "./modules/auth";
import filmsModule from "./modules/films";
import genresModule from "./modules/genres";
import tvModule from "./modules/tv";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth: authModule,
    films: filmsModule,
    genres: genresModule,
    tv: tvModule,
  },
});
