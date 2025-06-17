import React, { useEffect, useState } from 'react'
const sentences = [
    'Welcome to my page',
    'I am Anthony Oshioke',
    'I am passionate about building web application,',
    'Crafting elegant user interfaces,',
    'Bringing ideas to life on the web,',
    'Your next favourite front-end developer.'
  ]

const Intro = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(()=>{
    const currentSentence = sentences[sentenceIndex];
    const isEnd = !isDeleting && charIndex === currentSentence.length;
    const isStart = isDeleting && charIndex === 0

    let timeOut = setTimeout (()=>{
      
      if (isEnd) {
        setIsDeleting(true)
      }else if (isStart) {
        setIsDeleting(false)
        setSentenceIndex((prev)=> (prev + 1) % sentences.length)
        setCharIndex(0)
      }else{
        setCharIndex((prev)=> prev + (isDeleting ? -1 : 1))
        setText(currentSentence.slice(0, charIndex + (isDeleting ? -1 : 1)))
      }
    },isEnd || isStart ? 1000 : isDeleting ? 50 : 100)


    return ()=>clearTimeout(timeOut)
  },[isDeleting, charIndex, sentenceIndex, sentences])

  return (
    <div className='sm:w-[55%] font-eduhand'>
        <h2 className='text-xl mb-3'>Hello 👋</h2>
        <h1 className='text-3xl font-bold'>{text}</h1>
        <p className='mt-4 text-lg text-center'>Frontend developer with a creative mind and a strong focus on crafting smooth, beautiful interfaces — a strong foundation in modern web development, trained through hands-on courses and driven by a passion for great design and user experience.</p>
        <div className="sm:hidden w-full h-[1px] bg-[#cbe957] mt-4"></div>
    </div>
  )
}

export default Intro