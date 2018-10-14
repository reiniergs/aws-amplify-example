import signup from './../services/signup';

export default function signupAction(data) {
    return (dispatch) => {
        signup(data)
            .then(() => {
                debugger;
            })
            .catch(() => {
                debugger;
            });
    }
}
