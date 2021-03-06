const LOGOUT = "LOGOUT"
export const ERROR = 'Error'
export const LOGOUT1 = 'LOGOUT1'
export const GetDate = 'GetDate'
export const GetReviews = 'GetReviews'
const defaultState = {

    error: '',
    isAuth: false,
    isLoading: false,
    dateVidio: [],
    dateReviews: []
}


function userReducer(state = defaultState, action) {

    switch (action.type) {
        case LOGOUT:
            localStorage.removeItem('token')

            return {
                ...state,
                isAuth: false
            }
        case LOGOUT1:
            return {
                ...state,
                isAuth: true
            }


        case GetDate:
            return {
                ...state,
                dateVidio: action.date,

            }
        case GetReviews:
            return {
                ...state,
                dateReviews: action.date
            }


        case ERROR:
            return {
                ...state,
                error: action.error,


            }

        default:
            return state

    }
}



export default userReducer;


export const logout = () => ({ type: LOGOUT })
