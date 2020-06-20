<template>
    <div>
         <div class="header">
              <div class="logo">
                  <img src="../assets/logo1.jpg" alt="">
              </div>
              <ul>
                    <!-- <li v-for="(item,index) in datalsit " :key="index">{{item.name}}</li> -->
                      <li @click="change()">{{name}}</li>
              </ul>
         </div>
    </div> 
</template>
<script>
export default {
    //   props:{
    //     datalsit:{
    //         type:Array,
    //         required:true,
    //     }
       
    // },
     data() {
            return {
                name:"女装"
            }
        },
    methods: {
        change() {
            console.log()
            this.$emit('aa',this.name)
        }
    },
}
</script>

<style lang="scss">
    .header {
        width:90%;
        height: 100px;
        border: 1px solid #0000;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .logo {
             width: 80px;
            height: 100px;
        }
        img {
            width: 80px;
            height: 40px;
        }
        ul {
      list-style: none;
      display: flex;
      align-items:center 
        }
        li {
            width: 80px;
            height: 40px;
            text-align: center;
            border: 1px solid cyan;
            line-height: 40px;
            border-radius: 5px;
             margin: 0px 0px 0px 10px;//上右下左
        }
    }
</style>