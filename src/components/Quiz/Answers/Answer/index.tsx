import React from 'react'
import { generateContrastHex, generateRandomHex } from '../../../../helpers';
import styles from './styles.module.scss'
interface Props {
    content: string
    onAnswer: (answer: string) => void
}
const Answer: React.FC<Props> = ({ content, onAnswer }) => {
    const randomBgColor = generateRandomHex();
    const randomColor = generateContrastHex(randomBgColor);
    const onClick = (e: React.MouseEvent, answer: string) => {
        e.preventDefault();
        onAnswer(answer)
    }
    return <div className={styles.container} style={{ 
        backgroundColor: randomBgColor,
        color: randomColor
    }}
    onClick={(e) => onClick(e, content)}
    >
                <div className={styles.content}>
                {content}
                </div>
    </div>
}

export default Answer