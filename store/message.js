export const state = () => ({
    UserMessage: false
})

export const getters = {
    MessageInfo:  state => state.UserMessage
}

export const mutations = {
    SET_MESSAGE (state, UserMessage)   {
        state.UserMessage = UserMessage
    }
}

export const actions = {
    setMessage ({commit}, UserMessage) {
        commit('SET_MESSAGE', UserMessage)
    },
    clearMessage ({commit}) {
        commit('SET_MESSAGE', false)
    }
}