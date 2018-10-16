import signin from './../services/signin';
import { authenticate } from './authenticate';
import showErrorMessage from './show-error-message';

export default function login(user) {
    return (dispatch) => {
        signin(user)
            .then((user) => {
                dispatch(authenticate(user))
            })
            .catch((error) => {
                dispatch(showErrorMessage(error));
            })
    }
}
