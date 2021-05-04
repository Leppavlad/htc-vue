import { createStore } from "vuex";
import filmsModule from "./modules/films";
import genresModule from "./modules/genres";
import tvModule from "./modules/tv";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    films: filmsModule,
    genres: genresModule,
    tv: tvModule,
  },
});
