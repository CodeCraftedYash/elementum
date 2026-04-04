import FooterButton from "./FooterButton"

const FooterMain = () => {
  return (
    <div className="border-b w-[80%] mx-auto relative">
        <h1 className="text-center brand" style={{fontSize:"var(--font-size-title)"}}>Subscribe to <br /> our newsletter</h1>
        <h2 className=" text-center satoshi mt-8" style={{fontSize:"var(--font-size-small)"}}>To make your stay special and even more memorable</h2>
        <div className="w-fit mx-auto mt-8 mb-20"><FooterButton /></div>
        <div className="bg-[#934CEC] w-50 aspect-square rounded-full rotate-32 absolute top-20 right-0" style={{clipPath:"polygon(0% 0%,50% 0%,50% 100%, 0% 100%)"}}></div>
    </div>
  )
}

export default FooterMain