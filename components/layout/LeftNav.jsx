import Link from 'next/link';
import Image from 'next/image';

import dashboard from '../../public/icons/sample.svg';
import analytics from '../../public/icons/analatics.svg';
// import contests from '../../public/icons/contests.svg';
import resume from '../../public/icons/resume.svg';
import coding from '../../public/icons/code.svg';
import tips from '../../public/icons/tips.svg';
import trophy from '../../public/icons/trophy.svg';
import logout from '../../public/icons/logout.svg';

import styles from '../../styles/components/layout/LeftNav.module.css';

function LeftNav({ Component, pageProps }) {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <Image src={trophy} alt="Site Logo" width={30} height={30} />
                <Link href="/">
                    <Image
                        src={dashboard}
                        alt="Site Logo"
                        width={30}
                        height={30}
                    />
                </Link>
                <Link href="/info/analysis">
                    <Image
                        src={analytics}
                        alt="Site Logo"
                        width={30}
                        height={30}
                    />
                </Link>
                <Link href="/resume/score-card">
                    <Image
                        src={resume}
                        alt="Site Logo"
                        width={30}
                        height={30}
                    />
                </Link>
                <Link href="/contest-list/contest">
                    <Image
                        src={coding}
                        alt="Site Logo"
                        width={30}
                        height={30}
                    />
                </Link>
                <Link href="/info/tips">
                    <Image src={tips} alt="Site Logo" width={30} height={30} />
                </Link>
            </div>
            <div className={styles.logout}>
                <Link href="">
                    <Image
                        src={logout}
                        alt="Site Logo"
                        width={25}
                        height={25}
                    />
                </Link>
            </div>
        </div>
    );
}

export default LeftNav;
