/*
 * @Author: 韩辉
 * @Date: 2020-03-25 16:37:57
 * @LastEditTime: 2020-03-25 17:31:02
 * @LastEditors: Please set LastEditors
 * @Description: 全局组件注册
 * @FilePath: \element-starter\src\globalComponents.js
 */

import RichTextDialog from "./assets/views/globalComponents/RichTextDialog";

function plugin (Vue) {
    if (plugin.installed) {
        return;
    }
  Vue.component("RichTextDialog", RichTextDialog);
}

export default plugin;