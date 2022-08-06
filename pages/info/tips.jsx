import { useState } from 'react';
import styles from '../../styles/pages/info/tips.module.css';
import TopicTile from './topic';
const MyApp = () => {
    const topicList = [
        { topicName: 'Array', topicQuestion: '5' },
        { topicName: 'LinkedList', topicQuestion: '8' },
        { topicName: 'Graph', topicQuestion: '3' },
        {
            topicName: 'Dynamic Programming ',
            topicQuestion: '7',
        },
    ];

    return (
        <div className={styles['container']}>
            <h1>DSA sheet for mastery in coding </h1>
            <div className={styles['topics']}>
                {topicList.map((topic, i) => (
                    <TopicTile
                        key={i}
                        topicName={topic['topicName']}
                        topicQuestion={topic.topicQuestion}
                    />
                ))}
            </div>
        </div>
    );
};
export default MyApp;
