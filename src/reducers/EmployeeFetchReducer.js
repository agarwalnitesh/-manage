const INITIAL_STATE={

}

export default (state=INITIAL_STATE,action) =>{
    switch(action.type)
    {
        case 'employee_fetch':
        console.log(action.payload)
        // return {...state, [id]:action.payload }
        return action.payload;

        default:
        return state;
    }

}