import HeroDesign from "../../component/HeroDesign";
import HeroMainText from "../../component/HeroMainText";
import HeroPicture from "../../component/HeroPicture";

const Hero = () => {
  return (
    <div className=" mt-24 flex flex-col items-center">
      <div className="w-fit">
        <div>
          <HeroMainText />
        </div>
        <div className="w-[70%] lg:w-[52%] mx-auto mt-4 lg:mt-8">
          <h3
            className="satoshi font-normal leading-9 tracking-0 text-center"
            style={{ fontSize: "var(--font-size-base)" }}
          >
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to
            play things safe.
          </h3>
        </div>
      </div>
      <div className="w-[90%] h-full grow flex flex-col justify-end  mt-70 lg:mt-80">
        <HeroPicture />
      </div>
      <div>
        <HeroDesign />
      </div>
    </div>
  );
};

export default Hero;
