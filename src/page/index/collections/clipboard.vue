<template>
  <div id="clipboard">
    <div class="demo">
      <h3>直接调用</h3>
      <el-input v-model="copy1">
        <el-button slot="append" @click="copy(copy1)">复制</el-button>
      </el-input>
      <el-input v-model="cut1" class="cut1">
        <el-button slot="append" @click="cut">剪切</el-button>
      </el-input>
    </div>
    <div class="demo">
      <h3>指令调用</h3>
      <el-input v-model="copy2">
        <el-button slot="append" v-clipboard:copy="copy2" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">复制</el-button>
      </el-input>
      <el-input v-model="cut2">
        <el-button slot="append" v-clipboard:cut="cut2" v-clipboard:success="onCutSuccess" v-clipboard:error="onCutError">剪切</el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      copy1: '复制复制复制复制复制',
      cut1: '剪切剪切剪切剪切剪切',
      copy2: '复制2复制2复制2复制2复制2',
      cut2: '剪切2剪切2剪切2剪切2剪切2'
    }
  },
  methods: {
    copy (val) {
      this.$copyText(val)
        .then(res => {
          this.$message.success('直接调用：复制成功')
        })
        .catch(err => {
          console.log(err)
          this.$message.error('直接调用：复制失败')
        })
    },
    cut () {
      // 剪切功能需要剪切元素，只适用于input、textarea
      this.$cutText(this.$el.querySelector('.cut1 input'))
        .then(res => {
          this.$message.success('直接调用，剪切成功')
        })
        .catch(err => {
          console.log(err)
          this.$message.error('直接调用，剪切失败')
        })
    },
    onCopySuccess () {
      this.$message.success('指令调用，复制成功')
    },
    onCopyError () {
      this.$message.error('指令调用，复制失败')
    },
    onCutSuccess () {
      this.$message.success('指令调用，剪切成功')
    },
    onCutError () {
      this.$message.error('指令调用，剪切失败')
    }
  }
}
</script>

<style lang="stylus">
#clipboard{
  .demo{
    margin-bottom: 50px;
    width: 50%;
  }
  .el-input{
    margin-bottom: 10px;
  }
}
</style>
