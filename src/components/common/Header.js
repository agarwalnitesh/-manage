
import React from 'react';
import {Text,View} from 'react-native';


const Header = (props) => {
const {textStyle,viewStyles} = styles;

    return (
        <View style ={viewStyles}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>

    );


};

const styles ={
    textStyle:{
        fontSize:20,
    },
    viewStyles: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ABEBC6',
        height:60,
        shadowColor:'rgba(255,255,0)',
        shadowRadius:4,
        shadowOffset:{ width:0, height:2},
        shadowOpacity:1,
        elevation:2,
        position:'relative',
        borderBottomWidth:3,
        borderBottomColor:'rgb(255, 255, 0,0.5)',
        
    },
};

export { Header };