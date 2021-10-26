import React from 'react'
import styles from './styles.module.scss';
interface Props {
    text: string
}
const Question: React.FC<Props> = ({ text }) => {
    return <div className={styles.container}>
            <h1>{text}</h1>
    </div>
}

export default Question