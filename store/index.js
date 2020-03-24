export const state = () => ({
  user: "test"
})

export const mutations = {
  login(state, user) {
    state.user = user
  },
  logout(state) {
    state.user = null
  }
}