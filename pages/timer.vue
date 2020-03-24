<template>
  <div id="timer">
    <headerComponent>タイマー</headerComponent>
    <v-container class="timer elevation-0">
      <p>デフォルト1分・音量注意</p>
      <v-layout class="justify-space-around">
        <v-btn @click="countNumberSec(30)">+30秒</v-btn>
        <v-btn @click="countNumberSec(60)">+1分</v-btn>
        <v-btn @click="countNumberSec(300)">+5分</v-btn>
      </v-layout>
      <br />
      <div class="time">{{ formatTime }}</div>
      <br />
      <v-layout class="justify-space-around">
        <v-btn class="elevation-4" v-if="!timerOn" @click="start" icon x-large outlined>
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <v-btn class="elevation-0" v-if="timerOn" @click="stop" icon x-large outlined>
          <v-icon>mdi-stop</v-icon>
        </v-btn>
        <v-btn class="elevation-4" @click="refresh" icon x-large outlined>
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// import moment from "moment";
import sample from "~/assets/alerm.mp3";
export default {
  name: "timer",
  data() {
    return {
      sec: 60,
      audioElem: null,
      timerOn: false,
      timerObj: null
    };
  },
    components: {
    headerComponent: () => import("~/components/header")
  },
  created() {
    // console.log(moment());
  },
  methods: {
    countNumberSec(number) {
      this.sec += number;
    },
    count: function() {
      this.sec--;
      if (this.timerOn && this.sec === 0) {
        this.audioElem = new Audio();
        this.audioElem.src = sample;
        this.audioElem.play();
        this.timerOn = false;
        clearInterval(this.timerObj);
      }
    },

    start: function() {
      if (this.sec === 0) {
        this.sec = 60;
      }
      // let self = this;
      this.timerObj = setInterval(this.count, 1000);
      this.timerOn = true; //timerがOFFであることを状態として保持
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false; //timerがONであることを状態として保持
    },

    refresh: function() {
      // this.min = 0;
      this.sec = 0;
      clearInterval(this.timerObj);
    },

    complete: function() {
      clearInterval(this.timerObj);
    }
  },
  computed: {
    formatTime: function() {
      // 分
      let min = ("00" + Math.floor(this.sec / 60)).slice(-2);
      // 秒
      let displaySec = ("00" + (this.sec % 60)).slice(-2);

      return `${min}:${displaySec}`;
    }
  }
};
</script>

<style scoped>
#timer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0 !important;
}
.time {
  font-size: 50px;
  text-align: center;
}
</style>