import { Cache } from 'aws-amplify';
import signup from './../services/signup';
import history from './../../history';


export default function signupAction(values) {
    return (dispatch) => {
        const { username, email } = values;
        signup(values)
            .then(() => {
                const in10min = Date.now() + 5 * 60 * 1000;
                Cache.setItem('pendingVerificationUser', {
                    username,
                    email,
                }, { expire: in10min });
                history.push('/home/verification');
            })
            .catch((error) => {
                alert(error.message);
            });
    }
}
