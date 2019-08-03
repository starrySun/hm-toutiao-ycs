<template>
  <div class="container">
    <el-card class="mycard">
      <img src="../../assets/images/logo_index.png" alt="" />
      <!-- 表单 -->
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        status-icon
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="loginForm.mobile"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入正确验证码"
            style="width:236px;margin-right:10px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true"
            >我已阅读并同意用户协议和隐私条款</el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login()"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error("手机格式错误"));
      }
      callback();
    };
    return {
      loginForm: {
        mobile: "13211111111",
        code: "246810"
      },
      loginRules: {
        mobile: [
          { required: true, message: "请输入正确手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "请输入6位验证码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      // 1. 对整个表单进行校验
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 2. 校验成功发起登录请求
          this.$http
            .post(
              "http://ttapi.research.itcast.cn/mp/v1_0/authorizations",
              this.loginForm
            )
            .then(() => {
              // res 是响应对象 res.data数据属于响应主体
              // console.log(res.data)
              this.$router.push("/");
            })
            .catch(() => {
              // 请求失败 提示  手机号或验证码错误
              this.$message.error("手机号或验证码错误");
            });
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .mycard {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
    }
  }
}
</style>
