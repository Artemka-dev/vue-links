export default {
    state: {
        error: "null"
    },
    mutations: {
        setError(state, error_message) {
            state.error = error_message
        },
        clearError(state) {
            state.error = null
        }
    },
    getters: {
        getError(state) {
            return state.error
        }
    }
}