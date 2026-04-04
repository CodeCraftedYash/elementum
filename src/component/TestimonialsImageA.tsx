import image1 from '../assets/images/t1.png';
import image2 from '../assets/images/t2.png';
import image3 from '../assets/images/t3.png';
import image4 from '../assets/images/t4.png';
const TestimonialsImageA = () => {
  return (
    <div className='w-full h-full relative'>
        <div className='w-60 aspect-square absolute top-0 -right-10'><img className='w-full h-full' src={image1} alt="image 1" /></div>
        <div className='w-40 aspect-square absolute bottom-40 right-20'><img className='w-full h-full' src={image2} alt="image 2" /></div>
        <div className='w-20 aspect-square absolute -top-20'><img className='w-full h-full' src={image3} alt="image 3" /></div>
        <div className='w-40 aspect-square absolute top-70'><img className='w-full h-full' src={image4} alt="image 4" /></div>
    </div>
  )
}

export default TestimonialsImageA