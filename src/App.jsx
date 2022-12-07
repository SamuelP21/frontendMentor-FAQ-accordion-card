import React, { useState } from 'react'
import { questions } from './components/questions/questions'
import mobile from './assets/images/illustration-woman-online-mobile.svg'
import desktop from './assets/images/illustration-woman-online-desktop.svg'
import desktopbg from './assets/images/bg-pattern-desktop.svg'
import mobilebg from './assets/images/bg-pattern-mobile.svg'
import box from './assets/images/illustration-box-desktop.svg'
import SingleQuestions from './components/SingleQuestions'

const App = () => {

  const [quests] = useState(questions)

  return (  
              
          <>
          
          <img className='box' src={box} alt="asdasd" />
            
            <div className='container'>
                <article>
                    <picture>
                      <source media="(min-width: 768px)" srcSet={desktop} />
                      <img src={mobile} alt="asdasd" />
                    </picture>
                    <picture className='sombra'>
                      <source media="(min-width: 768px)" srcSet={desktopbg} />
                      <img src={mobilebg} alt="asdasd" />
                    </picture>
                    
                </article>
        
              <article>
                <h1>FAQ</h1>
        
                {
                  quests.map((quest) => (
                    <SingleQuestions key={quest.id} quest={quest}/>
                  ))
                }
        
                
              </article>
            </div>
          
          </>
  )
}

export default App