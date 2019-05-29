import api from '../api/api'
export default {
    switchMask({commit}, data) {

        commit('SWITCHMASK')
    },
    toRefresh({commit}, data) {
        commit('TOREFRESH',data)
    },
    navIsShow({commit}, data) {
        commit('NAVISSHOW')
    },
    confirmSend({commit}, data) {
        commit('CONFIRMSEND')
    },
    confirmShow({commit}, data) {
        commit('CONFIRMSHOW')
    },
    getUserConfig({commit}){
        let params={
            token:this.state.baseData.token,
            version:this.state.baseData.version
        }
        api.handleGetConfig(params).then(function (data) {
            //this.$store.dispatch('getConfig',data)
            if(data.code===1000){
                commit('GETUSERCONFIG',data)
            }
        })

    }
}