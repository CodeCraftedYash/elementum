const FeatureDesign = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0">
      <div className="bg-[#FF7171] w-20 lg:w-48.5 aspect-square absolute right-10 lg:right-34 top-12 -z-10 rotate-12"></div>

      <div className="bg-[#FF7171] w-30 lg:w-48.5 aspect-square absolute bottom-150 lg:bottom-160 -z-10 lg:left-56 left-150 rotate-12" style={{clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"}}></div>

      <div className="bg-[#FF7171] w-30 lg:w-48.5 aspect-square absolute bottom-100  lg:bottom-44 lg:left-150 left-10 rotate-2" style={{clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"}}></div>

      <div className="absolute -z-20 top-80 -right-60 w-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1483 654"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2_9)">
            <path
              d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727"
              stroke="#FF6D6D"
              stroke-width="5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2_9"
              x="0"
              y="0"
              width="1502.99"
              height="653.604"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="16" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2_9"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2_9"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default FeatureDesign;
