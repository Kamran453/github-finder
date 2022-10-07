const githubReducer = (state, action) => {
    switch(action.type){
        case "GET_USERS": {
            return {
                ...state,
                users: action.sendData,
                isLoading: false
            }
        }
        case "GET_USER_REPOS": {
            return{
                ...state,
                user: action.sendData.user,
                repos: action.sendData.repos,
                isLoading: false
            }
        }


        case "SET_LOADING": {
            return {
                ...state,
                isLoading: true
            }
        }
        case "CLEAR": {
            return {
                ...state,
                users: [],
                isLoading: false
            }
        }
        default:
            return state
    }
}

export default githubReducer