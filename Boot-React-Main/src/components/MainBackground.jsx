import { ImageObject } from "../database/TextAndImgData";

const MainBackground = () => {
  return (
    <div className="w-full h-screen flex flex-col cursor-none -z-10 absolute">
      <div className="flex flex-col flex-1 w-full md:flex-row-reverse md:justify-around h-auto gap-20 items-center">
        <img
          src={ImageObject.PatternBg}
          alt=""
          className="w-[90%] md:w-auto mt-10"
        />
        <img
          src={ImageObject.PatternQuotes}
          alt=""
          className="w-[20%] md:w-auto"
        />
      </div>
      <div className="w-full flex items-end justify-start">
        <img src={ImageObject.PatternCurve} alt="" />
      </div>
    </div>
  );
};

export default MainBackground;
