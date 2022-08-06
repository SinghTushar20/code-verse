import Image from 'next/dist/client/image';
import Link from 'next/link';

import svg from '../../public/icons/sample.svg';

import styles from '../../styles/components/layout/Profile.module.css';
import avatar from '../../public/icons/avatar/avatar.jpg';

function MyApp({ Component, pageProps }) {
    return (
        <div className={styles.container}>
            <div className={styles['user-info']}>
                <Link href="/login">
                    {/* <Image
                        src={svg}
                        alt="profile_Icon"
                        className={styles['user-avatar']}
                    /> */}
                    <div className={styles['avatar-background']}>
                        <Image
                            src={avatar}
                            className={styles['avatar-background']}
                            alt="avatar"
                        ></Image>
                    </div>
                </Link>
                <p className={styles['_bold-large']}>Robin James</p>
                <p>
                    <i>robinhood@gmail.com</i>
                </p>

                <div className={styles['profile-followers-info']}>
                    <p
                        className={
                            styles[('profile-followers', '_medium-large')]
                        }
                    >
                        100k+ <br />
                        <p className={styles['_light-small']}>followers</p>
                    </p>
                    <p
                        className={
                            styles[('profile-following', '_medium-large')]
                        }
                    >
                        63k+ <br />
                        <p className={styles['_light-small']}>following</p>
                    </p>
                    <p className={styles[('profile-stars', '_medium-large')]}>
                        5 star <br />
                        <p className={styles['_light-small']}>rating</p>
                    </p>
                    <div className={styles['coding-platfomr-link']}>
                        <a href="">codeforces </a>
                        <a href="">leetcode</a>
                        <a href="">hackerrank</a>
                    </div>
                </div>
            </div>
            <div className={styles['coding-info']}>
                <div className={styles['rating-info']}>
                    <Image src={svg} alt="coding_site_logo"></Image>
                    <div>
                        <p>contest rationg : 1600+ </p>
                        <p>leatest contest rating : 30+</p>
                    </div>
                </div>
                <div className={styles['rating-info']}>
                    <Image src={svg} alt="coding_site_logo"></Image>
                    <div>
                        <p>contest rationg : 1600+ </p>
                        <p>leatest contest rating : 30+</p>
                    </div>
                </div>
                <div className={styles['rating-info']}>
                    <Image src={svg} alt="coding_site_logo"></Image>
                    <div>
                        <p>contest rationg : 1600+ </p>
                        <p>leatest contest rating : 30+</p>
                    </div>
                </div>
                <div className={styles['rating-info']}>
                    <Image src={svg} alt="coding_site_logo"></Image>
                    <div>
                        <p>contest rationg : 1600+ </p>
                        <p>leatest contest rating : 30+</p>
                    </div>
                </div>
                <div className={styles['contest-Alert-notif']}>
                    <Image src={svg} alt="notif icon"></Image>
                    <div className={styles['notif-detail']}>
                        <p>CodeForece 235 Div 1</p>
                        <p>contest will start in 2 hours later ...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
