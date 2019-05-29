import state from './state'
export default {
    SWITCHMASK(state) {

        state.tips.maskShow=!state.tips.maskShow
    },
    NAVISSHOW(state) {
        state.baseData.navIsShow=!state.baseData.navIsShow
    },
    CONFIRMSEND(state) {
        state.baseData.confirmSend=!state.baseData.confirmSend
    },    CONFIRMSHOW(state) {
        state.baseData.confirmShow=!state.baseData.confirmShow
    },
    GETUSERCONFIG(state,data){
        state.baseData.baseConfig=data
    },
    TOREFRESH(state,data){

        state.baseData.isRefresh=data
    },
    handleMutationsQuitLogin(state, data) {
        sessionStorage.clear()
        state.baseData.isLogin = false
    },
    handleMutationsChangeLogin(state, data) {
        state.baseData.isLogin = true
        state.baseData.name = data
    },
}