import develop from './src/components/Develop.vue';

export default vuty = {
	install(Vue, options) {
		const components = {
			develop,
		}
		for (const [name, c] of Object.entries(components)) {
			Vue.component(name, c)
		}
	},
}
