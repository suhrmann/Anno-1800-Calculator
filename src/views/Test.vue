<template>
  <div>
    <h1>This is a Testpage</h1>
    <br />
    <br />
    <p>Invoke methods</p>
    <v-container>
      <v-row>
        <v-col md3>
          <v-btn @click="getNeedType" color="success">Get Need Type</v-btn>
        </v-col>
        <v-col md3>
          <v-text-field
            v-model="productGUID"
            label="Product GUID"
            id="id"
          ></v-text-field>
        </v-col>
        <v-col md3>
          <v-text-field
            v-model="popGUID"
            name="name"
            label="Pop GUID"
            id="id"
          ></v-text-field>
        </v-col>
      </v-row>
      <p>Result: {{ this.result }}</p>
    </v-container>
  </div>
</template>

<script>
import { checkNeedType } from "@/data/anno1800params";

export default {
  data() {
    return {
      productGUID: 1010349,
      popGUID: 15000001,
      result: ""
    };
  },

  computed: {
    prGUID() {
      return parseInt(this.productGUID);
    },
    poGUID() {
      return parseInt(this.popGUID);
    }
  },
  methods: {
    getNeedType() {
      this.result = checkNeedType(this.prGUID, this.poGUID).description;
    }
  }
};
</script>
<style lang=""></style>
