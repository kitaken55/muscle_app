<template>
  <v-row justify="center">
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline" style="margin-left: 10px;">詳細入力</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div>首</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>肩</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>胸</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>左二等筋</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>右二等筋</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>左前腕</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>右前腕</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>上腹部</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>下腹部</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>ウエスト</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>ヒップ</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>左太もも</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>右太もも</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>左ふくらはぎ</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
            <div>右ふくらはぎ</div>
            <div class="d-flex">
              <input v-model="body_weight" type="text" class="border" />
              <div class="kg">&thinsp;kg</div>
            </div>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>

<style>

.border {
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

</style>