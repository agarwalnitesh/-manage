const INITIAL_STATE={
         email:'',
         password:'',
         user:null,
         error:'',
         loading:false
};
export default  (state=INITIAL_STATE, action) => {
    
    switch(action.type){
        case 'email_changed':
        return { ...state,email:action.payload };
        case 'password_changed':
        return { ...state,password:action.payload };
        case 'login_success':
        return { ...state,user:action.payload,error:'',loading:false,email:'',password:'' };
        case 'login_fail':
        return {...state,error:'Authentication Failed',loading:false};
        case 'login_user':
        return {...state,loading:true,error:''};

        default:
        return state;
    }

};