<template>
  <li>
    <span class="handle drag-icon">
      <i class="ri-drag-drop-line"></i>
    </span>
    <input
      name="checkbox"
      type="checkbox"
      :id="todoProps.id"
      :checked="todoProps.completed"
      @change="markCompleted(todoProps.id)"
    />
    <label name="checkbox" :for="todoProps.id"></label>
    <span
      class="todo-content"
      :class="todoProps.completed ? 'isCompleted' : ''"
      @dblclick="handleShowEdit"
    >
      {{ todoProps.content }}
    </span>
    <input
      type="text"
      v-focus
      v-if="todoProps.edit === true"
      :value="todoProps.content"
      @input="$emit('update:todoProps', $event.target.value)"
      @blur="handleUpdateEdit"
      @keyup.enter="handleUpdateEdit"
    />
    <span class="delete-icon" @click="deleteTodo(todoProps.id)">
      <i class="ri-delete-bin-6-line"></i>
    </span>
  </li>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "TodoItem",
  props: ["todoProps"],
  directives: {
    focus: {
      mounted: (el) => {
        el.focus();
      },
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const markCompleted = (id) => store.dispatch("markCompleted", id);
    const deleteTodo = (id) => store.dispatch("deleteTodo", id);
    const handleEdit = (id) => store.dispatch("handleEdit", id);
    const handleUpdateEdit = () => emit("handle-update-edit");
    const handleShowEdit = () => emit("handle-show-edit");
    return {
      markCompleted,
      deleteTodo,
      handleEdit,
      handleUpdateEdit,
      handleShowEdit,
    };
  },
};
</script>


<style>
</style>