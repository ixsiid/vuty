<template>
	<div id="title">
    <Develop />
		<h1>Hello, world</h1>
    <CheckButton text="Message" v-model="checkValue" :hue="30" darkmode />
    <OverlayDialog :show="dialog" v-on:close="dialog_closed">
      <div class="dialog" name="dialog1"><p>Hello, world</p></div>
      <div class="dialog" name="dialog2"><p>2nd, world</p></div>
      <div class="dialog" name="dialog3"><p>3rd, world</p></div>
    </OverlayDialog>
    <p>Show dialog
      <button v-on:click="() => dialog = 'dialog1'">hello</button>
      <button v-on:click="() => dialog = 'dialog2'">dialog2</button>
      <button v-on:click="() => dialog = 'dialog3'">3</button>
    </p>
	</div>
</template>

<script>
import Develop from "./components/Develop.vue";
import CheckButton from './components/CheckButton.vue';
import OverlayDialog from './components/OverlayDialog.vue';

export default {
  name: "App",
  components: {
    Develop,
    CheckButton,
    OverlayDialog,
  },
  data: function() {
    return {
      view: "top",
      dialog: null,
    };
  },
  computed: {
    checkValue: {
      get: function() { return !!this.dialog; },
      set: function(value) { console.log(value); this.dialog = value ? 'dialog2' : null; },
    },
  },
  methods: {
    dialog_closed() {
      this.checkValue = false;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

.dialog {
  background-color: white;
  padding: 2em;
}
</style>