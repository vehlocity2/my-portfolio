import React, { useEffect, useState } from 'react'
const Name = [
  'Anthony',
  'Solomon',
  'Oshioke'
]

const SubText = () => {
  
  const [text, setText] =useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(()=>{
    const currentSentence = Name[sentenceIndex]
    const isEnding = !isDeleting && charIndex === currentSentence.length
    const isStarting = isDeleting && charIndex === 0

    let timeout = setTimeout(()=>{
      if (isEnding) {
        setIsDeleting(true)
      }else if (isStarting) {
        setIsDeleting(false)
        setSentenceIndex((prev)=> (prev + 1) % Name.length)
        setCharIndex(0)
      }else {
        setCharIndex((prev)=> prev + (isDeleting ? -1 : 1))
        setText(currentSentence.slice(0, charIndex + (isDeleting ? -1 : 1)))
      }
    }, isEnding || isStarting ? 1000 : isDeleting ? 50 : 100)
  }, [charIndex, Name, sentenceIndex, isDeleting])

  return (
    <div className='flex  sm:flex-row justify-between items-center font-edusa gap-4 px-6 pt-10 sm:py-10'>
      <div className="flex items-center gap-2 text-[#cbe957] text-sm">
        <p className='text-[5vmin]'>{text}</p>
        <div className="w-3 h-3 mt-2 bg-[#cbe957] rounded-full"></div>
      </div>
      <div className="">
        <a href="./My Frontend Cv.pdf" download={"My Frontend Cv.pdf"}>
            <button className='border-2 border-[#cbe957] text-[#cbe957] hover:bg-[#cbe957] hover:text-[#313743] px-4 py-1'>My Cv</button>
        </a>
      </div>
    </div>
  )
}

export default SubText