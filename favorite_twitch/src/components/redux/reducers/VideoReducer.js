import { GOT_VIDEOS, INITIALSTATE } from '../actionTypes/Types';


export default function(state = INITIALSTATE, action){
    switch(action.type){
        case GOT_VIDEOS:
            return {
                ...state,
                videos: action.videos,
                featured: action.featured,
                message: action.message,
                isLoading: false
            }
        default:
            return state;
    }
}