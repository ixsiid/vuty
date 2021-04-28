<template>
	<div class="develop">
    <p>developement mode</p>
	</div>
</template>

<script>
// import Article from "./components/Article.vue";
export default {
  name: "Develop",
  components: {},
  data: function() {
    return {};
  },
  computed: {},
  methods: {
    onWindowLoad() {
    },
  },
  mounted: function() {
    window.addEventListener("load", this.onWindowLoad, {
      once: true,
      passive: true
    });
    dispatchEvent(new PopStateEvent("popstate", {}));
  },
  unmounted: function() {
    window.removeEventListener("load", this.windowLoad, {
      once: true,
      passive: true
    });
  }
};
</script>

<style>
.develop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: columns;
  margin: 0;
  pointer-events: none;
}

.develop > * {
  width: 100%;
  background-color: rgba(255, 0, 0, 0.3);
  color: white;
  font-weight: bold;
  padding: 0.3em 1em 0.3em 3em;
  margin: 0;
}
</style>