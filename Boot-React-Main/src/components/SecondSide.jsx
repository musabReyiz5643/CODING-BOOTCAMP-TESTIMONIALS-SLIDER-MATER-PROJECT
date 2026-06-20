import { ContextObject } from "../database/TextAndImgData";

const SecondSide = ({ isActive }) => {
  const [firstContext, SecondContext] = ContextObject;

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-5 xl:w-1/2 relative xl:left-30">
      <h1 className="text-center xl:text-start text-xl text-context Inter-300 xl:text-5xl xl:leading-15">
        {!isActive ? firstContext.mainText : SecondContext.mainText}
      </h1>
      <div className="w-full items-center justify-center xl:flex-row xl:justify-start flex flex-col gap-2 xl:gap-5 xl:mt-10">
        <p className="text-xl Inter-700 text-context xl:text-3xl">
          {!isActive ? firstContext.userName : SecondContext.userName}
        </p>
        <p className="Inter-500 text-user-name xl:text-3xl">
          {!isActive ? firstContext.userJob : SecondContext.userJob}
        </p>
      </div>
    </div>
  );
};

export default SecondSide;
