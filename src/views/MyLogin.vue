<template>
  <div class="login">
    <div class="myform">
      <div class="title">
        <h3>Login From</h3>
      </div>
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input placeholder="密码" v-model="formdata.pw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="" class="btn" @click="submitfn"
            >login</el-button
          >
        </el-form-item>
      </el-form>
      <div class="tishi">
        <p class="tip">user:admin</p>
        <p class="tip">password:123456</p>
      </div>
    </div>
  </div>
</template>
<script>
import instance from "../api/index";
export default {
  name: "MyLogin",
  data() {
    let userfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("用户格式不对"));
    };
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return;
      return callback(new Error("密码格式不对"));
    };
    return {
      formdata: {
        user: "admin",
        pw: 123456,
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }],
      },
      newdebouncefn: null,
    };
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn, 2000);
  },
  methods: {
    submitfn() {
      this.newdebouncefn();
    },
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let { data } = await instance.post("/login", { user, pw });
      console.log(data);
      console.log(data.data.token);
      if (data.message === "fail") return this.$message.error("登录失败");
      if (data.message === "success") {
        // 存token
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push({ name: "home" });
          },
        });
      }
    },
  },
};
</script>
<style scoped>
.login {
  background-color: #324057;
  width: 100vw;
  height: 100vh;
}
.login .title {
  width: 370px;
  position: absolute;
  left: 50%;
  margin-left: -185px;
  text-align: center;
  top: -80px;
}
.login .title h3 {
  color: #ffffff;
}
.login .myform {
  box-sizing: border-box;
  width: 370px;
  height: 360px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -185px;
  margin-top: -130px;
  padding: 20px 20px 60px;
}
.login .btn {
  width: 100%;
}
.tishi{
  display: flex;
  justify-content: start;
}
.login .tip {
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  margin-right: 15px;
}
</style>