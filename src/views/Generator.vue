<template>
    <div id="generator-view">
        <h1>Generer son CV</h1>
        <hr>
        <br>

        <input type="text" v-model="x" >

        <div id="workbench" @scroll="zoom">

          

        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  components: { VueDraggableResizable },
  name: "generator-view",
  data() {
    return {
      width: 0,
      height: 0,
      x: null,
      y: null
    };
  },
 created:function(){
        this.setCord() //method1 will execute at pageload
        //vm = ( new ( VueDraggableResizable ) ).$mount(document.getElementById("workbench"))
        //document.getElementById("workbench").innerHTML="<vue-draggable-resizable  :w=\"100\" :h=\"100\" v-on:dragging=\"onDrag\" v-on:resizing=\"onResize\" :parent=\"true\"><p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p></vue-draggable-resizable>";
  },
  methods: {
      setCord: function () {
      this.x = document.getElementById("workbench").offsetLeft
      this.y = document.getElementById("workbench").offsetTop
    },
    zoom: user => {
      var workbench = document.getElementById("workbench");
      if (document.body.scrollTop) {
        console.log("top");
      }
    },
    onResize: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    }
  },
  created: function() {
      
  }
};
</script>

<style>
#workbench {
  width: 100%;
  min-height: 1000px;
  max-height: 2339px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  box-sizing: border-box;
}
</style>
