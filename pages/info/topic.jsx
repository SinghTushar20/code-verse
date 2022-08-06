import React from 'react';
import styles from '../../styles/pages/info/tips.module.css';

function TopicTile({ topicName, topicQuestion }) {
    return (
        <div className={styles['topic-container']}>
            <h2>{topicName}</h2>
            <p>topic total no of question : {topicQuestion}</p>
        </div>
    );
}

export default TopicTile;
