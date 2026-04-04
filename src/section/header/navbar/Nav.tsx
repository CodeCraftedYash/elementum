import Brand from "../../../component/Brand"
import SideBar from "../../../component/SideBar";

const Nav = () => {
    const navItems = ['Home','Studio','Services','Contact','FAQs'];
    const list = navItems.map((item,index) => {
        return <li key={index} onClick={()=>alert("Hire me ! and I will make it work")} className="satoshi leading-6 hover:cursor-pointer hover:scale-110 hover:text-green-500 transition-all duration-150 ease-in-out" style={{fontSize:"var(--font-size-extra-small)"}}>{item}</li>
    })
  return (
    <div className="w-full h-25 flex flex-row justify-around items-center">
        <Brand />
        <nav>
            <ul className="hidden lg:flex gap-2 lg:gap-10">
                {list}
            </ul>
        </nav>

        <div><SideBar /></div>
    </div>
  )
}

export default Nav