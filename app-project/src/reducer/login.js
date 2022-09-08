

export default  function getUser(state={status:false},action){
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                status: true,
                username:'admin',
                password:'123456'
            };
        case 'LOGOUT':
            return ""
    };
    return state;
}