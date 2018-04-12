<template>
<div class="hello">
  <div id="hello">
        <h1>{{message}}</h1>

        <p style="width:100%;">
            <input v-model='shuju' type="text" style="line-height:2.5;width:70%;border-radius:10px;border:1px solid gray;">
            <input value="提交" @click="TJClick" type="button" style="line-height:2.5;width:20%;border:1px solid gray;border-radius:10px;">
        </p>
        <!-- 未完成 -->
       <div>
         <p class="wei"><span>未完成</span><span></span></p>
         <ul v-for='(item,index) in arr' :key="item.son" style="list-style:none;width:100%;margin:0;padding:0;">
           <li style="width:90%;margin:0 5%;">
             <p style="display:flex;justify-content: space-between;">
               <span>{{item.son}}</span>
               <span>{{item.time}}</span><br>
             </p>
             <p style="display:flex;justify-content: space-between;">
                <input type="checkbox" @click='wc(item,index)'>
                <input type="button"  @click="shan(item,index)" value="取消">
             </p>  
           </li>
         </ul>
       </div>
       <br>
<!-- 已经完成 -->
       <div>
         <p class="wei"><span>已完成</span><span></span></p>
          <ul v-for='(item,index) in over' :key="item.son" style="list-style:none;width:100%;margin:0;padding:0;">
           <li style="width:90%;margin:0 5%;">
             <p style="display:flex;justify-content: space-between;">
               <span>{{item.son}}</span>
               <span>{{item.time}}</span><br>
             </p>
             <p style="display:flex;justify-content: space-between;">
                <span></span>
                <input type="button" @click="kill(item,index)" value="删除">
             </p>  
           </li>
         </ul>
       </div><br>
       <!-- 已经取消 -->
        <div>
         <p class="wei"><span>已取消</span><span></span></p>
          <ul v-for='item in qx' :key="item.son" style="list-style:none;width:100%;margin:0;padding:0;">
           <li style="width:90%;margin:0 5%;">
             <p style="display:flex;justify-content: space-between;">
               <span>{{item.son}}</span>
               <span>{{item.time}}</span><br>
             </p>
             <p style="display:flex;justify-content: space-between;">
                <span></span>
                <input type="button" @click="hui(item)" value="恢复">
             </p>  
           </li>
         </ul>
       </div>




  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      arr: [],
      over: [],
      qx: [],
      message: "Note Book",
      shuju: "",
      wwc: "",
      time: ""
    };
  },
  methods: {
    TJClick: function() {
      if (this.shuju == null) {
        alert("请输入姓名!!");
      } else {
        var son = this.shuju;
        this.wwc = son;
        var x = new Date();
        this.time = new Date();
        var time = this.time;
        var all = { son, time };
        this.arr.unshift(all);
      }
      this.shuju = null;
    },
    wc: function(item, index) {
      var son = item.son;
      var time = item.time;
      var all = { son, time };
      this.over.unshift(all);
      this.arr.splice(index, 1);
    },
    shan: function(item, index) {
      console.log(item.son, index);
      var son = item.son;
      var time = item.time;
      var all = { son, time };
      this.qx.unshift(all);
      this.arr.splice(index, 1);
    },
    hui: function(item, index) {
      var son = item.son;
      var time = item.time;
      var all = { son, time };
      this.arr.unshift(all);
      this.qx.splice(index, 1);
    },
    kill: function(item, index) {
      this.over.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wei {
  display: flex;
  justify-content: space-between;
  margin: 0 3%;
  padding: 0 3%;
  background-color: #add8e6;
  line-height: 2.5;
  color: white;
  border-radius: 10px;
}
#hello {
  width: 300px;
  height: 600px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 auto;
  overflow: hidden;
}

h1 {
  text-align: center;
  background-color: #add8e6;
  line-height: 2;
  margin: 0;
  color: white;
}
</style>
