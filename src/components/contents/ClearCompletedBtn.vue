<template>
<<<<<<< HEAD
  <div
    class="clear-all-btn"
    v-show="allChecked && todos.length > 0"
    @click="deleteDoneTodos"
  >
=======
  <div class="clear-all-btn" v-show="allChecked && todos.length > 0" @click="deleteDoneTodos">
>>>>>>> 87dbe02 (fix bug)
    Clear Completed
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ClearCompletedBtn",
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos);
    const allChecked = computed(() => store.getters.allChecked);
<<<<<<< HEAD
    const deleteDoneTodos = () => store.state.deleteDoneTodos;
=======
    const deleteDoneTodos = () => store.dispatch("deleteDoneTodos");
>>>>>>> 87dbe02 (fix bug)
    return { todos, allChecked, deleteDoneTodos };
  },
};
</script>

<style scoped>
.clear-all-btn {
  text-align: center;
  width: 100%;
  margin-top: 10px;
  padding: 6px;
  border-radius: 16px;
  cursor: pointer;
  color: var(--text-color);
  background-color: rgba(56, 134, 62, 0.9);
}

.clear-all-btn:hover {
  background-color: #38863e;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 87dbe02 (fix bug)
