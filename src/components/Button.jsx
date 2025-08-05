import React from 'react'

const Button = ({text, className, id}) => {
  return (
    <a href="" className={`${className ?? ''}cta-wrapper`}>
        <div className='cta-button group'>
            <div className='bg-circle'/>
            <p className='text'>See my Work</p>
            <div className='arrow-wrapper'>
                <img src="/images/arrow-down.svg" alt="down" />
            </div>

        </div>
    </a>
  )
}

export default Button
