<template>
  <div>
    <div class="zhuce">
      <img src="../assets/denglu.jpg" alt="">
    </div>
    <el-form
      :model="registerform"
      :rules="rules"
      ref="registerform"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerform.email"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickName">
        <el-input v-model="registerform.nickName"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerform.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerform.password"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="icon">
        <el-input v-model="registerform.icon"></el-input>
      </el-form-item>
      <el-form-item label="说明" prop="note">
        <el-input type="textarea" v-model="registerform.note"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerform')">立即创建</el-button>
        <el-button @click="resetForm('registerform')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerform: {
        email: "",
        icon: "",
        nickName: "",
        note: "",
        password: "",
        username: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            min: 15,
            max: 20,
            message: "长度在 15 到 20 个字符",
            trigger: "blur"
          }
        ],
        nickName: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" }
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ],
        note: [
          { required: true, message: "请填写说明", trigger: "blur" },
          { min: 0, max: 10, message: "长度在 0 到 10个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/app/admin/register", this.registerform).then(res => {
            console.log(res);
            if(res.data.code== 200) {
               this.$router.push('/Signin');
            };
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss">
.zhuce {
  position: relative;
     img{
       width: 100%;
       height: 718px;
     }
}
.demo-ruleForm {
  width: 25%;
  position: absolute;
  top: 120px;
  left: 500px;
}
.el-form-item__error {
  color: black;
}
</style>