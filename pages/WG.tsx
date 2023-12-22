import type { NextPage } from "next";
import TITELBLOCK169 from "../components/TITELBLOCK169";

const WG: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden">
      <TITELBLOCK169
        vector="/vector@2x.png"
        pROJECTNAME="WILSHIRE GRAND . CA"
        pROJECTROLE="PM / BIM"
        pROJECTROLE1="STANDARD VISION"
        pROJECTDATE="03/2017"
        pROJECTTYPE="INTEGRATED MEDIA FACADE"
        tITELBLOCK169Position="absolute"
        tITELBLOCK169Top="calc(50% - 540px)"
        tITELBLOCK169Left="calc(50% - 960px)"
        tITELBLOCK169FlexShrink="unset"
        pROJECTNAMERight="-397px"
        pROJECTNAMEWidth="530px"
        pROJECTNAMEHeight="70px"
        pROJECTNAMETextTransform="unset"
        pROJECTNAMEWhiteSpace="unset"
        pROJECTROLERight="112px"
        pROJECTROLEWhiteSpace="unset"
        pROJECTROLERight1="77px"
        pROJECTDATERight="115px"
        pROJECTDATERight1="147px"
        pROJECTTYPERight="40px"
        pROJECTTYPEBottom="46px"
        pROJECTTYPEWhiteSpace="unset"
      />
      <img
        className="absolute top-[161px] left-[154px] w-[863px] h-[808px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="absolute top-[97px] left-[1186px] rounded-26xl w-[544px] h-[930px] overflow-hidden object-contain"
        alt=""
        src="/frame@2x.png"
      />
    </div>
  );
};

export default WG;
