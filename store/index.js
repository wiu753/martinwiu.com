const state = () => ({})
const mutations = {}
const actions = {}
const getters = {
  age: () => {
    const dateString = '1995/06/21'
    const today = new Date()
    const birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  },
  moo: () => {
    return `
    < mooooooooooooooooooooooooooooooooooooo >
     ----------------------------------------
            \\   ^__^
             \\  (oo)\\_______
                (__)\\       )\\/\\
                    ||----w |
                    ||     ||`
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
