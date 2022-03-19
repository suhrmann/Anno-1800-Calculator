<template>
  <div text-center d-flex align-center>
    <table v-if="treeData.name" style="display:inline-block">
      <tr>
        <td
          :colspan="treeData.children ? treeData.children.length * 2 : 1"
          :class="{parentLevel: treeData.children}"
        >
          <div :class="{node: true}">
            <div
              class="person"
              @click="$emit('click-node', treeData)"
              @mouseover="$emit('hover-node', treeData)"
            >
              <div
                v-tooltip="{
              content: getBuildingInfo(treeData),
              boundariesElement: 'window',
              placement: 'right',
              classes: ['popover'],
              offset: 1000,
              delay: {
                show: 50,
                hide: 50,
              },
            }"
                class="avat"
              >
                <img :src="getBuildingImage(treeData.name, treeData.regionGUID)" :alt="treeData.name">
              </div>
              <div class="name">{{getBuildingName(treeData.name, treeData.regionGUID)}}</div>
              <div class="name">{{treeData.relativeAmount}}</div>
            </div>
          </div>
        </td>
      </tr>
      <tr v-if="treeData.children">
        <td
          v-for="(children, index) in treeData.children"
          :key="index"
          colspan="2"
          class="childLevel"
        >
          <TreeChart
            :json="children"
            @hover-node="$emit('hover-node', $event)"
            @click-node="$emit('click-node', $event)"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { helperFunctionMixin } from './helperFunctionMixin.js'

export default {
  name: 'TreeChart',
  props: ['json'],
  mixins: [helperFunctionMixin],
  data () {
    return {
      data: null,
      treeData: {},
      path: '',
      spt: 1, // shortest production time in chain
      counter: 1
    }
  },

  computed: {

  },

  created () {},

  watch: {
    json: {
      handler: function (Props) {
        const extendKey = function (jsonData) {
          jsonData.extend =
            jsonData.extend === undefined ? true : !!jsonData.extend
          if (Array.isArray(jsonData.children)) {
            jsonData.children.forEach((c) => {
              extendKey(c)
            })
          }
          return jsonData
        }
        if (Props) {
          this.treeData = extendKey(Props)
        }
      },
      immediate: true
    }
  },
  methods: {
    toggleExtend: function (treeData) {
      treeData.extend = !treeData.extend
      this.$forceUpdate()
    },

    getBuildingInfo (nodeData) {
      const building = this.getBuildingByName(nodeData.name, nodeData.regionGUID)

      // build string
      const headline = 'Building: ' + building.building
      const product = 'Product: ' + building.product
      const prodTime = 'Production Time: ' + building.productionTime

      const buildingInfo = headline + '<br/>' + product + '<br/>' + prodTime

      return buildingInfo
    },

    getBuildingImage (name, regionGUID) {
      const building = this.getBuildingByName(name, regionGUID)
      return this.getDirectImage(building.img, 'buildings')
    },
    getBuildingName (name, regionGUID) {
      const building = this.getBuildingByName(name, regionGUID)
      return building.building
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: separate !important;
  border-spacing: 0 !important;
}
td {
  position: relative;
  vertical-align: top;
  padding: 0 0 5px 0;
  text-align: center;
}
.extend_handle {
  position: absolute;
  left: 50%;
  bottom: 30px;
  width: 10px;
  height: 10px;
  padding: 10px;
  transform: translate3d(-15px, 0, 0);
  cursor: pointer;
}
.extend_handle:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid;
  border-color: #ccc #ccc transparent transparent;
  transform: rotateZ(135deg);
  transform-origin: 50% 50% 0;
  transition: transform ease 300ms;
}
.extend_handle:hover:before {
  border-color: #333 #333 transparent transparent;
}
.extend .extend_handle:before {
  transform: rotateZ(-45deg);
}
.extend::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 15px;
  height: 15px;
  border-left: 2px solid #ccc;
  transform: translate3d(-1px, 0, 0);
}
.childLevel::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 100%;
  height: 15px;
  border-left: 2px solid #ccc;
  transform: translate3d(-1px, 0, 0);
}
.childLevel::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -15px;
  border-top: 2px solid #ccc;
}
.childLevel:first-child:before,
.childLevel:last-child:before {
  display: none;
}
.childLevel:first-child:after {
  left: 50%;
  height: 15px;
  border: 2px solid;
  border-color: #ccc transparent transparent #ccc;
  border-radius: 6px 0 0 0;
  transform: translate3d(1px, 0, 0);
}
.childLevel:last-child:after {
  right: 50%;
  height: 15px;
  border: 2px solid;
  border-color: #ccc #ccc transparent transparent;
  border-radius: 0 6px 0 0;
  transform: translate3d(-1px, 0, 0);
}
.childLevel:first-child.childLevel:last-child::after {
  left: auto;
  border-radius: 0;
  border-color: transparent #ccc transparent transparent;
  transform: translate3d(1px, 0, 0);
}
.node {
  position: relative;
  display: inline-block;
  width: 13em;
  box-sizing: border-box;
  text-align: center;
}
.node .person {
  position: relative;
  display: inline-block;
  z-index: 2;
  width: 100%;
  overflow: hidden;
}
.node .person .avat {
  display: block;
  width: 4em;
  height: 4em;
  margin: auto;
  overflow: hidden;
  background: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.node .person .avat img {
  width: 100%;
  height: 100%;
}
.node .person .name {
  height: 2em;
  line-height: 2em;
  overflow: hidden;
  width: 100%;
}
.landscape {
  transform: rotate(-90deg);
  padding: 0 4em;
}
.landscape .node {
  text-align: left;
  height: 8em;
  width: 8em;
}
.landscape .person {
  position: relative;
  transform: rotate(90deg);
  padding-left: 4.5em;
  height: 4em;
  top: 4em;
  left: -1em;
}
.landscape .person .avat {
  position: absolute;
  left: 0;
}
.landscape .person .name {
  height: 4em;
  line-height: 4em;
}

.popover {
  background: #424242;
  color: white;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
  max-width: 250px;
}
</style>
