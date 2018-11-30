<template>
  <div id="numtop">
    <el-alert title="默认调用" type="success" :closable="false"></el-alert>
    <vue-num-to></vue-num-to>
    <el-alert title="其他设置" type="warning" :closable="false"></el-alert>
    <div>
      <vue-num-to ref="numTo" :startVal="startVal" :endVal="endVal" :duration="duration" :autoplay="autoplay" :prefix="prefix" :suffix="suffix" :ease="ease" :decimals="decimals" :decimal="decimal" @complete="handleComplete"></vue-num-to>
    </div>
    <div class="demo">
      <el-input v-model.number.trim="startVal" clearable>
        <template slot="prepend">开始值</template>
      </el-input>
      <el-input v-model.number.trim="endVal" clearable>
        <template slot="prepend">结束值</template>
      </el-input>
      <el-input v-model.number.trim="duration" clearable>
        <template slot="prepend">时长</template>
      </el-input>
      <el-input v-model.trim="prefix" clearable>
        <template slot="prepend">前缀</template>
      </el-input>
      <el-input v-model.trim="suffix" clearable>
        <template slot="prepend">后缀</template>
      </el-input>
      <el-input v-model.trim="decimal" clearable>
        <template slot="prepend">小数点符号</template>
      </el-input>
      <label>小数点后几位</label><el-input-number v-model="decimals" :min="0" :max="10"></el-input-number>
      <el-checkbox v-model="autoplay">自动开始</el-checkbox>
      <el-checkbox v-model="ease">平滑动画</el-checkbox>
    </div>
    <div class="demo">
      <el-button type="primary" @click="start">开始</el-button>
      <el-button type="primary" @click="pause">暂停</el-button>
      <el-button type="primary" @click="resume">恢复</el-button>
      <el-button type="primary" @click="reset">重置</el-button>
      <el-button type="primary" @click="pauseResume">暂停 / 恢复</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      startVal: 0,
      endVal: 2018,
      duration: 5000,
      prefix: '￥',
      suffix: '',
      decimal: '.', // 小数符号
      decimals: 0, // 小数位数
      autoplay: false, // when mounted autoplay
      ease: true // the easing function
    }
  },
  methods: {
    start () {
      this.$refs.numTo.start()
    },
    pause () {
      this.$refs.numTo.pause()
    },
    resume () {
      this.$refs.numTo.resume()
    },
    reset () {
      this.$refs.numTo.reset()
    },
    pauseResume () {
      this.$refs.numTo.pauseResume()
    },
    handleComplete (val) {
      this.$message.success(`动画完成回调，参数为：${val}`)
    }
  }
}
</script>

<style lang="stylus">
#numtop{
  .demo{
    margin: 10px 0;
  }
  .el-input{
    margin-bottom: 10px;
    width: fit-content;
  }
  .el-alert{
    margin: 20px 0;
    width: 50%;
  }
  label{
    margin: 0 10px;
  }
}
</style>
