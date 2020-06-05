const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU'

const state = () => ({
  mobileMenu: false
})

const mutations = {
  [TOGGLE_MOBILE_MENU](state) {
    state.mobileMenu = !state.mobileMenu
  }
}

const actions = {
  toggleMobileMenu: ({ commit }) => {
    commit('TOGGLE_MOBILE_MENU')
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
