import { AUTHENTICATE_USER } from './../actions/authenticate';
import { UNAUTHENTICATE_USER } from './../actions/unauthenticate';
import { INIT_APP } from './../actions/start-app';

const initialState  = {
    currentUser: null,
    isInitializing: false,
    get isAuth() {
        return !!this.currentUser;
    }
};

export default function (state = initialState, action) {
    switch(action.type) {
        case INIT_APP:
            return {
                ...state,
                isInitializing: true,
            };
        case AUTHENTICATE_USER:
            return {
                ...state,
                currentUser: action.user,
                isInitializing: false,
            };
        case UNAUTHENTICATE_USER:
            return {
                ...state,
                currentUser: null,
                isInitializing: false,
            };
        default:
            return state;
    }
}
