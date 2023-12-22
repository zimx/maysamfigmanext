import type { NextPage } from "next";
import TITELBLOCK169 from "../components/TITELBLOCK169";

const OKMAN: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden">
      <TITELBLOCK169
        vector="/vector@2x.png"
        pROJECTNAME="OAKMONT RES. CA"
        pROJECTROLE="PROJECT DESIGNER"
        pROJECTROLE1="RCH"
        pROJECTDATE="11 / 2019"
        pROJECTDATE1="12 000 SQF"
        pROJECTTYPE="RESIDENTIAL"
        tITELBLOCK169Position="absolute"
        tITELBLOCK169Top="calc(50% - 540px)"
        tITELBLOCK169Left="calc(50% - 960px)"
        tITELBLOCK169FlexShrink="unset"
        pROJECTNAMERight="-397px"
        pROJECTNAMEWidth="530px"
        pROJECTNAMEHeight="70px"
        pROJECTNAMETextTransform="unset"
        pROJECTNAMEWhiteSpace="unset"
        pROJECTROLERight="69px"
        pROJECTROLEWhiteSpace="unset"
        pROJECTROLERight1="130px"
        pROJECTDATERight="115px"
        pROJECTDATERight1="104px"
        pROJECTTYPERight="98px"
        pROJECTTYPEBottom="46px"
        pROJECTTYPEWhiteSpace="unset"
      />
      <img
        className="absolute bottom-[724px] left-[42px] rounded-21xl w-[490px] h-80 object-cover"
        alt=""
        src="/rectangle@2x.png"
      />
      <img
        className="absolute bottom-[385.1px] left-[42px] rounded-21xl w-[490px] h-[314.9px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="absolute top-[90px] left-[578px] w-[1153px] h-[897px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <img
        className="absolute top-[719px] left-[42px] rounded-26xl w-[490px] h-80 object-cover"
        alt=""
        src="/render-arrial03-1@2x.png"
      />
    </div>
  );
};

export default OKMAN;
