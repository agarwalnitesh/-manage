import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged,passwordChanged,loginUser } from '../actions';
import { Input,Button,Card,CardSection, Spinner} from './common';


class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPressed(){
        const { email,password } = this.props;
        this.props.loginUser({email,password});
    }
    
    renderError(){
        if(this.props.error){
            return(
                <View>
                    <Text style={ styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderLoading(){
        if(this.props.loading){
            return(
                <Spinner size='large' />
            );
        }
        else{
            return(
                    <Button text='SignIn!!' 
                        onPress={this.onButtonPressed.bind(this)}
                    />

            );
        }
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                     label='Email'
                     placeholder='example@gmail.com'
                     onChangeText={ this.onEmailChange.bind(this) }
                     value={ this.props.email }
                    />
                </CardSection>

                <CardSection>
                    <Input 
                     label='Password'
                     placeholder='password'
                     secureTextEntry
                     onChangeText = { this.onPasswordChange.bind(this)}
                     value = { this.props.password }
                    />
                </CardSection>
                    { this.renderError()}
                <CardSection>
                    {this.renderLoading()}
                </CardSection>
            </Card>
        );
    };
}

const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

const mapStateToProps = state =>{
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    };
}

export default connect(mapStateToProps, { emailChanged ,passwordChanged,loginUser})( LoginForm );