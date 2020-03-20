<!--
 * @Author: 韩辉
 * @Date: 2020-03-18 18:13:15
 * @LastEditTime: 2020-03-20 22:19:45
 * @LastEditors: Please set LastEditors
 * @Description: 版本发布时间轴
 * @FilePath: \src\assets\views\timeLine.vue
 -->
<template>
  <div class="time-line-block">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-timeline>
          <el-timeline-item
            icon="el-icon-trophy"
            type="success"
            size="large"
            timestamp="2020-01-16"
            placement="top"
          >
            <el-card>
              <h4>更新 v818 版本</h4>
              <div>
                <P>此次更新的 v818 版本旨在修复缺陷和提升产品稳定性，建议升级。</P>
                <h5 class="padding">本次主要更新:</h5>
                <ul class="ul">
                  <li>1.装备回收</li>
                  <li>2.装备回收</li>
                  <li>3.装备回收</li>
                </ul>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.time-line-block {
  text-align: left;
}
</style>

