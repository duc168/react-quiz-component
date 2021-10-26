import { useState } from 'react'
import styles from './App.module.scss'
import Quiz from './components/Quiz'

function App() {
  return (
   <div className={styles.container}>
     <Quiz question={'Which animal give you milk ?'} answers={['Cat', 'Mouse', 'Cow', 'Elephant']} correct={'Cow'} />
   </div>
  )
}

export default App
