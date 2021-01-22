<template>
  <ul class="todo-list">
    <draggable
      v-model="todos"
      handle=".handle"
      v-bind="{ chosenClass: 'chosen', animation: 600 }"
    >
      <TodoItems
        v-for="todo in todos"
        :key="todo.id"
        :todoProps="todo"
        v-model:todoProps="todo.content"
        @handle-update-edit="
          updateEdit(todo.id, todo.content, (todo.edit = false))
        "
        @handle-show-edit="handleEdit(todo.id)"
      />
    </draggable>
  </ul>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { VueDraggableNext } from "vue-draggable-next";
import TodoItems from "./TodoItems";
export default {
  name: "Todos",
  components: { TodoItems, draggable: VueDraggableNext },
  setup() {
    const newTodo = ref(todos);
    const store = useStore();
    const todos = computed({
      get: () => store.state.todos,
      set: (todosSorted) => store.dispatch("allSort", todosSorted),
    });
    const handleEdit = (id) => store.dispatch("handleEdit", id);
    const updateTodo = () => store.dispatch("updateTodo");
    const deleteTodos = () => store.dispatch("deleteTodos");
    const updateEdit = (id, content, edit) => {
      if (content !== "") {
        updateTodo({ id, content, edit });
      } else {
        deleteTodos(id);
      }
    };
    return {
      newTodo,
      todos,
      updateTodo,
      handleEdit,
      deleteTodos,
      updateEdit,
    };
  },
};
</script>

<style>
</style>