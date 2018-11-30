<template>
  <div :class="classes" :style="styles" @click="back">
    <slot>
      <div :class="innerClasses">
        <i class="el-icon-arrow-up"></i>
      </div>
    </slot>
  </div>
</template>

<script>
import { requestAnimationFrame } from '@/utils/RAFrame.js'
const prefixCls = 'my-backTop'
export default {
  props: {
    height: { // 页面达到该高度时显示backTop组件
      type: Number,
      default: 400
    },
    bottom: {
      type: Number,
      default: 30
    },
    right: {
      type: Number,
      default: 30
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    classes () {
      return [`${prefixCls}`, {[`${prefixCls}-show`]: this.visible}]
    },
    styles () {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`
      }
    },
    innerClasses () {
      return `${prefixCls}-inner`
    }
  },
  methods: {
    // 滚动方法
    scrollTop (from = 0, to = 0, duration = 500) {
      // 距离
      const difference = Math.abs(from - to)
      // 速度
      const step = Math.ceil(difference / duration * 50)
      const scroll = (start, end, step) => {
        if (start === end) {
          this.$emit('complete')
          return
        }
        // 每经过 requestAnimationFrame 执行一次（16.666ms）剩下的距离
        let d = (start - step < end) ? end : start - step
        window.scroll(d, d)
        requestAnimationFrame(() => scroll(d, end, step))
      }
      scroll(from, to, step)
    },
    // 滚动回调方法
    handleScroll () {
      // 滚动距离大于设置的高度时，显示backTop
      this.visible = window.pageYOffset >= this.height
    },
    // 点击返回顶部
    back () {
      const sTop = window.pageYOffset
      this.scrollTop(sTop, 0, this.duration)
      this.$emit('onClick')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
    window.addEventListener('resize', this.handleScroll, false)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll, false)
    window.removeEventListener('resize', this.handleScroll, false)
  }
}
</script>

<style lang="stylus">
.my-backTop{
  display: none;
  position: fixed;
  z-index: 999;
  cursor: pointer;
  &-show{
    display: block;
  }
  &-inner{
    border-radius: 2px;
    background-color: rgba(appColorRGB, .9);
    box-shadow: 0 1px 3px rgba(appColorRGB, .2);
    transition: all .2s ease-in-out;
    i{
      padding: 8px 12px;
      font-size: 24px;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
