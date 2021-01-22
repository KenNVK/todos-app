<template>
  <footer class="footer">
    <div class="footer-info">
      <img src="../assets/images/ken.jpg" alt="photo" />
      <span>{{ new Date().getFullYear() }} Written by</span>
      <a href="https://github.com/KenNVK/todos-app">#KenNVK</a>
    </div>
    <div class="footer-switch">
      <input
        name="checkbox"
        id="theme-mode"
        type="checkbox"
        v-model="switchToggle"
      />
      <label
        class="switch"
        for="theme-mode"
        :class="switchToggle ? 'active' : ''"
      ></label>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "Footer",
  setup() {
    const switchToggle = ref(true);
    const defaultTheme = ref("dark");
    const store = useStore();
    const setTheme = (themeMode) => store.dispatch("setTheme", themeMode);

    // Set default theme and app title
    onMounted(() => {
      document.title = "Todos app";
      document.body.classList.add("body-background");
      document.documentElement.setAttribute("theme", defaultTheme.value);
    });
    // Select theme
    watch(switchToggle, () => {
      switchToggle.value ? setTheme(defaultTheme.value) : setTheme("light");
    });
    return { switchToggle };
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  height: 56px;
  font-style: italic;
  background-color: var(--footer-background-color);
  display: flex;
  justify-content: space-between;
}

.footer-info img {
  width: 36px;
  border-radius: 50%;
  margin: 8px 8px 10px 16px;
  vertical-align: middle;
}

.footer-info span {
  color: var(--text-color);
  line-height: 56px;
  font-weight: 100;
}

.footer-info a {
  text-decoration: none;
  color: var(--footer-link-color);
  margin-left: 4px;
}

/* Togle switch */
.switch {
  position: absolute;
  top: 18px;
  right: 20px;
  background: #ccc;
  width: 30px;
  height: 14px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  margin: 5px auto;
}

.switch.active {
  background-color: rgba(14, 128, 221, 0.65);
}

.switch::after {
  content: " ";
  position: absolute;
  top: -3px;
  right: 16px;
  padding: 10px;
  border-radius: 50%;
  background-color: #f3f3f3;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.switch.active::after {
  right: -4px;
  background-color: #0e80dd;
}

.switch:hover::after {
  box-shadow: 0 0 10px #0e80dd, inset 0 0 5px #0e80dd;
}
</style>