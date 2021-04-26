const setUserName = (userName) => {
    return {
        type: 'USER_NAME',
        payload: userName
    }
}

const setPassword = (password) => {
    return {
        type: 'PASSWORD',
        payload: password
    }
}

const isLogin = (status) => {
    return {
        type: 'LOGIN',
        payload: status
    }
}

const setCount = (value) => {
    return {
        type: 'COUNT',
        payload: value
    }
}


export {
    setUserName,
    setPassword,
    isLogin,
    setCount
};