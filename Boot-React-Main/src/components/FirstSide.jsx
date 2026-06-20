import { ImageObject } from "../database/TextAndImgData";

const FirstSide = ({ isActive, setIsActive }) => {
  return (
    <div className="w-[80%]  md:w-[50%] xl:w-[40%] mt-5 h-auto flex items-center justify-center relative box-shadow-component xl:right-15">
      <img
        src={!isActive ? ImageObject.TanyaImg : ImageObject.JohnImg}
        alt=""
        className="w-full rounded-lg -z-10"
      />
      <div className="absolute left-1/2  translate-x-[-50%] xl:left-30 -bottom-5 bg-white  px-3 py-3 rounded-4xl flex items-center justify-between gap-5 w-auto ">
        <img
          src={ImageObject.IconPrev}
          alt=""
          className="cursor-pointer px-2 py-1 xl:px-3 xl:py-2"
          onClick={() => setIsActive(false)}
        />
        <img
          src={ImageObject.IconNext}
          alt=""
          className="cursor-pointer px-2 py-1 xl:px-3 xl:py-2 rounded-2xl "
          onClick={() => setIsActive(true)}
        />
      </div>
    </div>
  );
};

export default FirstSide;
