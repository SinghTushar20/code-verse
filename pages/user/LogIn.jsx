import Image from 'next/image';
import Link from 'next/link';
import { authService } from '../../services';
import svg from '../../public/icons/sample.svg';
import style from '../../styles/pages/user/SignIn.module.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className={style.container}>
            <div className={style['container-image']}>
                <Image src={svg} alt="Login Logo" />
            </div>
            <div className={style['login-form']}>
                <h1>Hii! Welcome back </h1>
                <h3>Please login with email and respective passowrd</h3>
                <form>
                    <label htmlFor="email">Email Id:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={style['logIn-input']}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={style['logIn-input']}
                    />
                    <button
                        type="submit"
                        className={`${style.btn} ${style.logIn}`}
                    >
                        Log In
                    </button>
                </form>
                <button
                    className={`${style.btn} ${style['logIn-google']}`}
                    onClick={authService.logInWithGoogle}
                >
                    Log In with google account !!
                </button>
                <h3>
                    {"Don't have a account? "}
                    <Link href="/signIn">Sign In</Link>
                </h3>
            </div>
        </div>
    );
}

export default MyApp;
