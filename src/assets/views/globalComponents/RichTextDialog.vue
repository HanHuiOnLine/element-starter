<!--
 * @Author: 韩辉
 * @Date: 2020-03-24 17:30:16
 * @LastEditTime: 2020-03-24 17:58:54
 * @LastEditors: Please set LastEditors
 * @Description: 全局组件-富文本编辑器弹框
 * @FilePath: \element-starter\src\assets\views\globalComponents\RichTextDialog.vue
 -->
 <template>
  <div>
    <el-dialog
      :title="diaTitle"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      fullscreen
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    //弹出框是否显示
    dialogVisible: {
        type: Boolean,
        default: false
    },
    //标题
    diaTitle: {
        type: String,
        default: '提示'
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style>
</style>
