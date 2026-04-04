import FooterLinks from "../../component/FooterLinks"
import FooterMain from "../../component/FooterMain"

const Footer = () => {
  return (
    <div className="mt-40 bg-[#D7EEDD] pt-20">
      <div className="mb-20"><FooterMain /></div>
      <div><FooterLinks /></div>
      <div className="w-fit mx-auto mt-30 pb-10"><h2>©2023 Elementum. All rights reserved</h2></div>
    </div>
  )
}

export default Footer