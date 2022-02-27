<template>
  <div class="header">
    <i class="ri-todo-line todos-icon"></i>
    <h1>todos list</h1>
    <form @submit="onSubmit">
      <input
        name="checkbox"
        type="checkbox"
        id="all-check"
        :checked="allChecked"
        @change="markCompletedAll(allChecked)"
      />
      <label v-show="todos.length > 0" name="checkbox" for="all-check"></label>
      <span class="validate-msg" v-if="validationMsg !== ''">
        {{ validationMsg }}
      </span>
      <input type="text" placeholder="Enter todo here..." v-model="content" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  setup() {
    const content = ref("");
    const validationMsg = ref("");
    const store = useStore();
    const todos = computed(() => store.state.todos);
    const allChecked = computed(() => store.getters.allChecked);
    const addTodo = newTodo => store.dispatch("addTodo", newTodo);
    const markCompletedAll = allChecked => store.dispatch("markCompletedAll", allChecked);

    const onSubmit = event => {
      event.preventDefault();
      if (content.value !== "") {
        addTodo({
          id: uuidv4(),
          content: content.value,
          completed: false,
          edit: false,
        });
        content.value = "";
      } else {
        validationMsg.value = "Input is empty !";
        setTimeout(() => {
          validationMsg.value = "";
        }, 2000);
      }
    };
    return {
      content,
      onSubmit,
      validationMsg,
      todos,
      allChecked,
      markCompletedAll,
    };
  },
};
</script>

<style scoped>
.header {
  color: #4a5f88;
}

.todos-icon {
  position: absolute;
  font-size: 26px;
}

h1 {
  position: relative;
  text-align: center;
  font-size: 64px;
  font-weight: 300;
  cursor: default;
  margin-bottom: 10px;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--app-background-color);
  border: 1px solid var(--border-color);
}

label[for="all-check"] {
  margin-left: 10px;
}

li input[type="checkbox"]:checked + label[for="all-check"]::after {
  opacity: 1;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  font-size: 18px;
  border: none;
  color: var(--text-color);
  background-color: var(--background-color);
  overflow: hidden;
  outline: none;
}

input[type="submit"] {
  padding: 18px 20px;
  font-size: 18px;
  border: 0;
  color: #e2e2e2;
  background-color: #4a5f88;
  cursor: pointer;
  outline: none;
}

input[type="submit"]:hover {
  background-color: rgba(73, 94, 136, 0.95);
}

.validate-msg {
  position: absolute;
  left: 100px;
  bottom: -30px;
  z-index: 10;
  padding: 10px;
  border-radius: 12px;
  line-height: 1.2;
  background-color: rgba(138, 37, 6, 0.85);
  color: #a3a3a3;
}

.validate-msg::after {
  display: block;
  content: "";
  position: absolute;
  left: 54px;
  bottom: 38px;
  border-bottom: 10px solid rgba(138, 37, 6, 0.85);
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
}
</style>
