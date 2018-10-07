import React,{Component} from 'react';
import { Picker,Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeCreate, employeeUpdate } from '../actions';


class EmployeeCreate extends Component{
    onButtonPressed(){
        const { name,phone,shift } = this.props

        this.props.employeeUpdate({name,phone,shift:shift||'Monday'})
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                     label="Name"
                     placeholder="Nitesh"
                     onChangeText={text => this.props.employeeCreate({props:'name',value:text})}
                     value={this.props.employee.name||this.props.name}
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
                     label="Phone"
                     placeholder="9999999999"
                     onChangeText={text => this.props.employeeCreate({props:'phone',value:text})}
                     value={this.props.phone}
                    />
                </CardSection>
                
                <CardSection >
                    <Text style={styles.shiftTextStyle}> Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeCreate({props:'shift', value:day})}
                        style={{flex:1}}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />

                    </Picker>
                </CardSection>

                <CardSection>
                    <Button 
                    
                    onPress={this.onButtonPressed.bind(this)}
                    text="Create" />
                </CardSection>
            </Card>
        );
    }
}

const styles={
        shiftTextStyle:{
            fontSize:18,
            paddingLeft:20,
            paddingTop:10,
            flex:1,
            color:'black'
        }   
}

const mapStateToProps = state =>{
    const { name, phone, shift} = state.employeeForm;

    return { name,phone,shift};
}


export default connect(mapStateToProps,{ employeeCreate,employeeUpdate })(EmployeeCreate);