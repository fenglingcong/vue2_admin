<template>
  <div id="editor">
    <div class="wrapper">
      <div class="editor-writer">
        <div class="content">
          <quill-editor v-model.trim="content" ref="myQuillEditor" :options="editorOption"></quill-editor>
        </div>
      </div>
      <div class="editor-code">
        <h3>Code:</h3>
        <div class="container">
          <h4>正文：</h4>
          <div class="text">{{content}}</div>
        </div>
      </div>
      <div class="moreLink">
        <p>自定义图片上传、草稿功能：<router-link :to="{name: 'upload'}">请参考综合实例里的upload组件</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'
Vue.use(vueQuillEditor)
export default {
  data () {
    return {
      content: '',
      editorOption: {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        },
        placeholder: ' '
      }
    }
  }
}
</script>

<style lang="stylus">
#editor{
  .wrapper{
    width: 80%;
  }
  .editor-writer{
    .ql-container{
      height: 200px;
    }
  }
  .editor-code{
    margin: 50px 0;
    width: 100%;
    .container{
      padding: 12px 15px;
      border: 1px solid #e9e9e9;
      font-size: 14px;
      color: #5d5d5d;
    }
    .text{
      word-wrap: bread-word;
      word-break: break-all;
    }
    h4{
      color: #f85959;
    }
  }
}
</style>
