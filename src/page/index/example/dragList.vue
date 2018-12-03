<template>
  <div id="dragList">
    <div class="wrapper">
      <div class="list">
        <h3>拖拽列表一</h3>
        <my-draggable class="dragWrap" v-model="listOne" :options="options">
          <div class="item" v-for="(item, index) in listOne" :key="index">
            <p>{{item.name}}</p>
            <i class="el-icon-delete" @click="remove(item, index)"></i>
          </div>
        </my-draggable>
      </div>
      <div class="list">
        <h3>拖拽列表二</h3>
        <my-draggable class="dragWrap" v-model="listTwo" :options="options" @change="changeTwo">
          <div class="item" v-for="(item, index) in listTwo" :key="index">
            <p>{{item.name}}</p>
          </div>
        </my-draggable>
      </div>
    </div>
    <div class="code">
      <pre>
        <h3>拖拽列表一</h3>
        <code>{{listOne}}</code>
      </pre>
      <pre>
        <h3>拖拽列表二</h3>
        <code>{{listTwo}}</code>
      </pre>
    </div>
    <div class="moreLink">
      <p>更多内容：<a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">vue-draggable</a></p>
      <p>完整API：<a href="https://github.com/RubaXa/Sortable#options" target="_blank">Sortable.js</a></p>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    'my-draggable': draggable
  },
  data () {
    return {
      options: {
        group: 'article',
        draggable: '.item'
      },
      listOne: [
        {name: '￥￥￥：111'},
        {name: '￥￥￥：222'},
        {name: '￥￥￥：333'},
        {name: '￥￥￥：444'},
        {name: '￥￥￥：555'}
      ],
      listTwo: [
        {name: '$$$: 111'},
        {name: '$$$: 222'},
        {name: '$$$: 333'},
        {name: '$$$: 444'},
        {name: '$$$: 555'}
      ]
    }
  },
  watch: {
    listOne (val) {
      this.$message.warning('拖拽列表一：数据发生变化')
    }
  },
  methods: {
    remove (item, index) {
      this.listOne.splice(index, 1)
      this.listTwo.push(item)
    },
    changeTwo () {
      this.$notify.success({
        title: '拖拽列表二',
        message: '拖拽动作是数据发生变化'
      })
    }
  }
}
</script>

<style lang="stylus">
#dragList{
  .list{
    margin-right: 50px;
    display: inline-block;
    vertical-align: top;
    width: 400px;
    min-height: 200px;
  }
  h3{
    text-align: center;
  }
  .dragWrap{
    position: relative;
    border: 1px solid #e9e9e9;
    border-bottom: none;
    .item{
      padding: 16px 15px;
      position: relative;
      border-bottom: 1px solid #e9e9e9;
      p{
        margin: 0;
        padding-right: 25px;
        width: 100%;
        word-wrap: break-word;
      }
      i{
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
      }
    }
  }
  .code{
    margin-top: 20px;
    pre{
      margin-right: 50px;
      padding-left: 20px;
      display: inline-block;
      width: 400px;
      background: #eee;
    }
  }
}
</style>
