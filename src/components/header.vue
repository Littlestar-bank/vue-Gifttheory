<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="../assets/headerlogo.jpg" alt />
      </div>
      <div class="searchbox">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <ul>
        <li>
          <router-link to="/header">首页</router-link>
        </li>
        <li>
          <router-link to="/Signin">登录</router-link>
        </li>
        <li>
          <router-link to="/Registrationpage">免费注册</router-link>
        </li>
        <li>
          <router-link to>会员</router-link>
        </li>
        <li>
          <router-link to="/Signin">退出</router-link>
        </li>
      </ul>
      <div class="icon">
         <!-- <img :src="iconlast.icon" alt=""> -->
         <p>啦啦啦</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      // iconlast:[]
    };
  },
  mounted() {
    //  this.getdata();
  },
  methods: {
    // getdata(){
    //      this.$axios.get('/app/admin/info').then(res=>{
    //               console.log(res);
    //               this.iconlast=res.data.data
    //             })
    // }
  },
};
</script>
<style lang="scss">
.header {
  width: 1400px;
  height: 100px;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  align-items: center;
  .logo {
    width: 200px;
    height: 100px;
  }
  img {
    width: 200px;
    height: 100px;
  }
  .searchbox {
    display: flex;
    width: 40%;
    border: 2px solid red;
  }
  .el-input__inner {
    border-radius: 0px;
    outline: medium;
    border: none;
  }
  .el-button--primary {
    background-color: red;
  }
  .el-button {
    border-radius: 0px;
    border: 0px solid;
  }
  ul {
    list-style: none;
    display: flex;
    width: 30%;
    margin-left: 40px;
  }
  li {
    width: 80px;
    margin: 0px 10px 0px 0px;
    text-align: center;
  }
  a {
    color: #999;
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
  .activeclass {
    background-color: white;
  }
  .icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
   margin-left: 30px;
  }
  .icon img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}
</style>