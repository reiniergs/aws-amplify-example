import { Cache } from 'aws-amplify';
import signup from './../services/signup';
import history from './../../history';
import showErrorMessage from './show-error-message';

export default function signupAction(values) {
    return (dispatch) => {
        const { username, email } = values;
        signup(values)
            .then(() => {
                const in10Min = Date.now() + 5 * 60 * 1000;
                Cache.setItem('pendingVerificationUser', {
                    username,
                    email,
                }, { expires: in10Min });
                history.push('/home/verification');
            })
            .catch((error) => {
                dispatch(showErrorMessage(error));
            });
    }
}
