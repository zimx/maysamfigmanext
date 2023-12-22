import type { NextPage } from "next";
import TITELBLOCK169 from "../components/TITELBLOCK169";

const GRUBHAUS: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden">
      <TITELBLOCK169
        vector="/vector@2x.png"
        pROJECTNAME="Grubhaus"
        pROJECTROLE="PM / BIM"
        pROJECTROLE1="JRM / A"
        pROJECTDATE="2021"
        pROJECTDATE1="12000 SQF"
        pROJECTTYPE="COMMERCIAL"
        tITELBLOCK169Position="absolute"
        tITELBLOCK169Top="calc(50% - 540px)"
        tITELBLOCK169Left="calc(50% - 960px)"
        tITELBLOCK169FlexShrink="unset"
        pROJECTNAMERight="-397px"
        pROJECTNAMEWidth="530px"
        pROJECTNAMEHeight="70px"
        pROJECTNAMETextTransform="uppercase"
        pROJECTNAMEWhiteSpace="unset"
        pROJECTROLERight="112px"
        pROJECTROLEWhiteSpace="unset"
        pROJECTROLERight1="115px"
        pROJECTDATERight="129px"
        pROJECTDATERight1="106px"
        pROJECTTYPERight="97px"
        pROJECTTYPEBottom="46px"
        pROJECTTYPEWhiteSpace="unset"
      />
      <img
        className="absolute bottom-[20px] left-[38px] rounded-21xl w-[1676px] h-[798px] object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <img
        className="absolute top-[-4px] left-[45px] w-[417px] h-[270px] object-cover mix-blend-multiply"
        alt=""
        src="/untitled1recovered@2x.png"
      />
      <img
        className="absolute top-[-4px] left-[462px] w-[418px] h-[270px] object-cover mix-blend-multiply"
        alt=""
        src="/untitled2recovered@2x.png"
      />
      <img
        className="absolute top-[-4px] left-[880px] w-[418px] h-[270px] object-cover mix-blend-multiply"
        alt=""
        src="/untitled3recovered@2x.png"
      />
      <img
        className="absolute top-[-4px] left-[1298px] w-[417px] h-[270px] object-cover mix-blend-multiply"
        alt=""
        src="/untitled4recovered@2x.png"
      />
    </div>
  );
};

export default GRUBHAUS;
