
import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput, TouchableOpacity
} from 'react-native';
import pxToDp from './pxToDp';

export default class LoginInput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            textColor: '#8C8C8C'
        }
    }

    onFocus() {
        this.setState({
            textColor: '#F28321'
        })
    }
    onEndEditing() {
        this.setState({
            textColor: '#8c8c8c'
        })
    }
    render() {

        return (
            <View style={styles.inputContent}  >
                <Text style={{ color: `${this.state.textColor}`, fontSize: pxToDp(13) }}>
                    {this.props.text}
                </Text>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    vlue={this.props.value}
                    style={styles.input}
                    numberOfLines={1}
                    autoFocus={false}
                    underlineColorAndroid={this.state.textColor}
                    keyboardType={this.props.keyboardType || 'default'}           //默认弹出键盘类型
                    secureTextEntry={this.props.secureTextEntry}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor||'#E5E5E5'}    
                    onFocus={() => this.onFocus()}
                    onEndEditing={() => this.onEndEditing()}
                    underlineColorAndroid ='#e5e5e5'                             //输入下划线颜色

                />
            </View>
        )
    }
}


const styles = StyleSheet.create({

    inputContent: {


        // padding: pxToDp(15),
        paddingBottom: pxToDp(0),
        height: pxToDp(70),
    },


    input: {
        fontSize: pxToDp(16),
    },
})