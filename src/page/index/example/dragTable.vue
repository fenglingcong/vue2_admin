<template>
  <div id="dragTable">
    <el-table :data="json" v-loading.body="loading" element-loading-text="拼命加载中..." border style="width: 100%" :header-cell-style="{'text-align': 'center'}">
      <el-table-column type="index" align="center" label="序号" width="65">
        <template slot-scope="scope">
          <span>{{scope.$index + 1}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="ID" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.sound.id}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="时间" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.sound.update_time | formatTime}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="标题" min-width="300">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <template v-if="scope.row.sound.song_info">
              <p v-if="scope.row.sound.song_info.name">{{scope.row.sound.song_info.name.type}}: {{ scope.row.sound.song_info.name.name}}</p>
              <p v-if="scope.row.sound.song_info.author">{{scope.row.sound.song_info.author.type}}: {{ scope.row.sound.song_info.author.name}}</p>
              <p v-if="scope.row.sound.song_info.album_name">{{scope.row.sound.song_info.album_name.type}}: {{ scope.row.sound.song_info.album_name.name}}</p>
            </template>
            <div slot="reference">
              <el-tag size="medium" type="info">{{scope.row.sound.name}}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column align="center" label="频道" min-width="180">
        <template slot-scope="scope">
          <el-tag size="medium">{{scope.row.sound.channel.name}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="热度" width="100">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="right">
            <template v-if="scope.row.sound.song_info">
              <p v-if="scope.row.sound.view_count">播放：{{scope.row.sound.view_count | devide_10k}}</p>
              <p v-if="scope.row.sound.like_count">喜欢：{{scope.row.sound.like_count | devide_10k}}</p>
              <p v-if="scope.row.sound.share_count">分享：{{scope.row.sound.share_count | devide_10k}}</p>
            </template>
            <div slot="reference">
              <el-rate disabled :max="3" :value="scope.row.sound.is_hot" :icon-classes="['el-icon-my-hot', 'el-icon-my-hot', 'el-icon-my-hot']" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column align="center" label="作者" min-width="120">
        <template slot-scope="scope">
          <span>{{scope.row.sound.user.name}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="拖拽" width="65">
        <template slot-scope="scope">
          <i class="el-icon-rank dragIcon"></i>
        </template>
      </el-table-column>
    </el-table>
    <div class="code" v-if="json.length > 0">
      <p>默认顺序： {{oldList}}</p>
      <p>拖拽后的顺序： {{newList}}</p>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api'
import Sortable from 'sortablejs'
export default {
  data () {
    return {
      json: [],
      oldList: [],
      newList: [],
      loading: false
    }
  },
  methods: {
    get_list () {
      this.loading = true
      getList().then(res => {
        if (res) {
          this.json = res.data
          this.json.forEach((item, index) => {
            this.oldList.push(index + 1)
          })
          this.newList = this.oldList.slice()
          this.$nextTick(() => {
            this.setSort()
          })
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    setSort () {
      const el = this.$el.querySelector('.el-table__body-wrapper > table > tbody')
      this.sortable = Sortable.create(el, {
        onEnd: evt => {
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    }
  },
  mounted () {
    this.get_list()
  }
}
</script>

<style lang="stylus">
#dragTable{
  width: 100%;
  .dragIcon{
    font-size: 18px;
    cursor: pointer;
  }
  .code{
    margin-top: 30px;
  }
}
</style>
