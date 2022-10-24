// code below is a stub. Should be completely replaced with real implementation of vuex
const store = {
  dispatch: function () {},
  state: { cart: [] },
  install: app => {
    app.config.globalProperties.$store = store
  }
}

export default store