<template>
  <el-dialog title="错误日志" :visible.sync="visible" width="970px">
    <el-table :data="$store.state.logs" border :header-cell-style="{'text-align': 'center'}">
      <el-table-column label="序号" width="60" align="center">
        <template slot-scope="scope">
          {{scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="时间" width="160" align="center">
        <template slot-scope="scope">
          {{scope.row.time | formatTime('{y}-{m}-{d} {h}:{i}:{s}')}}
        </template>
      </el-table-column>
      <el-table-column label="bug信息" min-width="300" align="center">
        <template slot-scope="scope">
          <P>Msg：<el-tag type="danger"></el-tag>{{scope.row.error.message}}</P>
          <P>Info：<el-tag type="warning">{{scope.row.info}}</el-tag></P>
          <P>URL： <el-tag>{{scope.row.url}}</el-tag></P>
        </template>
      </el-table-column>
      <el-table-column label="Stack" min-width="400" align="center">
        <template slot-scope="scope">
          <p>{{scope.row.error.stack}}</p>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="stylus"></style>
