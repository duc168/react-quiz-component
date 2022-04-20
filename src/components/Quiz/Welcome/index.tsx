import React from 'react'
import styles from './styles.module.scss'
const Welcome: React.FC<any> = () => {
    return <div className={styles.container}>
            Welcome (after joining in, user will see this welcome screen, show user info)
    </div>
}

export default Welcome