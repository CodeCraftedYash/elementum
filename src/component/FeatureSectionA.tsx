import featureImageA from "../assets/images/featureImageA.png";

const FeatureSectionA = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-[80%] w-full mx-auto justify-between items-center">
      <div className="flex flex-col w-[90%] md:w-[48%] gap-10">
        <h2
          className="brand leading-19"
          style={{ fontSize: "var(--font-size-extra-big)" }}
        >
          <span className="relative">
            Tomorrow{" "}
            <svg
              className="absolute -bottom-10 left-0"
              width="100%"
              height="100%"
              viewBox="0 0 372 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5"
                stroke="#FFC250"
                stroke-width="3"
              />
            </svg>
          </span>
          should <br />
          be better than {" "}
          <span className="relative">
            today
            <div className="bg-[#D7EEDD] w-full scale-x-120 rounded-full h-full absolute top-0 right-0 -z-10"></div>
          </span>
        </h2>
        <p className="satoshi" style={{ fontSize: "var(--font-size-base)" }}>
          We are a team of strategists, designers communicators, researchers.
          Together, we belive that progress only happens when you refuse to
          play things safe.
        </p>
        <h3
          className="satoshi flex items-center gap-2"
          style={{ fontSize: "var(--font-size-small)" }}
        >
          Read more
          <span>
            <svg
              width="145"
              height="8"
              viewBox="0 0 145 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z"
                fill="black"
              />
            </svg>
          </span>
        </h3>
      </div>
      <div className="rounded-full overflow-hidden aspect-square w-100 lg:w-150">
        <img
          src={featureImageA}
          alt="feature image A"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="w-61.5 aspect-square absolute rounded-full -top-50   lg:-top-10 left-1/2 -translate-x-1/2" style={{backgroundImage:"radial-gradient(#FF2020,#FF2020 20%,transparent)",opacity:"50%",filter:"blur(30px)"}}></div>
    </div>
  );
};

export default FeatureSectionA;
