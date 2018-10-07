import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'

export const employeeCreate = ({ props, value }) => {
    return {
        type: "employee_create",
        payload: { props, value }
    };
}

export const employeeUpdate = ({ name, phone, shift }) => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(()=>{
                dispatch({type:'employee_updated'})
                Actions.main({type:'reset'})
            });
    }
}


export const employeeFetch = () =>{

    const { currentUser } = firebase.auth();
    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapShot => {
            dispatch({
                type:'employee_fetch',
                payload:snapShot.val()
            })
        })

    }
}