import signin from './../services/signin';
import { authenticate } from './authenticate';

export default function login(user) {
    return (dispatch) => {
        signin(user)
            .then((user) => {
                dispatch(authenticate(user))
            })
            .catch((error) => {
                alert(error.message);
            })
    }
}
