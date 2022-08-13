import Image from 'next/image';
import Link from 'next/link';

import svg from '../../public/icons/sample.svg';
import bell from '../../public/icons/bellLogo.svg';
import style from '../../styles/components/layout/Header.module.css';
import search from '../../public/icons/searchLogo.svg';

function MyApp({ Component, pageProps }) {
    return (
        <div className={style.container}>
            <div className={style['subcontainer-left']}>
                <Image src={svg} alt="site main logo"></Image>
                <p> Growth Up ( coding Platform ) </p>{' '}
            </div>
            <div className={style['subcontainer-right']}>
                <Image
                    src={search}
                    alt="site main logo"
                    height={20}
                    width={20}
                ></Image>
                <Link href="/features/notification">
                    <Image src={bell} alt="Site Logo" />
                </Link>
                <p> Robin (userName) </p>{' '}
            </div>
        </div>
    );
}

export default MyApp;
