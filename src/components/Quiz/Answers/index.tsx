import React from 'react'
import Answer from './Answer'
import styles from './styles.module.scss'
interface Props {
    answers: string[]
    onAnswer: (answer: string) => void
}
const Answers: React.FC<Props> = ({ answers, onAnswer }) => {
    return <div className={styles.container}>
        <div className={styles.answers}>
            {answers.map(ans => <Answer key={ans} content={ans} onAnswer={onAnswer} />)}
        </div>
    </div>
}

export default Answers