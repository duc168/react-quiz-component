import React from 'react'
import styles from './styles.module.scss'
const Spectator: React.FC<any> = () => {
    return <div className={styles.container}>
            Spectator can see the question and answer but can not answer, after the question is timed out, then it will be automatically passed to another question without recording the user decision.
    </div>
}

export default Spectator