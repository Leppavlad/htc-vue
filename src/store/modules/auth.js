export default {
  state: {
    server: {
      url: "https://identitytoolkit.googleapis.com/v1/",
      apiKey: "?key=AIzaSyC_EOx39GEfK0MvfJCcE_C4TbuEf4lhLqk",
      tasks: {
        signup: "accounts:signUp",
        login: "accounts:signInWithPassword",
        update: "accounts:update",
      },
    },
    db: {
      url: "https://htc-vue-c9c6c-default-rtdb.firebaseio.com/",
    },
    user: {
      auth: {
        idToken: null,
        expires: null,
        localId: null,
      },
      profile: {
        firstName: null,
        lastName: null,
      },
    },
  },
  mutations: {
    setUserAuth(state, payload) {
      state.user.auth = payload;
    },
    setUserName(state, payload) {
      state.user.profile.firstName = payload.firstName;
      state.user.profile.lastName = payload.lastName;
    },
    setUserProfile(state, payload) {
      state.user.profile = payload;
    },
  },
  actions: {
    async auth(context, payload) {
      const mode = payload.mode;

      const userData = {
        email: payload.email,
        password: payload.password,
      };

      const server = context.getters.server;
      const url = server.url + server.tasks[mode] + server.apiKey;

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ ...userData, returnSecureToken: true }),
      });
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.error.message || "Authentication is failed"
        );
        throw error;
      }

      localStorage.setItem("idToken", responseData.idToken);
      const expires = new Date().getTime() + responseData.expiresIn;
      localStorage.setItem("expires", expires);
      localStorage.setItem("localId", responseData.localId);

      const authData = {
        idToken: responseData.idToken,
        expires: expires,
        localId: responseData.localId,
      };
      context.commit("setUserAuth", authData);
      context.dispatch("userProfile");
    },

    async userProfile(context, payload) {
      const db = context.getters.db;
      const userAuth = context.getters.userAuth;
      const url = `${db.url}users/${userAuth.localId}.json`;

      let request = null;
      if (payload && typeof payload == "object") {
        const body = {
          firstName: payload.firstName,
          lastName: payload.lastName,
        };
        request = {
          method: "PUT",
          body: JSON.stringify(body),
        };
      }

      const response = await fetch(url, request);
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.error.message || "Failed loading user data"
        );
        throw error;
      }

      if (responseData) {
        context.commit("setUserName", responseData);
        localStorage.setItem("userFirstName", responseData.firstName);
        localStorage.setItem("userLastName", responseData.lastName);
      }
    },

    autoAuth(context) {
      const idToken = localStorage.getItem("idToken");
      const expires = localStorage.getItem("expires");
      const localId = localStorage.getItem("localId");

      const userFirstName = localStorage.getItem("userFirstName");
      const userLastName = localStorage.getItem("userLastName");

      const expiresIn = expires - new Date().getTime();
      if (expiresIn < 0) return;

      if (idToken && localId) {
        const authData = {
          idToken: idToken,
          expires: expires,
          localId: localId,
        };
        const profileData = {
          firstName: userFirstName,
          lastName: userLastName,
        };
        context.commit("setUserAuth", authData);
        context.commit("setUserProfile", profileData);
      }
    },

    logout(context) {
      localStorage.removeItem("idToken");
      localStorage.removeItem("expires");
      localStorage.removeItem("localId");

      localStorage.removeItem("userFirstName");
      localStorage.removeItem("userLastName");

      context.commit("setUserAuth", {
        idToken: null,
        expiresIn: null,
        localId: null,
      });
      context.commit("setUserProfile", {
        firstName: null,
        lastName: null,
      });
    },
  },
  getters: {
    server(state) {
      return state.server;
    },
    db(state) {
      return state.db;
    },
    user(state) {
      return !!state.user.auth.idToken;
    },
    userAuth(state) {
      return state.user.auth;
    },
    userProfile(state) {
      return state.user.profile;
    },
  },
};
