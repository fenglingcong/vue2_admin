<template>
  <div id="i18nView">
    <el-card class="i18n-card">
      <div class="i18n-card-header" slot="header">
        <i class="el-icon-my-i18n"></i><span>{{$t('translations')}}</span>
      </div>
      <div class="languageOption">
        <el-radio-group v-model="lang">
          <el-radio label="zh" border size="small">中文</el-radio>
          <el-radio label="en" border size="small">English</el-radio>
        </el-radio-group>
      </div>
      <el-tag type="info">{{$t('i18nView.note')}}</el-tag>
    </el-card>
    <div class="i18n-content">
      <div class="button">
        <el-button size="small" round>{{$t('i18nView.button.round')}}</el-button>
        <el-button size="small" round type="primary">{{$t('i18nView.button.primary')}}</el-button>
        <el-button size="small" round type="success">{{$t('i18nView.button.success')}}</el-button>
        <el-button size="small" round type="info">{{$t('i18nView.button.info')}}</el-button>
        <el-button size="small" round type="warning">{{$t('i18nView.button.warning')}}</el-button>
        <el-button size="small" round type="danger">{{$t('i18nView.button.danger')}}</el-button>
      </div>
      <div class="alert">
        <el-alert :closable="false" :title="$t('i18nView.alert.success')" type="success"></el-alert>
        <el-alert :closable="false" :title="$t('i18nView.alert.info')" type="info"></el-alert>
        <el-alert :closable="false" :title="$t('i18nView.alert.warning')" type="warning"></el-alert>
        <el-alert :closable="false" :title="$t('i18nView.alert.error')" type="error"></el-alert>
      </div>
      <div class="datePicker">
        <el-date-picker v-model="datePicker" type="date" :placeholder="$t('i18nView.datePickr')"></el-date-picker>
      </div>
      <div class="pagination">
         <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pagination" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import i18nLocal from './i18nLocal'
const keyName = 'i18nView'
export default {
  data () {
    return {
      datePicker: '',
      pagination: 1
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
    handleSizeChange (val) {
      console.log(val)
    },
    handleCurrentChange (val) {
      console.log(val)
    },
    initLocal () {
      if (!this.$te(keyName)) {
        this.$i18n.mergeLocaleMessage('zh', i18nLocal.zh)
        this.$i18n.mergeLocaleMessage('en', i18nLocal.en)
      }
    }
  },
  created () {
    this.initLocal()
  }
}
</script>

<style lang="stylus">
#i18nView{
  .i18n-card{
    width: 480px;
    .i18n-card-header{
      i{
        margin-right: 10px;
        vertical-align: middle;
        font-size: 20px;
        color: #666;
      }
      span{
        vertical-align: middle;
        font-size: 16px;
      }
    }
    .languageOption{
      margin-bottom: 20px;
    }
  }
  .i18n-content{
    margin-top: 40px;
    & > div{
      margin-bottom: 30px;
    }
    .alert{
      width: 60%;
      .el-alert{
        margin-bottom: 10px;
      }
    }
  }
}
</style>
