import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [] as string[],
    dones: [] as string[],
    deletes: [] as string[]
  },
  mutations: {
    add (state, value) {
      state.todos.push(value)
    },
    delete (state, i) {
      const item = state.todos[i]
      state.deletes.push(item)
      state.todos.splice(i, 1)
    },
    check (state, i) {
      const item = state.todos[i]
      state.dones.push(item)
      state.todos.splice(i, 1)
    }
  },
  actions: {},
  modules: {}
})
