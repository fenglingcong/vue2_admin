<template>
  <el-header id="header" height="80px">
    <div class="container">
      <router-link class="header-logo" to="/">
        <span>vue_admin</span>
      </router-link>
      <div class="header-right">
        <!-- bug -->
        <div class="right-item" v-if="logs.length > 0">
          <el-badge is-dot @click.native="bugDialog = true">
            <i class="el-icon-my-bug bug" type="danger" size="small" @click="$refs.errorDialog.toggle()"></i>
          </el-badge>
        </div>
        <!-- i18n -->
        <div class="right-item">
          <el-dropdown placement="top-end" @command="languageSelected">
            <div class="i18n">
              <span>{{$t('translations')}}</span>
              <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh" :disabled="language === 'zh'">中文</el-dropdown-item>
              <el-dropdown-item command="en" :disabled="language === 'en'">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="right-item">
           <theme-picker></theme-picker>
        </div>
        <!-- user -->
        <div class="right-item">
          <div class="user" v-if="user">
            <el-dropdown placement="top-end" @command="userSelected">
              <div class="user-info">
                <img :src="user.headimgurl" alt="">
                <span class="el-dropdown-link">{{user.nickname}}</span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="exit">{{$t('logOut')}}</el-dropdown-item>
                <el-dropdown-item divided :disabled="true">v2.0.0</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <!-- 面包屑 -->
    <breadcrumb class="header-breadcrumb"></breadcrumb>
    <!-- 错误日志 -->
    <error-dialog ref="errorDialog"></error-dialog>
  </el-header>
</template>

<script>
import errorDialog from '@/page/index/more/errorDialog'
import themePicker from '@/components/themePicker'
import breadcrumb from '@/components/breadcrumb'
import { mapState } from 'vuex'
export default {
  components: {
    errorDialog,
    themePicker,
    breadcrumb
  },
  computed: {
    ...mapState([
      'user',
      'logs',
      'language'
    ])
  },
  data () {
    return {
      msg: 'header'
    }
  },
  methods: {
    languageSelected (val) {
      this.$store.commit('set_language', val)
      if (val === 'zh') {
        this.$message.success('语言切换成功')
      }
      if (val === 'en') {
        this.$message.success('switch language success')
      }
    },
    userSelected (val) {
      if (val === 'exit') {
        this.$store.commit('loginOut')
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    this.$el.querySelector('.header-breadcrumb').style.left = document.getElementById('menu').offsetWidth + 'px'
  }
}
</script>

<style lang="stylus">
#header{
  position: relative;
  padding: 0 50px 0 40px;
  width: 100%;
  background-color: appColor;
  .container{
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .header-logo{
    position: absolute;
    top: 0;
    left: 0;
    line-height: 80px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  .header-right{
    float: right;
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 20px;
    color: #fff;
    .right-item{
      margin: 0 10px;
      font-size: 0;
      cursor: pointer;
    }
    .bug{
      padding: 2px 4px;
      border: none;
      outline: none;
      font-size: 20px;
      color: inherit;
    }
    .i18n{
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #fff;
      i{
        margin-left: 4px;
      }
    }
    .user{
      .user-info{
        img{
          margin-right: 5px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
        }
        span{
          color: #fff;
        }
      }
    }
  }
  .header-breadcrumb{
    position: absolute;
    top: 50%;
    padding: 0 20px;
    transform: translateY(-50%);
    .el-breadcrumb__inner{
      color: #fff;
    }
    .el-breadcrumb__separator{
      color: #fff;
    }
  }
}
</style>
