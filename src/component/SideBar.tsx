
const SideBar = () => {
  return (
    <div className="flex flex-col gap-1 hover:scale-110 hover:cursor-pointer" onClick={()=>alert("This is like Hamburger, It should only work on mobile screen, I wish I had more time")}>
      <div className="w-6 h-0.5 bg-black/80"></div>
      <div className="w-6 h-0.5 bg-black/80"></div>
    </div>
  )
}

export default SideBar