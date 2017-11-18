import * as TYPE from '../actions/types'

//初始化user状态
const initialState = {
    status: 'null',
    user: {},
    logIn: false
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case TYPE.LOGGED_DOING:
            return Object.assign({}, state, {
                status: 'doing',

            })
        case TYPE.LOGGED_IN:
            return Object.assign({}, state, {
                status: 'done',
                logIn: true,
                user: action.user,
            })

        case TYPE.LOGGED_OUT:
            return Object.assign({}, state, {
                status: 'null',
                logIn: false,
                user: {}
            })
        case TYPE.LOGGED_ERROR:
            return Object.assign({}, state, {
                status: 'null',
                logIn: false,
                user: {}
            })
        default:
            return state
    }

}