export default {
  namespaced: true,
  state: {
    films: [],
    lastUpdate: null,
  },
  mutations: {
    setFilms(state, payload) {
      state.films = payload;
    },
    setLastUpdate(state) {
      state.lastUpdate = new Date().getTime();
    },
  },
  actions: {
    async loadfilms(context) {
      const response = await fetch(
        "https://htc-vue-c9c6c-default-rtdb.firebaseio.com/films.json"
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          response.error.message || "Failed fetching data "
        );
        throw error;
      }

      const results = [];
      for (let key in responseData) {
        results.push({ ...responseData[key], id: key });
      }

      context.commit("setFilms", results);
      context.commit("setLastUpdate");
    },
  },
  getters: {
    films(state) {
      return state.films;
    },
    needsUpdate(state) {
      const currentTime = new Date().getTime();
      if ((currentTime - state.lastUpdate) / 1000 > 20 * 60) {
        return true;
      }
      return false;
    },
  },
};
