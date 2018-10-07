const INITIAL_STATE={
    name:'' ,
    phone:'',
    shift:''

}

export default (state=INITIAL_STATE,action) =>{
   switch(action.type)
   {
       case 'employee_create':
        return { ...state,[action.payload.props]:action.payload.value };

        case 'employee_updated':
        return INITIAL_STATE;

       default:
       return state;
   }
}