const state = { 
    token: null
};

const getters = {
    isLoggedIn: (state) => !!state.token
};

const mutations =  {
    setToken: (state, token) => {
        state.token = token;
    }
};

const actions = {
    logout: ({ commit }) => { //commit is used to call mutations
        commit('setToken', null);
    }

};