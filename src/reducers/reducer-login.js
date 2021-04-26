const initialState = {
    userName: '',
    password: '',
    login: false,
    count: 0
}

const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_NAME':
            return {
                ...state,
                userName: action.payload
            };
        case 'PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                login: action.payload
            }
        case 'COUNT':
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}

export default reducerLogin;