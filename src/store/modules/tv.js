export default {
  namespaced: true,
  state: {
    tv: {},
    lastUpdate: null,
  },
  mutations: {
    setTv(state, payload) {
      state.tv = payload;
    },
    setLastUpdate(state) {
      state.lastUpdate = new Date().getTime();
    },
  },
  actions: {
    async loadTv(context) {
      const response = await fetch(
        "https://htc-vue-c9c6c-default-rtdb.firebaseio.com/tv.json"
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          response.error.message || "Failed fetching data "
        );
        throw error;
      }

      const now = new Date();
      const date = {
        // day: now.toISOString().slice(0, 10),
        day: "2021-05-05",
        hour: now.getHours(),
      };

      const results = {};
      for (let channel in responseData) {
        const days = responseData[channel];
        for (let day in days) {
          if (day == date.day) {
            results[channel] = days[day];
          }
        }
      }

      context.commit("setTv", results);
    },
  },
  getters: {
    tv(state) {
      return state.tv;
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
