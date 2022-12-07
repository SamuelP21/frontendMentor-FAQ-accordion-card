import React, { Fragment, useState } from 'react'
import {FaChevronUp, FaChevronDown} from 'react-icons/fa'

const SingleQuestions = ({quest}) => {

    const {questions,answers} = quest;

    const [isShowing, setIsShowing] = useState(false)

  return (
    <Fragment>
        <div className='article-questions'>
            <article onClick={() => setIsShowing(!isShowing)}>
                <h2 className={`${isShowing && "clicked"}`} >{questions}</h2>
                {isShowing ? <FaChevronUp className='icon' /> : <FaChevronDown className='icon' />}
            </article>
           {isShowing &&  <p>{answers}</p>}
        </div>
    </Fragment>
  )
}

export default SingleQuestions