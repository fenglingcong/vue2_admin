<template>
  <div id="self">
    <el-card>
      <a slot="header" class="box-card-header" href="https://github.com/fenglingcong/vue2_admin" target="_blank">
        <img src="~@/assets/img/banner.jpg">
      </a>
      <div style="position: relative">
        <div class="name">一笑</div>
        <div class="text">创造力 自发力 灵活性</div>
        <div class="info">
          <div>
            <i class="el-icon-location-outline"></i>
            <span>杭州</span>
          </div>
          <div>
            <i class="el-icon-my-qq"></i>
            <el-tooltip effect="dark" content="复制" placement="top">
              <a href="javascript:;" v-clipboard:copy="1539027251" v-clipboard:success="onCopySuccess">1539027251</a>
            </el-tooltip>
          </div>
          <div>
            <i class="el-icon-message"></i>
            <el-tooltip effect="dark" content="复制" placement="top">
              <a href="mailto:1539027251@qq.com">1539027251@qq.com</a>
            </el-tooltip>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    onCopySuccess () {
      this.$message.success('复制成功')
    }
  }
}
</script>

<style lang="stylus">
#self{
  .el-card__header{
    padding: 0;
    border: none;
    .box-card-header{
      position: relative;
      display: block;
      height: 160px;
      overflow: hidden;
      img{
        width: 100%;
        height: auto;
        transition: all 0.2s linear;
        &:hover{
          transform: scale(1.1, 1.1);
          filter: contrast(130%);
        }
      }
    }
  }
  .el-card__body{
    line-height: 1.6;
    font-size: 14px;
    color: #24292e;
    .name{
      margin-bottom: 16px;
      font-size: 20px;
      font-weight: 300;
      line-height: 24px;
      color: #666;
    }
    .text{
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(27, 31, 35, 0.2);
    }
    .info{
      margin-top: 16px;
      div{
        margin-top: 5px;
        i{
          margin-right: 8px;
          vertical-align: middle;
          font-size: 16px;
          color: #6a737d;
        }
        span, a{
          vertical-align: middle;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
