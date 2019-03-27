import { GOT_VIDEOS, INITIALSTATE, GOT_GAMES } from '../actionTypes/Types';


export default function(state = INITIALSTATE, action){
    switch(action.type){
        case GOT_VIDEOS:
            return {
                ...state,
                videos: action.videos,
                featured: action.featured,
                pagination: state.videos.pagination,
                message: action.message,
                isLoading: false
            }
        case GOT_GAMES:
            return {
                ...state,
                videos: action.videos,
                games_pagination: state.videos.pagination,
                message: action.message,
                isLoading: false
            }
        default:
            return state;
    }
}