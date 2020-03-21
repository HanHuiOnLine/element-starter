<!--
 * @Author: 韩辉
 * @Date: 2020-03-21 14:42:08
 * @LastEditTime: 2020-03-21 20:53:23
 * @LastEditors: Please set LastEditors
 * @Description: 项目预制件目录
 * @FilePath: \element-starter\src\assets\views\componentTree.vue
 -->
 <template>
  <div>
    <el-container>
      <el-aside width="400px">
        <div class="input-div">
          <el-input placeholder="输入关键字进行过滤" v-model="filterText" suffix-icon="el-icon-search"></el-input>
        </div>
        <div class="font1">
          <p style="text-align: left">Prefab(所有预制件目录)</p>
        </div>
        <div class="font1">
          <el-tree
            class="filter-tree"
            :load="loadNode"
            lazy
            :props="defaultProps"
            accordion
            :filter-node-method="filterNode"
            icon-class="el-icon-folder-opened"
            highlight-current
            ref="tree"
          ></el-tree>
        </div>
      </el-aside>
      <el-main>
        <!-- 路由详情 -->
        <div class="detail-div">
          <!-- <h4>成就系统</h4> -->
          <!-- 描述 -->
          <div class="detail-des">
            <el-card class="box-card">
              <!-- <div slot="header" class="clearfix">
                <span>成就系统</span>
              </div>-->
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
                  <el-image
                    src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                  ></el-image>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import treeData from "../config/treeData";

export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      filterText: "",
      defaultProps: {
        children: "children",
        label: "label",
        isLeaf: "leaf"
      }
    };
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        let _list = treeData.getFirstLevel();
        resolve(_list);
        // return resolve([{ label: "Prefab(预制件)" }]);
      } else if (node.level === 1) {
        // let _list = treeData.getFirstLevel();
        // resolve(_list);
        return resolve([]);
      } else {
        return resolve([]);
      }
    }
  }
};
</script>

<style>
.el-aside {
  border-right: 1px solid #dcdfe6;
  padding: 20px 0 20px 10px;
}
.font1 {
  font-weight: bold;
}
.input-div {
  max-width: 300px;
}
.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
  background-color: #409eff;
  color: #ffffff;
}
.detail-des {
  text-align: left;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>