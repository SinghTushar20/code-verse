import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/pages/constest-list/contest.module.css';

const MyApp = () => {

    const allData = React.useRef(null);
    const [show, setShow] = useState(null);
    const [status, setStatus] = useState(false);
    const [sites, setSites] = useState(false);
    const [time, setTime] = useState(false);
    const siteTag = {
        hackerEarth: "hackerearth.com",
        hackerRank:"hackerrank.com",
        codeForces:"codeforces.com",
        leetcode:"leetcode.com",
        geeksForGeeks:"gfg.com",
    }

    const [filterData , setFilterData]=useState(
        {
                [siteTag.hackerEarth]:false,
                [siteTag.hackerRank]:false,
                [siteTag.codeForces]:false,
                [siteTag.leetcode]:false,
                [siteTag.geeksForGeeks]:false,
        }
    )

    const [active, setActive] = useState(''); 

    useEffect(() => {
        const url = 'https://contests-api.herokuapp.com/upcoming';
        axios
            .get(url)
            .then((res) => {
                allData.current = res.data.data;
                setShow(res.data.data);
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(()=>{
        console.log(Object.entries)
        if(Object.entries(filterData).filter((e) => e[1]).length === 0) {
            setShow(allData.current)
        }else{
            setShow(allData.current.filter((data)=> 
            filterData[data.location]
            ))
        }
    }, [filterData])

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
   
    const activeFilter = (e) => {
        const filter = e.target.value;
        setFilterData({
            ...filterData,
            [filter]: !filterData[filter]
        })
    }
    

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
                        name="active-status"
                        value="active"
                       
                    />
                    <label htmlFor="active-status">Active Contest</label>
                    <input
                        type="checkbox"
                        id="upcoming"
                        name="status-upcoming"
                        value="upcoming"
                    />
                    <label htmlFor="upcoming">Upcoming Contest</label>
                </div>
                <div className={sites ? styles.showFilter : styles.hideFilter}>

                    <input
                        type="checkbox"
                        id="hackerEarth"
                        name="hackerEarth"
                      
                        value="hackerearth.com"
                        onClick={activeFilter}
                    />
                    <label htmlFor="hackerEarth">HackerEarth</label>


                    <input
                        type="checkbox"
                        id="hackerRank"
                        name="hackerRank"
                        value="hackerrank.com"
                        onClick={activeFilter}

                    />
                    <label htmlFor="hackerRank">HackerRank</label>


                    <input
                        type="checkbox"
                        id="codeForces"
                        name="codeForces"
                        value="codeforces.com"
                        onClick={activeFilter}

                    />
                    <label htmlFor="codeForces">CodeForces</label>

                    <input
                        type="checkbox"
                        id="leetcode"
                        name="leetcode"
                        value="leetcode.com"
                        onClick={activeFilter}

                    />
                    <label htmlFor="leetcode">Leetcode</label>
                    <input
                        type="checkbox"
                        id="geeksForGeeks"
                        name="geeksForGeeks"
                        value="geeksforgeeks.org"
                        onClick={activeFilter}

                    />
                    <label htmlFor="geeksForGeeks">GeeksForGeeks</label>
                       <input
                        type="checkbox"
                        id="codeChef"
                        name="codeChef"
                        value="codechef.com"
                        onClick={activeFilter}

                    />
                    <label htmlFor="codeChef">CodeChef</label>
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
                <p>Sr No.</p>
                <p>contest Name </p>
                <p>Location</p>
                <p>Start Time </p>
                <p>End Time </p>
            </div>
            <div className={styles.contests}>
                <div className={styles['contest-list']}>
                    {show ? show.map((see ,index) => {
                        return (
                            <div className={styles.contest} key={see.key}>
                                <p>{index+1}</p>
                                <a href={see.desc.slice(5)} target="_a">
                                    {see.title}
                                </a>
                                <p>{see.location}</p>
                                <p>{see.time.start}</p>
                                <p>{see.time.end}</p>
                            </div>
                        );
                    }): <h1>Loading...</h1>}
                </div>
            </div>
        </div>
    );
};
export default MyApp;
