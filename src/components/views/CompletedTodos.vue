<template>
  <ul class="todo-list todo-list-completed">
    <TodoItems
      v-for="doneTodo in doneTodos"
      :key="doneTodo.id"
      :todoProps="doneTodo"
    />
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TodoItems from "./TodoItems";

export default {
  name: "CompletedTodos",
  components: { TodoItems },
  setup() {
    const store = useStore();
    const doneTodos = computed(() => store.getters.doneTodos);
    return { doneTodos };
  },
};
</script>

<style>
.todo-list.todo-list-completed .drag-icon {
  display: none;
}
.todo-list.todo-list-completed .todo-content {
  cursor: default;
}
</style>