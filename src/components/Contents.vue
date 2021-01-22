<template>
  <div>
    <Progressbar v-show="todos.length > 0" />
    <Navbar />
    <router-view v-show="todos.length > 0" />
    <ClearCompletedBtn />
  </div>
</template>

<script>
import Navbar from "../components/contents/Navbar";
import Progressbar from "../components/contents/Progressbar";
import ClearCompletedBtn from "../components/contents/ClearCompletedBtn";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Contents",
  components: { Navbar, Progressbar, ClearCompletedBtn },
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos);
    return { todos };
  },
};
</script>

<style>
</style>