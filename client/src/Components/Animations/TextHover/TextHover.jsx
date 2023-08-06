import React from 'react'
import './TextHover.css'
const TextHover = () => {
    const word = "hello  everyone  how  are  you  fine  sank  you".split("");

    const letterElements = document.querySelectorAll('.animatedletter>span');

    letterElements.forEach(letterElement => {
        letterElement.addEventListener('mouseenter', () => {
            letterElement.classList.add('bounce');
        });

        letterElement.addEventListener('mouseleave', () => {
            setTimeout(() => {
                letterElement.classList.remove('bounce');
            }, 1000);
        });
    });


    return (
        <div className='m-3 flex flex-col items-center mb-5'>
            <div className='font-extrabold text-center'>TextHover</div>
            <div className='animatedletter'>
                {
                    word.map((letter, idx) => (<span key={idx} color='red' className='letter'>{letter}</span>))
                }

            </div>

        </div>
    )
}

export default TextHover