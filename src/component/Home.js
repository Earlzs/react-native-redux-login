

import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image, ScrollView, ToastAndroid,
    TouchableOpacity, AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../actions/user';

class Home extends React.Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount() {
    }

    render() {
        // let { navigate } = this.props.navigation;
        let { user } = this.props;
        return (
            <View style={{ flex: 1,justifyContent:"center",alignItems:'center'}}>
                <Text style={{fontSize:33}}> 登录进主页了</Text>
                <Image style={{ width: 90, height: 90 ,margin:20}} source={{ uri: `${user.avatar}` }}></Image>
                <Text style={{fontSize:16,color:'#333'}}> name:{user.username}</Text>
                <Text style={{fontSize:16,color:'#333'}}> age:{user.password}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({


});

function select(state) {
    const userReducer = state.userReducer;
    return {
        logIn: userReducer.logIn,
        user: userReducer.user,
        status: userReducer.status
    }
}


export default connect(select)(Home);


