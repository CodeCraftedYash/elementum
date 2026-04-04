const ServicesHeading = () => {
  return (
    <div>
        <h1 className=" brand text-left leading-31.5 tracking-[0px]" style={{fontSize:"var(--font-size-title)"}}>
          What we <span className="relative">can<div className="absolute w-full h-full bg-[rgb(215,238,221)] top-0 left-0 -z-10 scale-x-125 rounded-full"></div></span> <br />
            <span className="relative">offer
            <svg width="395" height="56" viewBox="0 0 595 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 -translate-1/2 top-full scale-70">
            <path d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" stroke="#FFC250" stroke-width="6"/>
            </svg>
            </span>
            {" "} you!</h1>
    </div>
  )
}

export default ServicesHeading