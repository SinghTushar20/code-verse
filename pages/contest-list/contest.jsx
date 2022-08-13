import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../../styles/pages/constest-list/contest.module.css';

const MyApp = () => {
    const [upcoming, setUpcoming] = useState({
        title: 'hackathon',
        desc: '',
        location: 'hackerEarth',
        time: { start: '', end: '', zone: '' },
    });
    const [show, setShow] = useState([
        {
            title: 'hackathon',
            desc: '',
            location: 'hackerEarth',
            time: { start: 'fdsfdsf', end: 'fdfds', zone: '' },
        },
    ]);
    const [status, setStatus] = useState(false);
    const [sites, setSites] = useState(false);
    const [time, setTime] = useState(false);

    const [active, setActive] = useState('');
    const url = 'https://contests-api.herokuapp.com/upcoming';
    useEffect(() => {
        axios
            .get(url)
            .then((Response) => {
                console.log(Response.data.data);
                setUpcoming(Response.data.data);
                setShow(Response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .then(() => {
                console.log('request send');
            });
    }, []);
    const handleStatusClick = () => {
        if (status == true) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    };
    const handleSitesClick = () => {
        if (sites == true) {
            setSites(false);
        } else {
            setSites(true);
        }
    };
    const handleTimeClick = () => {
        if (time == true) {
            setTime(false);
        } else {
            setTime(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles['heading']}>All contestes </div>
            <div className={styles.filters}>
                <button onClick={handleStatusClick}>Status</button>
                <button onClick={handleSitesClick}>Sites</button>
                <button onClick={handleTimeClick}>Time </button>
                <div className={status ? styles.showFilter : styles.hideFilter}>
                    <input
                        type="checkbox"
                        id="active"
                        name="status-active"
                        value="active"
                    />
                    <label htmlFor="active-status">Active Contest</label>
                    <input
                        type="checkbox"
                        id="upcoming"
                        name="status-upcoming"
                        value="upcoming"
                    />
                    <label htmlFor="upcoming">Upcomin Contest</label>
                </div>
                <div className={sites ? styles.showFilter : styles.hideFilter}>
                    <input
                        type="checkbox"
                        id="hackerEarth"
                        name="hackerEarth"
                        value="hackerEarth"
                    />
                    <label htmlFor="active-status">HackerEarth</label>
                    <input
                        type="checkbox"
                        id="hackerEarth"
                        name="hackerEarth"
                        value="hackerEarth"
                    />
                    <label htmlFor="active-status">HackerRank</label>
                    <input
                        type="checkbox"
                        id="hackerEarth"
                        name="hackerEarth"
                        value="hackerEarth"
                    />
                    <label htmlFor="active-status">CodeForces</label>
                    <input
                        type="checkbox"
                        id="hackerEarth"
                        name="hackerEarth"
                        value="hackerEarth"
                    />
                    <label htmlFor="active-status">Leetcode</label>
                    <input
                        type="checkbox"
                        id="hackerEarth"
                        name="hackerEarth"
                        value="hackerEarth"
                    />
                    <label htmlFor="active-status">GeekForGeeks</label>
                </div>
                <div className={time ? styles.showFilter : styles.hideFilter}>
                    <input
                        type="checkbox"
                        id="active"
                        name="status-active"
                        value="active"
                    />
                    <label htmlFor="active-status">3 Days</label>
                    <input
                        type="checkbox"
                        id="upcoming"
                        name="status-upcoming"
                        value="upcoming"
                    />
                    <label htmlFor="upcoming">7 days </label>
                    <input
                        type="checkbox"
                        id="upcoming"
                        name="status-upcoming"
                        value="upcoming"
                    />
                    <label htmlFor="upcoming">15 days </label>
                    <input
                        type="checkbox"
                        id="upcoming"
                        name="status-upcoming"
                        value="upcoming"
                    />
                    <label htmlFor="upcoming">1 month </label>
                </div>
            </div>
            <div className={styles.title}>
                <p>sr No.</p>
                <p>contest Name </p>
                <p>Location</p>
                <p>Start Time </p>
                <p>End Time </p>
            </div>
            <div className={styles.contests}>
                <div className={styles['contest-list']}>
                    {show.map((see) => {
                        return (
                            <div className={styles.contest} key={see.key}>
                                <p>{'1'}</p>
                                <a href={see.desc.slice(5)} target="_a">
                                    {see.title}
                                </a>
                                <p>{see.location}</p>
                                <p>{see.time.start}</p>
                                <p>{see.time.end}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default MyApp;
