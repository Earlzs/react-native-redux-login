
import React from 'react';
import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';

import { connect } from 'react-redux';
import Login from './component/Login.js'
import Home from './component/Home.js'

// import Test from './component/test'
// 初始化StackNavigator
let initialRoute;

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        let { logIn } = this.props;
        //判断是否登录过 登录过的话首页设置成Home
        initialRoute = logIn == true ? 'Home' : 'Login'
        // initialRoute = 'Login'
        const Navigator = StackNavigator({
            Login: {
                screen: Login,
            },
            Home: {
                screen: Home,
            },

        }, {
                initialRouteName: `${initialRoute}`,
                headerTintColor: '#fff',
                navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
                    header: null,
                    cardStack: {
                        gesturesEnabled: true  // 是否可以右滑返回
                    }
                },
                mode: 'modal',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
                headerMode: 'screen',

                // onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调


            })

        return (
            <Navigator />
        );
    }
}


const mapStateToProps = state => {
    const userReducer = state.userReducer;
    return {
        logIn: userReducer.logIn,

    }
}

export default connect(mapStateToProps)(App);