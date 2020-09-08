import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED
} from './constants'

const initialstateSearch = {
    searchfield: ''
}

export const searchRobots = (state= initialstateSearch, action={} ) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchfield: action.payload}
        default:
            return state
    }
}

const initialstateRobot = {
    isPending: false,
    robo: [],
    error: ''
}


export const requestRobot = (state= initialstateRobot,action={}) => {
    switch(action.type) {
        case REQUEST_ROBOT_PENDING:
            return Object.assign({},state,{isPending: true})
        case REQUEST_ROBOT_SUCCESS:
            return Object.assign({},state,{robo: action.payload,isPending: false})
        case REQUEST_ROBOT_FAILED:
            return Object.assign({},state,{error: action.payload,isPending: false})
        default:
            return state;
    }
}