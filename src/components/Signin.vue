<template>
  <div>
      <div class="denglu">
      <img src="../assets/denglu.jpg" alt="">
    </div>
    <el-form
      :model="loginform"
      :rules="rules"
      ref="loginform"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginform.username"></el-input>
      </el-form-item>
        <el-form-item label="密码" prop="password">
        <el-input v-model="loginform.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginform')">立即创建</el-button>
        <el-button @click="resetForm('loginform')">重置</el-button>
         <el-button @click="page">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
   data() {
      return {
        loginform: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码', trigger: 'blur' },
            { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/app/admin/login',this.loginform).then(res=> {
              console.log(res);
              if(res.data.code===400) {
                 this.$message.error('用户名或密码错误');
              }else if (res.data.code===200) {
            
                this.usertoken="Bearer" + res.data.data.token;
              }
              let usertoken="Bearer" + res.data.data.token;
              this.$store.commit('changeLogin',usertoken)
              this.$router.push('/header')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       page(){
            this.$router.push('/Registrationpage');
            
        }
    }
};
</script>
<style lang="scss">
.denglu {
  position: relative;
     img{
       width: 100%;
       height: 718px;
     }
}
.demo-ruleForm {
  width: 20%;
  position: absolute;
  top: 180px;
  left: 500px;
}
.el-form-item__error {
  color: black;
}
</style>