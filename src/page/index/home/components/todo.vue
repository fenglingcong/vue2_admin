<template>
  <div id="todo">
    <el-card>
      <div class="todo-card-header" slot="header">
        <i class="el-icon-arrow-down allCheckedIcon" :class="{'active': allChecked}" @click="allChecked = !allChecked"></i>
        <el-input class="titleInput" v-model.trim="titleInput" size="small" :maxlength="20" placeholder="Todo List" clearable></el-input>
        <div class="newTag">
          <el-input class="input-new-tag" v-if="inputVisible" v-model.trim="inputValue" :maxlength="15" ref="saveTagInput" @keyup.enter.native="addItem" size="small" @blur="addItem"></el-input>
          <i v-else class="el-icon-plus button-new-tag" @click="showInput"></i>
        </div>
      </div>
      <div class="todo-card-body">
        <el-checkbox-group v-model="checked">
          <transition-group name="el-zoom-in-top" tag="div">
            <div class="list-item"  v-for="(item, index) in list" :key="index">
              <el-checkbox class="list-item-checkbox" :label="item" :title="item">{{item}}</el-checkbox>
              <i class="el-icon-close" @click.stop="deleteItem(index)"></i>
            </div>
          </transition-group>
        </el-checkbox-group>
        <p class="completed" v-if="list.length <= 0">没有要做的事情</p>
      </div>
      <div class="todo-card-footer">
        <span :class="{'selected': !allChecked}">{{list.length - checked.length}} items left</span>
        <span :class="{'selected': allChecked}">Completed</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['star this repository', 'fork this repository', 'follow author', 'vue', 'element-ui', 'axios', 'webpack'],
      checked: ['vue', 'element-ui', 'axios', 'webpack'],
      titleInput: 'Todo List',
      inputVisible: false,
      inputValue: ''
    }
  },
  computed: {
    allChecked: {
      get: function () {
        return this.checked.length === this.list.length
      },
      set: function (val) {
        if (val) {
          this.checked = this.list.slice()
        } else {
          this.checked = []
        }
      }
    }
  },
  watch: {
    list () {
      let Arr = []
      this.checked.forEach(check => {
        this.list.forEach(item => {
          if (check === item) {
            Arr.push(item)
          }
        })
      })
      this.checked = Arr
    },
    checked (newVal, oldVal) {
      if (newVal.length - oldVal.length === 1) {
        let lastVal = newVal[newVal.length - 1]
        let isIncludes = ['star this repository', 'fork this repository', 'follow author'].includes(lastVal)
        if (isIncludes) {
          this.$notify.success('Finish ' + lastVal)
        }
      } else if (newVal.length - oldVal.length > 1) {
        let count = 0
        newVal.forEach(item => {
          let isIncludes = ['star this repository', 'fork this repository', 'follow author'].includes(item)
          if (isIncludes) {
            this.$notify.success({
              message: 'Finish ' + item,
              offset: 60 * count
            })
            count++
          }
        })
      }
    }
  },
  methods: {
    deleteItem (index) {
      this.list.splice(index, 1)
    },
    addItem () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.list.unshift(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    }
  }
}
</script>

<style lang="stylus">
#todo{
  color: #4d4d4d;
  font-weight: 400;
  .el-card{
    overflow: inherit;
  }
  .el-card__header{
    padding: 15px 12px;
    box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.03);
    .todo-card-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 32px;
      .allCheckedIcon{
        margin-right: 10px;
        padding: 3px;
        font-size: 20px;
        color: #d9d9d9;
        cursor: pointer;
        &.active{
          color: inherit;
        }
      }
      .titleInput{
        margin-right: 20px;
        font-size: 16px;
        color: inherit;
        input{
          border: none;
          outline: none;
          padding: 0;
        }
      }
      .newTag{
        .buttion-new-tag{
          font-size: 20px;
          color: #42b983;
          cursor: pointer;
        }
      }
    }
  }
  .el-card__body{
    padding: 0;
    .todo-card-body{
      position: relative;
      min-height: 225px;
      .completed{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        color: #999;
      }
    }
    .list-item{
      position: relative;
      padding: 0 12px;
      display: flex;
      align-items: center;
      height: 45px;
      border-bottom: 1px solid #ededed;
      font-size: 24px;
      transition: all 0.1s ease-out;
      &:last-child{
        border-bottom: none;
      }
      .el-icon-close{
        display: none;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        color: #cc9a9a;
        cursor: pointer;
      }
      &:hover{
        .el-icon-close{
          display: block;
        }
      }
    }
    .list-item-checkbox{
      padding-right: 40px;
      width: 100%;
      &.is-checked{
        .el-checkbox__label{
          color: #d9d9d9;
          text-decoration: line-through;
        }
      }
      .el-checkbox__inner{
        width: 26px;
        height: 26px;
        border-radius: 100%;
        &:after{
          height: 12px;
          left: 11px;
          top: 5px;
        }
      }
      .el-checkbox__label{
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: inherit;
        transition: color 0.4s;
      }
    }
    .todo-card-footer{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 18px;
      border-top: 1px solid #ededed;
      font-size: 12px;
      color: #777;
      user-select: none;
      &::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 1px -6px rgba(0, 0, 0, 0.2);
      }
      span{
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid #fff;
        border-radius: 3px;
        &.selected{
          border-color: rgba(175, 47, 47, 0.2);
        }
      }
    }
  }
}
</style>
