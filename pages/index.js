import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/pages/index.module.css';

import DashboardSvg from '../public/images/Dashboard.svg';

export default function Home() {
    return (
        <div className={styles['row']}>
            <div className={styles['Dashboard-conatiner']}>
                <h1>Coder-Verse</h1>
                <br />
                <p>
                    The Note Maker is a web application made by team “THE
                    PROgrammer” for students so that they can make notes faster
                    and can share with their friends for helping each other and
                    developing learning enviroment among their friends .
                </p>
                <br />

                <h2>
                    <strong>Features</strong>
                </h2>
                <br />
                <ul>
                    <li> 1. You can share your notes with friends also</li>
                    <li>
                        2. Can Make notes and store in a well arrnaged manner.
                    </li>
                    <li>
                        3. Facility of updating notes for future and text
                        formating
                    </li>
                    <li>
                        4. Can read notes of yours friends also which are shared
                        to you .
                    </li>
                </ul>
                <br />
                <p>
                    So what are you waiting for <strong>Get Stated !</strong>
                </p>

                <div className={styles['submit-options']}>
                    <button className={styles[('singIn', 'btn')]}>
                        <Link href="user/SignUp">Sign Up</Link>
                    </button>
                    <button className={styles['btn']}>
                        <Link href="/user/LogIn"> Log In</Link>
                    </button>
                </div>
            </div>

            <Image
                src={DashboardSvg}
                alt="dashboard"
                className={styles['cartoon-dash']}
            ></Image>
        </div>
    );
}
