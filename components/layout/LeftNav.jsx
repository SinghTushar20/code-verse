import Link from 'next/link';
import Image from 'next/image';

import svg from '../../public/icons/sample.svg';

import styles from '../../styles/components/layout/LeftNav.module.css';

function LeftNav({ Component, pageProps }) {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <Image src={svg} alt="Site Logo" />
                <Link href="/">
                    <Image src={svg} alt="Site Logo" />
                </Link>
                <Link href="/info/analysis">
                    <Image src={svg} alt="Site Logo" />
                </Link>
                <Link href="/resume/score-card">
                    <Image src={svg} alt="Site Logo" />
                </Link>
                <Link href="/contest-list/contest">
                    <Image src={svg} alt="Site Logo" />
                </Link>
                <Link href="/info/tips">
                    <Image src={svg} alt="Site Logo" />
                </Link>
            </div>
            <div>
                <Link href="">
                    <Image src={svg} alt="Site Logo" />
                </Link>
            </div>
        </div>
    );
}

export default LeftNav;
