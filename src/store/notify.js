import loadMore from '../assets/js/loadMore'
import axios from "axios"

export default {
    state: {
        messagesMain: [],
        messages: [],
        loading: true,
        error: false
    },

    mutations: {
        setMessagesMain(state, payload) {
            state.messagesMain = payload
        },

        setMessages(state, payload) {
            state.messages = payload
        },

        loadMessages(state, payload) {
            state.messagesMain = state.messagesMain.concat(payload)
        },

        error: state => state.error = true,
        errorClose: state => state.error = false,
        loading: state => state.loading = true,
        loadingFalse: state => state.loading = false
    },

    actions: {
        loadMessages({commit, getters}) {
            let res = getters.getMessagesFilter
            commit('loadMessages', loadMore(res, 2))
        },

        getNotifyLazy({commit, dispatch}) {
            commit('loading')
            commit('errorClose')
            setTimeout(()=> (dispatch('getNotify')), 1500)
        },

        getNotify({commit}) {
            axios
                .get("https://tocode.ru/static/c/vue-pro/notifyApi.php")
                .then(response => {
                    let res = response.data.notify;
                    let messagesMain = res.filter(res => res.main === true);
                    let messages = res.filter(res => res.main === false);
                    commit('setMessagesMain', messagesMain);
                    commit('setMessages', messages)
                })
                .catch(error => {
                    commit('error')
                })
                .finally(() => (commit('loadingFalse')))
        }
    },

    getters: {
        getLoading: state => state.loading,
        getError: state => state.error,
        getMessagesMain: state => state.messagesMain,
        getMessagesFilter: state => state.messages.filter(res => res.main === false)
    }
}