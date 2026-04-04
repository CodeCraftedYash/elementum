
const FooterButton = () => {
  return (
    <button className="satoshi hover:scale-110 bg-black text-white py-4 px-8 rounded-full transition-all duration-300 ease-in-out hover:text-green-400 hover:cursor-pointer" style={{fontSize:"var(--font-size-small)"}} onClick={()=>alert("subscribe button clicked")}>Subscribe Now</button>
  )
}

export default FooterButton