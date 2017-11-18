
import React from 'react';
import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';


import Login from './component/Login.js'
import Home from './component/Home.js'

// import Test from './component/test'
// 初始化StackNavigator


export default MyApp = StackNavigator({

    Login: {
        screen: Login,
    },
    Home: {
        screen: Home,
    },

}, {
    
        headerTintColor: '#fff',
        navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            header:null,
            cardStack: {
                gesturesEnabled: true  // 是否可以右滑返回
            }
        },
        mode: 'modal',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        headerMode: 'screen',
  
        // onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调


    });

