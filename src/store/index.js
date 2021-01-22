import { createStore } from "vuex";

const storageData = 'todo_storage';
const storageTheme = 'theme';
const store = createStore({
  state: {
    todos: JSON.parse(localStorage.getItem(storageData)) || [],
    theme: localStorage.getItem(storageTheme),
  },
  getters: {
    progress: state => {
      const todos = state.todos;
      const doneTodos = todos.filter(todo => todo.completed);
      if (todos.length !== 0)
        return `${Math.round(doneTodos.length / todos.length * 100)}%`;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.completed);
    },
    activeTodos: state => {
      return state.todos.filter(todo => !todo.completed);
    },
    allChecked: state => {
      return state.todos.every((todo) => todo.completed);
    },
  },
  actions: {
    markCompleted({ commit }, todoId) {
      commit('mark_completed', todoId);
    },
    markCompletedAll({ commit }, doneTodo) {
      commit('mark_completed_all', doneTodo);
    },
    deleteTodo({ commit }, todoId) {
      commit('delete_todo', todoId);
    },
    deleteDoneTodos({ commit }) {
      commit('delete_done_todos');
    },
    addTodo({ commit }, newTodo) {
      commit('add_todo', newTodo);
    },
    handleEdit({ commit }, todoId) {
      commit('handle_edit', todoId);
    },
    updateTodo({ commit }, editedTodo) {
      commit('update_todo', editedTodo);
    },
    allSort({ commit }, todosSorted) {
      commit('all_sort', todosSorted);
    },
    activeSort({ commit }, todosSorted) {
      commit('active_soft', todosSorted);
    },
    setTheme({ commit }, themeMode) {
      commit('set_theme', themeMode);
    }
  },
  mutations: {
    mark_completed(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        dataSave(state.todos);
      });
    },
    mark_completed_all(state, doneTodo) {
      state.todos.map((todo) => {
        if (todo.completed !== doneTodo) todo.completed = !todo.completed;
        dataSave(state.todos);
      });
    },
    delete_todo(state, todoId) {
      state.todos = state.todos.filter(todo => (todo.id !== todoId));
      dataSave(state.todos);
    },
    delete_done_todos(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
      dataSave(state.todos);
    },
    add_todo(state, newTodo) {
      state.todos.push(newTodo);
      dataSave(state.todos);
    },
    handle_edit(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) todo.edit = !todo.edit;
      });
    },
    update_todo(state) {
      dataSave(state.todos);
    },
    all_sort(state, todosSorted) {
      state.todos = todosSorted;
      dataSave(state.todos);
    },
    active_soft(state, todosSorted) {
      state.todos = store.getters.doneTodos.concat(todosSorted);
      dataSave(state.todos);
    },
    set_theme(state, themeMode) {
      state.theme = themeMode;
      document.documentElement.setAttribute('theme', themeMode);
      console.log(state.theme);
      localStorage.setItem(storageTheme, state.theme);
    }
  },
});

// save to local storage
function dataSave(data) {
  localStorage.setItem(storageData, JSON.stringify(data));
}

export default store;