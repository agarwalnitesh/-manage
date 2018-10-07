import React from 'react';
import { TextInput, Text ,View } from'react-native';



const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { labelStyle, inputStyle, containerStyle } = styles ;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>

            <TextInput 
             secureTextEntry={ secureTextEntry }
             value={value}
             onChangeText={ onChangeText }
             style={inputStyle}
             autoCorrect={ false }
             placeholder={ placeholder }
             />
        </View>

    );
};



const styles = {
  labelStyle:{
      fontSize:18,
      paddingLeft:20,
      flex:1,
      color:'black'
      
  },
  inputStyle:{
      fontSize:18,
      lineHeight:23,
      paddingRight:5,
      paddingLeft:5,
      flex:2,
      height:40,
      width:100,
      color:'black',
      backgroundColor:'#ededed'
      
  },
  containerStyle:{
      flex:1,
      height:40,
      flexDirection:'row',
      alignItems:'center',
  }
}
export { Input };