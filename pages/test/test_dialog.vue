<template>
  <v-app>
  <div class="text-xs-center">

      <v-btn slot="activator" color="red lighten-2" @click="showDialog()" dark>
        Click Me
      </v-btn>
    <app-dialog :text="text" ref="dialog"></app-dialog>
  </div>
  </v-app>
</template>

<script>
  import Dialog from "~/components/Dialog.vue";
  export default {
    data () {
      return {
        text: "北県テスト"
      }
    },
    methods: {
      showDialog() {
        this.$refs.dialog.open();
      }
    },
    components: {
      appDialog: Dialog,
    }
  }
</script>