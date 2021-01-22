<template>
  <ul class="todo-list">
    <draggable
      v-model="activeTodos"
      handle=".handle"
      v-bind="{ chosenClass: 'chosen', animation: 600 }"
    >
      <TodoItems
        v-for="activeTodo in activeTodos"
        :key="activeTodo.id"
        :todoProps="activeTodo"
        v-model:todoProps="activeTodo.content"
        @handle-update-edit="
          updateEdit(
            activeTodo.id,
            activeTodo.content,
            (activeTodo.edit = false)
          )
        "
        @handle-show-edit="handleEdit(activeTodo.id)"
      />
    </draggable>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { VueDraggableNext } from "vue-draggable-next";
import TodoItems from "./TodoItems";

export default {
  name: "activeTodo",
  components: { TodoItems, draggable: VueDraggableNext },
  setup() {
    const store = useStore();
    const activeTodos = computed({
      get: () => store.getters.activeTodos,
      set: (todosSorted) => store.dispatch("activeSort", todosSorted),
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
      activeTodos,
      handleEdit,
      updateTodo,
      deleteTodos,
      updateEdit,
    };
  },
};
</script>

<style>
</style>