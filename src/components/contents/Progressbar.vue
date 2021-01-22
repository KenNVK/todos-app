<template>
  <div class="progress-bar-wrap">
    <div class="progress-bar" :style="{ width: progress }"></div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Progressbar",
  setup() {
    const store = useStore();
    const progress = computed(() => store.getters.progress);
    return { progress };
  },
};
</script>
  
<style scoped>
.progress-bar-wrap {
  position: relative;
  height: 6px;
  width: 100%;
  margin-top: 8px;
  background-color: var(--progress-bar-color);
  border: 1px solid var(--border-color);
}
.progress-bar {
  width: 0;
  height: 100%;
  margin-top: 0;
  background: #38863e;
}
</style>