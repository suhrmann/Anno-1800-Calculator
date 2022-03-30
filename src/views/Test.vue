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
      <p>Result: {{ this.result1 }}</p>
    </v-container>
    <v-container>
      <v-row>
        <v-col md3>
          <v-btn @click="getProductInfo" color="success">Get Product Info</v-btn>
        </v-col>
      </v-row>
      <p>Result: {{ this.result2 }}</p>
    </v-container>
    <v-container>
      <v-row>
        <v-col md3>
          <v-btn @click="getRelevantProducts" color="success">Get Relevant Products</v-btn>
        </v-col>
      </v-row>
      <p>Result: {{ this.result3 }}</p>
    </v-container>
        <v-container>
      <v-row>
        <v-col md3>
          <v-btn @click="generic_testmethod" color="success">Generic Test Method</v-btn>
        </v-col>
      </v-row>
      <p>Result: </p>
    </v-container>
  </div>
</template>

<script>
import { checkNeedType, getProductInformation, getRelevantProducts, testmethod } from '@/data/anno1800params'

export default {
  data () {
    return {
      productGUID: 1010205,
      popGUID: 15000001,
      result1: '',
      result2: '',
      result3: '',
      productNameSwitch: false
    }
  },

  computed: {
    prGUID () {
      return parseInt(this.productGUID)
    },
    poGUID () {
      return parseInt(this.popGUID)
    }
  },
  methods: {
    getNeedType () {
      this.result1 = checkNeedType(this.prGUID, this.poGUID).description
    },
    getProductInfo () {
      this.result2 = getProductInformation(this.prGUID)
    },
    getRelevantProducts () {
      const products = getRelevantProducts(this.productNameSwitch)
      const fullInfo = []
      products.forEach(product => {
        fullInfo.push(getProductInformation(this.productNameSwitch ? product.guid : product))
      })
      fullInfo.sort((a, b) => a.firstLevel - b.firstLevel)
      this.result3 = fullInfo
    },

    generic_testmethod () {
      testmethod()
    }
  }
}
</script>
<style lang=""></style>
