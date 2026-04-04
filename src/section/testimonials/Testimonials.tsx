import TestimonialCenter from "../../component/TestimonialCenter"
import TestimonialsImageA from "../../component/TestimonialsImageA"
import TestimonialsImageB from "../../component/TestimonialsImageB"

const Testimonials = () => {
  return (
    <div className="w-[90%] mt-40 pb-40 min-h-150 flex items-center justify-between mx-auto">
        <div className="w-[20%] h-full"><TestimonialsImageA /></div>
        <div className="w-[50%]"><TestimonialCenter /></div>
        <div className="w-[20%]"><TestimonialsImageB /></div>
    </div>
  )
}

export default Testimonials