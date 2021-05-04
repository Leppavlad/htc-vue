export default {
  namespaced: true,
  state: {
    genres: [
      {
        id: "comedy",
        title: "Комедии",
        style: {
          color: "linear-gradient(127.83deg, #F2C94C 8.44%, #F29A4A 91.36%)",
          image: "😁",
        },
      },
      {
        id: "drama",
        title: "Драмы",
        style: {
          color: "linear-gradient(127.83deg, #F2994A 8.44%, #EB5757 91.36%)",
          image: "😭",
        },
      },
      {
        id: "fiction",
        title: "Фантастика",
        style: {
          color: "linear-gradient(127.83deg, #56CCF2 8.44%, #2F80ED 91.36%)",
          image: "👽",
        },
      },
      {
        id: "horror",
        title: "Ужасы",
        style: {
          color: "linear-gradient(127.83deg, #828282 8.44%, #333333 91.36%)",
          image: "👻",
        },
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    genres(state) {
      return state.genres;
    },
  },
};
