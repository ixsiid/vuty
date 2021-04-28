<template>
	<div class="overlay_dialog" v-show="showing" v-on:click="close">
    <div v-on:click.stop="() => {}"><slot /></div>
	</div>
</template>

<script>
export default {
  name: 'OverlayDialog',
  components: {},
  props: {
    show: {
      type: String,
      require: true,
      default: null,
    },
  },
  data: function() { return { showing: false, children: [] }; },
  methods: {
    close() {
      this.$emit('close');
      this.showing = false;
    },
  },
  watch: {
    show(new_value) {
      if (!new_value) {
        this.showing = false;
        return;
      }
      
      let show = false;
      this.children.forEach(x => {
        if (x.name == this.show) {
          show = true;
          x.style.display = x.display;
        } else {
          x.style.display = 'none';
        }
      });

      this.showing = show;
    },
  },
  mounted() {
    this.children = this.$slots.default.map(x => ({
      name: x.data.attrs.name,
      style: x.elm.style,
      display: x.elm.style.display,
    }));
  },
};
</script>

<style scoped>
.overlay_dialog {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: rgba(128, 128, 128, 0.3);
}
</style>