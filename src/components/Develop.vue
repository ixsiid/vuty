<template>
	<div class="develop" v-show="isDevelopment">
    <slot name="header"><div class="view header">Developement mode</div></slot>
    <slot name="footer"><div class="view footer">Developement mode</div></slot>
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
  computed: {
    isDevelopment: () => process.env.NODE_ENV && process.env.NODE_ENV.startsWith('development')
  },
};
</script>

<style scoped>
.develop {
  position: fixed;

  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  pointer-events: none;
}

.view {
  width: 100%;
  background-color: rgba(255, 0, 0, 0.3);
  color: white;
  font-weight: bold;
  padding: 0.3em 1em 0.3em 3em;
  margin: 0;
}
</style>