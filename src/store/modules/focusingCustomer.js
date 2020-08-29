export default {
    state: {
        focusingCustomer: {

        }
    },
    getters: {
        focusingCustomer: state => {
            return state.focusingCustomer;
        }
    },
    mutations: {
        setFocusingCustomer(state, payload) {
            state.focusingCustomer = payload;
        }
    },
    actions: {
        setFocusingCustomer({ commit }, payload) {
            commit('setFocusingCustomer', payload);
        }
    }
};