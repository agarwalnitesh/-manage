import React,{ Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import RouterComponent from './Router';

class App extends Component {
    componentWillMount(){

        // Initialize Firebase
        const config = {
        apiKey: "AIzaSyDtKLy_O0_XvUKiI8-RERm3hLDHL3fHUvM",
        authDomain: "manage-3c87f.firebaseapp.com",
        databaseURL: "https://manage-3c87f.firebaseio.com",
        projectId: "manage-3c87f",
        storageBucket: "manage-3c87f.appspot.com",
        messagingSenderId: "273905139638"
        };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store= { createStore(reducers, {},  applyMiddleware(ReduxThunk)) }>
                 <RouterComponent />
            </Provider>
        );
    }
}

export default App;