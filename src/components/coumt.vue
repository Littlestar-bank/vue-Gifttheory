<template>
    <div class="num">
      <input type="button" value="+" @click="jia()">
      {{num}}
       <input type="button" value="-" @click="jian()">
       {{num2}}
    </div>
</template>
<script>
import {mapState,mapGetters}from 'vuex'
export default {
    //  data() {
    //      return {
    //          num:this.$store.state.num
    //      }
    //  },
    computed:{
        ...mapState({
 num() {
                return this.$store.state.num
            },
            num2() {
                return this.$store.getters.count
            }
        }),
        ...mapGetters({
            count:'count'
        })
           
    },
     methods: {
         jia(num) {
            //  this.num+=5
            // this.$store.commit('incrementa',{n:num,name:"zhangsan"})
            // this.$store.commit({
            //     type:'incrementa',
            //     n:num,
            //     name:"zhuangsan"
            // })
            this.$store.dispatch('Addactions')
         },
          jian(num) {
             this.$store.commit('mincrement',num)
         }
     },
}
</script>
<style lang="scss">
    .num {
        text-align: center;
        margin-top: 100px;
    }
</style>