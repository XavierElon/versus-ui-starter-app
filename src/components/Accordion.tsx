import { useState, useRef } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
  key: number
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  key
}) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(
      active
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-180'
    )
  }

  return (
    <div className="flex flex-col" key={key}>
      <button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-white underline hover:text-zinc-400 light">
          {title}
        </p>
        <BsChevronDoubleDown
          className={`${rotate} inline-block text-white light hover:text-zinc-400`}
        />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-10 text-white">{content}</div>
      </div>
    </div>
  )
}

export default Accordion
