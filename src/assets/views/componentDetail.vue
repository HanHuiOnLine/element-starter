<!--
 * @Author: 韩辉
 * @Date: 2020-03-24 13:49:47
 * @LastEditTime: 2020-03-25 18:46:14
 * @LastEditors: Please set LastEditors
 * @Description: 预制件详情
 * @FilePath: \element-starter\src\assets\views\componentDetail.vue
 -->
<template>
  <!-- 路由详情 -->
  <div class="detail-div">
    <div class="div-btn">
      <el-button type="primary" icon="el-icon-edit" @click="editFun">修改</el-button>
      <el-button type="success" icon="el-icon-plus" @click="addFun">添加</el-button>
      <el-button type="danger" icon="el-icon-delete" @click="deleteFun">删除</el-button>
    </div>
    <!-- 描述 -->
    <div v-if="treeId" class="detail-des">
      <el-card class="box-card">
        <h4 style="text-align: center">成就系统</h4>
        <div style="color: #5e6d82; font-size=14px">
          <p>功能描述：</p>
          <ul>
            <li>一：独立的切换输出，模块化结构设计，支持热拔插扩展设备规模；</li>
            <li>二：支持6种控制方式，手机平板，遥控，面板，电脑，WEB，串口等控制方式；</li>
            <li>三：前面板蓝光液晶显示屏，时实检测输入输出状态等信息，直观方便；</li>
            <li>四：多种切换方式，预案管理，自动轮巡切换；</li>
            <li>五：EDID数据管理功能，支持兼容显示多种设备；</li>
            <li>六；具有断电记忆保护功能；</li>
            <li>七：独特的防静电设计，防电防雷多重保护；</li>
            <li>八：支持4K输入输出，向下兼容多种分辨率；</li>
            <li>九：兼容市场上各种类型的拼接屏，兼容国内外中控控制；</li>
          </ul>
          <!-- 功能截图 -->
          <div>
            <p>功能截图：</p>
            <div class="img-div">
              <el-image :src="imgUrl">
                <div slot="error" class="image-slot">
                  <p>图片加载失败</p>
                  <i class="el-icon-loading"></i>
                </div>
              </el-image>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div v-else class="none-div">
      <!-- 没有数据时的显示 -->
      <p>
        <i class="el-icon-info"></i>
        左侧树状目录结构依据项目
        <span>prefab文件夹</span>,当选中的是一个文件夹时,会展示其子文件,当选中的是一个
        <span>具体的预制件</span>时,
        <br />右侧会显示此预制件的详细信息,包括功能介绍和功能截图
      </p>
    </div>

    <!-- 弹框 -->
    <RichTextDialog :catchData="catchData" :content="detail" diaTitle="标题"></RichTextDialog>
  </div>
</template>

<script>
export default {
  props: {
    treeId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dialogVisible: false,
      detail: ''//文章详情，一般是请求来的
    };
  },
  //计算属性
  computed: {
    imgUrl: function() {
      return "src/assets/images/" + this.treeId + ".png";
    }
  },
  methods: {
    //修改按钮的点击事件
    editFun() {
        this.$store.dispatch("setDialogVisible", true);
    },
    //删除
    deleteFun() {},
    //添加
    addFun() {
        this.$store.dispatch("setDialogVisible", true);
    },
    catchData(data) {
      
    }
  }
};
</script>

<style>
.detail-div {
  text-align: left;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #606266;
}
.img-div {
  text-align: center;
}
.none-div {
  padding: 10px;
}
.none-div p span {
  color: #f56c6c;
}
.div-btn {
  padding: 10px;
}
</style>