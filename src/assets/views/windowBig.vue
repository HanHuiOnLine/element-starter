<!--
 * @Author: 韩辉
 * @Date: 2020-03-18 19:18:27
 * @LastEditTime: 2020-03-26 15:55:28
 * @LastEditors: Please set LastEditors
 * @Description: 总框
 * @FilePath: \element-starter\src\assets\views\windowBig.vue
 -->
 <template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color	= "#409eff"
          router
        >
          <el-menu-item index="/homePage">首页</el-menu-item>
          <el-menu-item index="/componentTree">预制件目录</el-menu-item>
          <el-menu-item index="/timeLine">版本历史</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-header{
  padding: 0;
}
.el-main{
  min-height: 816px;
  padding: 0;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>

