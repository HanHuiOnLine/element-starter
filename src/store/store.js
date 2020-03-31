/*
 * @Author: 韩辉
 * @Date: 2020-03-25 16:51:50
 * @LastEditTime: 2020-03-26 14:05:11
 * @LastEditors: Please set LastEditors
 * @Description: vuex
 * @FilePath: \element-starter\src\store\store.js
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    //1. state
    state:{
        dialogVisible: false,//是否显示富文本弹框
    },

    //2. getters
    getters:{
        // 参数列表state指的是state数据
        getVisibleFn(state){
            return state.dialogVisible;
        }
    },
    // 3. actions
    // 通常跟api接口打交道
    actions:{
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // visible就是调用此方法时要传的参数
        setDialogVisible(context, visible){
            // 跟后台打交道
            // 调用mutaions里面的方法
            context.commit("setVisible", visible);
        }
    },
    // 4. mutations
    mutations:{
        // state指的是state的数据
        // visible传递过来的数据
        setVisible(state, visible){
            state.dialogVisible = visible;//将传参设置给state的dialogVisible
        }
    }
});

export default store;