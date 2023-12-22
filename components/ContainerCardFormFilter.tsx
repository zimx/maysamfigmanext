import type { NextPage } from "next";

type ContainerCardFormFilterType = {
  dimensionCode?: string;
};

const ContainerCardFormFilter: NextPage<ContainerCardFormFilterType> = ({
  dimensionCode,
}) => {
  return (
    <div className="absolute h-[6.38%] w-[94.4%] top-[93.25%] right-[4.84%] bottom-[0.37%] left-[0.76%] text-left text-7xs-5 text-black font-inter">
      <div className="absolute h-[68.21%] w-[0.39%] top-[0%] right-[99.61%] bottom-[31.79%] left-[0%]">
        <div className="absolute top-[100%] left-[0%] whitespace-pre-wrap [transform:_rotate(-90deg)] [transform-origin:0_0]">
          M A Y S A M ME
        </div>
        <img
          className="absolute h-[5.11%] w-[35.71%] top-[33.83%] right-[32.86%] bottom-[61.06%] left-[31.43%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={dimensionCode}
        />
      </div>
      <div className="absolute right-[0px] bottom-[0px] w-[53px] h-2.5 text-5xs font-dosis">
        <div className="absolute right-[0px] bottom-[0px] font-semibold whitespace-pre-wrap">
          M A Y S A M ME
        </div>
        <img
          className="absolute right-[12.2px] bottom-[2.7px] w-[2.4px] h-[2.5px] object-cover"
          alt=""
          src="/vector@2x.png"
        />
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
