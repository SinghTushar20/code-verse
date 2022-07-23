import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from '../../firebase.config';

const logOut = () => {
    const auth = getAuth(firebaseApp);
    signOut(auth)
        .then(() => {
            console.log('signout success');
        })
        .catch((error) => {
            console.log('signout error ' + error);
        });
};

export default logOut;
