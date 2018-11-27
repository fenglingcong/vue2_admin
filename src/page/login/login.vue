<template>
  <div id="login" class="login-bgColor">
    <div class="login-wrapper">
      <a href="Javascript:;" class="login-logo">vue2_admin</a>
      <div class="login-wrap">
        <div class="login-content">
          <span class="translation-btn" @click="dialogLangVisible = true">{{$t('translations')}}</span>
          <span class="login-btn app-primary-color app-primary-borderColor" @click="dialogFormVisible = true">{{$t('login.login')}}</span>
        </div>
      </div>
      <div class="stars"></div>
      <div class="twinkling"></div>
    </div>
    <!-- translation dialog -->
    <el-dialog class="login-box" :title="$t('translations')" :visible.sync="dialogLangVisible">
      <el-radio-group v-model="lang" size="small">
        <el-radio label="zh" border>中文</el-radio>
        <el-radio label="en" border>English</el-radio>
      </el-radio-group>
    </el-dialog>
    <!-- login dialog -->
    <el-dialog class="login-box" :title="$t('login.login')" :visible.sync="dialogFormVisible">
      <el-form :model="form" @submit.native.prevent="verify">
        <el-form-item>
          <el-input v-model="form.username" :placeholder="$t('login.username')" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" :placeholder="$t('login.password')" autocomplete="off" :type="pwdType">
          </el-input>
          <span class="pwdEye" @click="passwordToggle">
            <i :class="eyeType"></i>
          </span>
        </el-form-item>
        <div class="agree-item">
          <el-checkbox v-model="form.agree">{{$t('login.tip')}}<a href="javascript:;" class="agree">{{$t('login.agreement')}}</a></el-checkbox>
          <a href="javascript:;" class="forget">{{$t('login.forget')}}</a>
        </div>
        <el-input class="login-btn login-inputColor" type="submit" :value="$t('login.login')"></el-input>
      </el-form>
      <ul slot="footer" class="other-login">
        <li class="wx"><span>{{$t('login.weChat')}}</span></li>
        <li class="qq"><span>{{$t('login.qq')}}</span></li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import '@/utils/particleground.min'
export default {
  data () {
    return {
      dialogLangVisible: false,
      dialogFormVisible: false,
      pwdType: 'password',
      eyeType: 'el-icon-my-closeEye',
      form: {
        username: 'yixiao',
        password: '123456',
        agree: false
      }
    }
  },
  computed: {
    lang: {
      get () {
        return this.$store.state.language
      },
      set (val) {
        this.$store.commit('set_language', val)
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('get_login_data', this.form)
        .then(res => {
          console.log(res)
          console.log(this.$route)
          if (res && res.code === 200) {
            this.$route.query.redirect ? this.$router.push(this.$route.query.redirect) : this.$router.push('/')
          }
        })
        .catch(() => {
          this.$message.error('账号或密码错误')
        })
    },
    verify () {
      if (!this.form.username) {
        this.$message.error('请输入账号')
      } else if (!this.form.password) {
        this.$message.error('请输入密码')
      } else if (!this.form.agree) {
        this.$message.error('请阅读协议')
      } else {
        this.login()
      }
    },
    passwordToggle () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
        this.eyeType = 'el-icon-my-openEye'
      } else {
        this.pwdType = 'password'
        this.eyeType = 'el-icon-my-closeEye'
      }
    },
    initAniCanvas () {
      particleground(this.$el.querySelector('.login-wrapper'), {
        dotColor: '#0e7085',
        lineColor: '#0e7085',
        parallaxMultiplier: 100,
        lineWidth: 0.1,
        particleRadius: 2
      })
    }
  },
  mounted () {
    this.initAniCanvas()
  }
}
</script>

<style lang="stylus">
#login{
  width: 100%;
  height: 100%;
  color: #333;
  .login-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .login-logo{
    position: absolute;
    top: 20px;
    left: 30px;
    z-index: 19;
    padding: 10px;
    display: block;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.1rem;
    transition: all 0.3s;
    &:hover{
      color: appColor;
    }
  }
  .login-wrap{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;
  }
  .login-content{
    font-size: 0;
    user-select: none;
    text-align: center;
    span{
      display: inline-block;
      width: 164px;
      height: 62px;
      border: 1px solid #fff;
      border-radius: 4px;
      text-align: center;
      line-height: 60px;
      font-size: 22px;
      cursor: pointer;
    }
    span:hover{
      opacity: .7;
    }
    .translation-btn{
      margin-right: 40px;
      color: #fff;
    }
    .login-btn{
      background-color: #fff;
    }
  }
  .login-box{
    a{
      display: inline-block;
      font-size: 12px;
    }
    .el-dialog{
      width: 340px;
      .el-dialog__header{
        padding: 15px 15px 10px;
      }
      .el-dialog__title{
        font-size: 16px;
      }
      .el-input input{
        height: 42px;
      }
      .el-checkbox__label{
        font-size: 12px !important;
        color: #333;
      }
      .el-checkbox__inner:hover{
        border-color: #dcdfe6;
      }
      .el-form-item{
        margin-bottom: 18px;
      }
      .pwdEye{
        position: absolute;
        right: 10px;
        top: 0;
        font-size: 16px;
        user-select: none;
        cursor: pointer;
      }
      .agree-item{
        margin-bottom: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .agree{
          padding-left: 6px;
        }
      }
      .login-btn{
        width: 100%;
        font-size: 18px;
        &:hover{
          opacity: 0.8;
        }
        input{
          color: #fff;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
  .other-login{
    padding: 0;
    margin: 0;
    text-align: center;
    li{
      margin: 0 12px;
      padding-top: 40px;
      display: inline-block;
      width: 40px;
      height: 66px;
      cursor: pointer;
      &.wx{
        background: url('~@/assets/img/icon_wx_pc.svg') no-repeat top center/auto;
      }
      &.qq{
        background: url('~@/assets/img/icon_qq_pc.svg') no-repeat top center/auto;
      }
      &:hover{
        opacity: 0.8;
      }
      span{
        font-size: 12px;
        line-height: 26px;
        color: #666;
      }
    }
  }
}
#login{
  canvas{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  .stars, .twinkling{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }
  .stars{
    background: #01092e url('~@/assets/img/stars.png') repeat top center;
    z-index: 0;
  }
  .twinkling{
    background: transparent url('~@/assets/img/twinkling_1.png') repeat top center;
    animation: move-twink-back 20s linear infinite;
    z-index: 1;
  }
}
@keyframes move-twink-back{
  from {
    background-position: 0 0;
  }
  to{
    background-position: 100px 500px;
  }
}
</style>
