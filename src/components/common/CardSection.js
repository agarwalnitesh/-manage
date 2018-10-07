import React from 'react';
import {View} from 'react-native';


const CardSection = (props) => {
    return(
        <View style={[styles.containerStyle,props.style]}>
            {props.children}
        </View>
    );
};

const styles ={
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#F2F3F4',
        justifyContent:'flex-start',
        flexDirection:'row',
    }
}

export { CardSection };