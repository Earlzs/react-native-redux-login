

import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image, ScrollView, ToastAndroid,
    TouchableOpacity, AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import pxToDp from './pxToDp'
import LoginInput from './LoginInput'


import { logIn, logOut } from '../actions/user';



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',        //用户名
            password: '',        //密码
        }
    }
    componentWillMount() {
    }
    shouldComponentUpdate(nextProps, nextState) {

        let { navigate } = this.props.navigation;

        if (nextProps.logIn != this.props.logIn && nextProps.logIn === true) {
            //will redirect
            alert('进入主页')
            navigate('Home')
            return false;
        }
        if (nextProps.status == 'doing') {
            //loggining
            return false;
        }
        if (nextProps.status == 'error' || nextProps.status == 'done') {
            alert('正在登录||登录完成')
            return false;
        }
        return true;
    }
    componentDidMount() {

    }
    //登录
    login = () => {
        const { dispatch } = this.props;
        dispatch(logIn())
    }

    render() {
        // let { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, padding: pxToDp(20), paddingTop: pxToDp(30), position: 'absolute', bottom: pxToDp(10) }}>
                <View style={styles.loginBox}>
                    <View style={styles.loginBoxTitle}>
                        <Text style={{ color: '#075591', fontSize: pxToDp(15), }}>登录redux练习</Text>
                    </View>

                    <LoginInput
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username}
                        text='用户名'
                        placeholder='Username'
                    />
                    <LoginInput
                        text='密码'
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder='Password'
                    />
                    <TouchableOpacity
                        onPress={() => { this.login() }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>登录系统</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.register}>  还没有账号？申请权限 &gt;</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoWarp: {
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null,
        backgroundColor: '#333',
        position: 'relative'
        // resizeMode:'contain'
    },
    loginBox: {
        borderRadius: pxToDp(8),
        width: pxToDp(320),
        backgroundColor: '#FAFAFA',
        height: pxToDp(310),
        elevation: pxToDp(10),
        padding: pxToDp(20),
        paddingBottom: 0,
        paddingTop: 0

    },
    loginBoxTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: pxToDp(60)
    },


    logo: {

        borderRadius: pxToDp(35),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: pxToDp(20),
        height: pxToDp(43),
        backgroundColor: '#F28321',
        borderRadius: pxToDp(23),
        justifyContent: "center",

    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: pxToDp(17),
    },
    register: {
        marginTop: pxToDp(8),
        color: '#7F8A98',
        fontSize: pxToDp(15),
        textAlign: 'center'
    }

});



const mapStateToProps = state => {
    const userReducer = state.userReducer;
    return {
        logIn: userReducer.logIn,
        user: userReducer.user,
        status: userReducer.status
    }
}

export default connect(mapStateToProps)(Login);