import React from 'react'
import Answers from './Answers'
import Owner from './Owner'
import Question from './Question'
import styles from './styles.module.scss'
import User from './User'
import Welcome from './Welcome'
interface Props {
    question: string
    answers: string[]
    correct: string
}
const Quiz: React.FC<Props> = ({
    question,
    answers,
    correct
}) => {
    const onAnswer = (answer: string) => {
        if (answer === correct) {
            alert(`Correct!`)
        } else {
            alert('Incorrect!')
        }
    }
    return <div className={styles.container}>     
        <Welcome />   
        <Owner />
        <User />
        <Question text={question} />
        <Answers answers={answers} onAnswer={onAnswer} />
    </div>
}

export default Quiz