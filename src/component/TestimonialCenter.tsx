import InvertedComman from "./InvertedComman";

const TestimonialCenter = () => {
  return (
    <div>
      <div className="mb-20">
        <h1
          style={{ fontSize: "var(--font-size-title)" }}
          className="brand text-center"
        >
          <span className="relative">
            What{" "}
            <div className="absolute top-0 -left-4 -z-10 w-full h-full  bg-[#D7EEDD] rounded-full scale-110 "></div>
          </span>{" "}
          our customer <br />
          says{" "}
          <span className="relative">
            About us{" "}
            <div className="absolute -bottom-4 right-0">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 372 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.0338 1.5H336.4L0.0641479 15.9H371.064L183.066 31.5"
                  stroke="#FFC250"
                  stroke-width="3"
                />
              </svg>
            </div>
          </span>
        </h1>
      </div>
      <div>
        <p className="text-center satoshi bg-[#D7EEDD4D] rounded-3xl py-16 px-20 w-[80%] mx-auto relative" style={{fontSize:"var(--font-size-base)"}}>
          <span className="absolute top-12 left-10"><InvertedComman /></span>Elementum delivered the site with inthe timeline as they requested.
          Inthe end, the client found a 50% increase in traffic with in days
          since its launch. They also had an impressive ability to use
          technologies that the company hasn`t used, which have also proved to
          be easy to use and reliable<span className="absolute bottom-12 right-40 rotate-180"><InvertedComman /></span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCenter;
