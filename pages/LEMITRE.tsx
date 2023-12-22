import type { NextPage } from "next";
import TITELBLOCK169 from "../components/TITELBLOCK169";

const LEMITRE: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden">
      <TITELBLOCK169
        vector="/vector@2x.png"
        pROJECTNAME="6538 Evening Star Dr . UT"
        pROJECTROLE="PROJECT MANAGER"
        pROJECTROLE1="JRM / A"
        pROJECTDATE="FALL 2019"
        pROJECTDATE1="9000 SQF"
        pROJECTTYPE="RESIDENTIAL"
        tITELBLOCK169Position="absolute"
        tITELBLOCK169Top="0px"
        tITELBLOCK169Left="0px"
        tITELBLOCK169FlexShrink="unset"
        pROJECTNAMERight="-468px"
        pROJECTNAMEWidth="unset"
        pROJECTNAMEHeight="unset"
        pROJECTNAMETextTransform="uppercase"
        pROJECTNAMEWhiteSpace="unset"
        pROJECTROLERight="69px"
        pROJECTROLEWhiteSpace="unset"
        pROJECTROLERight1="115px"
        pROJECTDATERight="108px"
        pROJECTDATERight1="108px"
        pROJECTTYPERight="98px"
        pROJECTTYPEBottom="46px"
        pROJECTTYPEWhiteSpace="unset"
      />
      <img
        className="absolute bottom-[36px] left-[40px] rounded-21xl w-[1676px] h-[798px] object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <img
        className="absolute top-[24px] left-[12px] w-[1710px] h-[450px] object-cover mix-blend-multiply"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default LEMITRE;
