import React from 'react'
import styles from './styles.module.scss'
const Owner: React.FC<any> = () => {
    return <div className={styles.container}>
            Only show when this is owner. Owner can start/end the game. After the game starts, new joining user will become spectator.
    </div>
}

export default Owner