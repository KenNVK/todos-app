<template>
  <ul class="navbar">
    <li><router-link to="/">All</router-link></li>
    <li><router-link to="/active">Active</router-link></li>
    <li><router-link to="/completed">Completed</router-link></li>
    <li>{{ activeTodos.length }} Todos left</li>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Navbar",
  setup() {
    const store = useStore();
    const activeTodos = computed(() => store.getters.activeTodos);
    return { activeTodos };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  list-style: none;
  background-color: var(--app-background-color);
  border-right: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  position: relative;
}

li + li {
  margin-left: 10px;
}

li:last-child {
  margin-left: auto;
  padding: 4px;
  color: var(--text-color);
  cursor: default;
}

a {
  display: block;
  color: #4a5f88;
  padding: 2px 6px;
  cursor: pointer;
  text-decoration: none;
}

a.router-link-exact-active {
  border: 1px solid #6c88c0;
  color: #6c88c0;
}
</style>tyle>