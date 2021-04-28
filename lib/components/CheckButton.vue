<template>
	<div class="checkbutton">
    <label><input type="checkbox" v-model="form_checked" :name="name" /><span :style="button_style">{{ text }}</span></label>
	</div>
</template>

<script>
export default {
  name: 'CheckButton',
  components: {},
  props: {
    value: { type: Boolean, default: false },
    text: { type: String, default: 'text' },
    hue: { type: Number, default: 120 },
    darkmode: { type: Boolean, default: false },
    name: { type: String, default: '' },
  },
  data: function() { return {}; },
  computed: {
    form_checked: {
      get() { return this.value },
      set(check) { this.$emit("input", check); }
    },
    button_style() {
      return {
        '--border-color': `hsla(${this.hue}, 100%, ${this.darkmode ? 20 : 40}%, 1.0)`,
        '--bg-color': `hsla(${this.hue}, 90%, ${this.darkmode ? 40 : 98}%, 1.0)`,
        '--bg-color-hover': `hsla(${this.hue}, 90%, ${this.darkmode ? 35 : 90}%, 1.0)`,
        '--bg-color-checked': `hsla(${this.hue}, 90%, ${this.darkmode ? 98 : 40}%, 1.0)`,
        '--bg-color-checked-hover': `hsla(${this.hue}, 90%, ${this.darkmode ? 90 : 35}%, 1.0)`,
        '--color': this.darkmode ? 'white' : 'black',
        '--color-checked': this.darkmode ? 'black' : 'white',
      };
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
}

input {
  display: none;
}

input + span {
  background-color: var(--bg-color);
  color: var(--color);
  border: 1px solid var(--border-color);
  padding: 0.2em 0.5em;
  border-radius: 5em;
  user-select: none;
}

input:checked + span {
  background-color: var(--bg-color-checked);
  color: var(--color-checked);
}

input + span:hover {
  background-color: var(--bg-color-hover);
}

input:checked + span:hover {
  background-color: var(--bg-color-checked-hover);
}
</style>