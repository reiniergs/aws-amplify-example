import { AUTHENTICATE_USER } from './../actions/authenticate';
import { UNAUTHENTICATE_USER } from './../actions/unauthenticate';
import { INIT_APP } from './../actions/start-app';
import { SIGN_OUT } from './../actions/logout';

const initialState  = Object.assign({
    currentUser: null,
    isInitializing: false,
});

export default function (state = initialState, action) {
    switch(action.type) {
        case INIT_APP:
            return {
                ...state,
                isInitializing: true,
            };
        case AUTHENTICATE_USER:
            return Object.assign({}, state, {
                currentUser: action.user,
                isInitializing: false,
                isAuth: true,
            });
        case UNAUTHENTICATE_USER:
            return {
                ...state,
                currentUser: null,
                isAuth: false,
                isInitializing: false,
            };
        default:
            return state;
    }
}
