<!--
 * @Author: 韩辉
 * @Date: 2020-03-21 14:42:08
 * @LastEditTime: 2020-03-26 10:44:48
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
            :data="treeData"
            class="filter-tree"
            :props="defaultProps"
            accordion
            :filter-node-method="filterNode"
            icon-class="el-icon-folder-opened"
            highlight-current
            ref="tree"
            @node-click="nodeClick"
          ></el-tree>
        </div>
      </el-aside>
      <el-main>
        <!-- 详情 -->
        <ComponentDetail :treeId="chosedId"></ComponentDetail>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import treeData from "../config/treeData";
import ComponentDetail from "./componentDetail";

export default {
  components:{
    ComponentDetail
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  created() {
    this.treeData = treeData.data;
  },
  data() {
    return {
      treeData: [],
      filterText: "", //过滤
      chosedId: "",   //选中的节点
      //树props
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
    nodeClick(data, node, component) {
      if (!data.children) {
        //没有子集,显示详细信息
        this.chosedId = data.id;
      } else {
        this.chosedId = '';
      }
    },
    // loadNode(node, resolve) {
    //   if (node.level === 0) {
    //     let _list = treeData.getFirstLevel();
    //     resolve(_list);
    //   } else {
    //     let _data = node.data;
    //     if (!_data) {
    //       return resolve([]);
    //     }
    //     let _list = treeData.b[_data.id].children;
    //     if (!_list) {
    //       return resolve([]);
    //     }
    //     return resolve(_list);
    //   }
    // }
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
.el-tree-node__expand-icon{
  color: #409EFF;
}
</style>