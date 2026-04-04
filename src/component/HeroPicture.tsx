import img1 from '../assets/images/Ellipse 262.png';
import img2 from '../assets/images/Ellipse 261.png';
import img3 from '../assets/images/Ellipse 255.png';
import img4 from '../assets/images/Ellipse 256.png';
import img5 from '../assets/images/Ellipse 257.png';
import img6 from '../assets/images/Ellipse 258.png';
import img7 from '../assets/images/Ellipse 259.png';
import img8 from '../assets/images/Ellipse 260.png';

const HeroPicture = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        <div className='flex'>
            <div className="lg:w-56.5 aspect-square"><img src={img1} alt="image-1" /></div>
            <div className="lg:w-56.5 aspect-square -translate-14 "><img src={img2} alt="image-2" /></div>
        </div>
        <div className='flex'>
            <div className="lg:w-56.5 aspect-square -translate-y-40 translate-x-6"><img src={img3} alt="image-3" /></div>
            <div className="lg:w-56.5 aspect-square translate-y-10 -translate-x-6"><img src={img4} alt="image-4" /></div>
        </div>
        <div className='flex'>
            <div className="lg:w-56.5 aspect-square -translate-y-20 "><img src={img5} alt="image-5" /></div>
            <div className="lg:w-56.5 aspect-square -translate-x-14"><img src={img6} alt="image-6" /></div>
        </div>
        <div className='flex'>
            <div className="lg:w-56.5 aspect-square -translate-y-40"><img src={img7} alt="image-7" /></div>
            <div className="lg:w-56.5 aspect-square"><img src={img8} alt="image-8" /></div>
        </div>
    </div>
  )
}

export default HeroPicture