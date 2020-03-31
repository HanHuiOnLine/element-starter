<!--
 * @Author: 韩辉
 * @Date: 2020-03-24 17:30:16
 * @LastEditTime: 2020-03-26 14:46:21
 * @LastEditors: Please set LastEditors
 * @Description: 全局组件-富文本编辑器弹框
 * @FilePath: \element-starter\src\assets\views\globalComponents\RichTextDialog.vue
 -->
 <template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      center
      fullscreen
      ref="dialog"
      @opened="openFun"
    >
      <div slot="title" class="title-div">
        <h4>你要干什么</h4>
      </div>
      <div>
        <el-form
          label-position="top"
          label-width="80px"
          :model="formLabelAlign"
          :rules="rules"
          ref="ruleForm"
        >
          <el-form-item label="预制件或者文件夹名称：" prop="name">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <p>预制件详情：</p>
      <div class="editor-div">
        <div ref="wangeditor1" class="mune"></div>
        <div ref="wangeditor2" class="content">
          <p>请输入内容</p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="backFn">取 消</el-button>
        <el-button type="primary" @click="backFn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import wangeditor from "wangeditor";
export default {
  name: "RichTextDialog",
  data() {
    return {
      editor: null,
      editorContent: "",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入预制件或者文件夹名称", trigger: "blur" },
          { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  props: ["catchData", "content"], // 接收父组件的方法
  watch: {
    content() {
      this.editor.txt.html(this.content);
    }
  },
  methods: {
    handleClose(done) {
      console.log(this.content);
      console.log(this.editor.txt.html());
      this.$confirm("确认关闭？")
        .then(_ => {
          // done();
          this.$store.dispatch("setDialogVisible", false);
        })
        .catch(_ => {});
    },
    backFn: function() {
      //调用vuex的ations重新赋值
      this.$store.dispatch("setDialogVisible", false);
    },
    //dialog打开时触发的事件
    openFun() {
      let _wangeditor1 = this.$refs.wangeditor1;
      let _wangeditor2 = this.$refs.wangeditor2;
      this.editor = new wangeditor(_wangeditor1, _wangeditor2);
      this.editor.customConfig.onchange = html => {
        this.editorContent = html;
        this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
      };
      this.editor.customConfig.uploadImgServer = "你的上传图片的接口";
      this.editor.customConfig.uploadFileName = "你自定义的文件名";
      this.editor.customConfig.menus = [
        // 菜单配置
        "head", // 标题
        "bold", // 粗体
        "fontSize", // 字号
        "fontName", // 字体
        "italic", // 斜体
        "underline", // 下划线
        "strikeThrough", // 删除线
        "foreColor", // 文字颜色
        "backColor", // 背景颜色
        "link", // 插入链接
        "list", // 列表
        "justify", // 对齐方式
        "quote", // 引用
        "emoticon", // 表情
        "image", // 插入图片
        "table", // 表格
        "code", // 插入代码
        "undo", // 撤销
        "redo" // 重复
      ];
      // 下面是最重要的的方法
      this.editor.customConfig.uploadImgHooks = {
        before: function(xhr, editor, files) {
          // 图片上传之前触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
          // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
          // return {
          //     prevent: true,
          //     msg: '放弃上传'
          // }
        },
        success: function(xhr, editor, result) {
          // 图片上传并返回结果，图片插入成功之后触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
          this.imgUrl = Object.values(result.data).toString();
        },
        fail: function(xhr, editor, result) {
          // 图片上传并返回结果，但图片插入错误时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        error: function(xhr, editor) {
          // 图片上传出错时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },
        timeout: function(xhr, editor) {
          // 图片上传超时时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },

        // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        customInsert: function(insertImg, result, editor) {
          // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
          // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

          // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
          let url = Object.values(result.data); // result.data就是服务器返回的图片名字和链接
          JSON.stringify(url); // 在这里转成JSON格式
          insertImg(url);
          // result 必须是一个 JSON 格式字符串！！！否则报错
        }
      };

      this.editor.create(); // 创建富文本实例
    }
  },
  computed: {
    dialogVisible: function() {
      return this.$store.getters.getVisibleFn;
    }
  }
};
</script>

<style>
.title-div {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #606266;
}
.title-div h4 {
  margin: 0;
}
.mune {
  border-bottom: 1px solid #ccc;
}
.editor-div {
  border: 1px solid #ccc;
}
.content {
  min-height: 700px;
}
.w-e-text {
  overflow-y: auto;
}
</style>
