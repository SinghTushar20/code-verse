import Image from 'next/dist/client/image';
import Link from 'next/link';

import svg from '../../public/icons/sample.svg';

import styles from '../../styles/components/layout/Profile.module.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className={styles.container}>
            <div className={styles['user-info']}>
                <Link href="/login">
                    <Image
                        src={svg}
                        alt="profile_Icon"
                        className={styles['user-avatar']}
                    />
                </Link>
                <p>Name of the user </p>
                <p>
                    <i>@email.email.com</i>
                </p>
            </div>
            <div className={styles['coding-info']}></div>
        </div>
    );
}

export default MyApp;
