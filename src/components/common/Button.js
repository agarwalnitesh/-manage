import React from 'react';
import {Text,TouchableOpacity} from 'react-native';


const Button = ({onPress,text}) => {
    const {buttonStyle,textStyle}= styles;
    return(
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#D5F5E3',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5
    },
    textStyle:{
        alignSelf:'center',
        fontSize:18,
        fontWeight:'600',
        color:'#007aff',
        paddingTop:10,
        paddingBottom:10
    }
}

export { Button };