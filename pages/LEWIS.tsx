import type { NextPage } from "next";
import TITELBLOCK169 from "../components/TITELBLOCK169";

const LEWIS: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden">
      <TITELBLOCK169
        vector="/vector@2x.png"
        pROJECTNAME="Lewis Mammoth . ca"
        pROJECTROLE="PROJECT ROLE"
        pROJECTROLE1="PROJECT ROLE"
        pROJECTDATE="PROJECT DATE"
        pROJECTDATE1="PROJECT DATE"
        pROJECTTYPE="PROJECT TYPE"
        tITELBLOCK169Position="absolute"
        tITELBLOCK169Top="calc(50% - 540px)"
        tITELBLOCK169Left="calc(50% - 960px)"
        tITELBLOCK169FlexShrink="unset"
        pROJECTNAMERight="-397px"
        pROJECTNAMEWidth="530px"
        pROJECTNAMEHeight="70px"
        pROJECTNAMETextTransform="uppercase"
        pROJECTNAMEWhiteSpace="unset"
        pROJECTROLERight="88px"
        pROJECTROLEWhiteSpace="unset"
        pROJECTROLERight1="88px"
        pROJECTDATERight="88px"
        pROJECTDATERight1="88px"
        pROJECTTYPERight="90px"
        pROJECTTYPEBottom="46px"
        pROJECTTYPEWhiteSpace="unset"
      />
      <img
        className="absolute top-[238px] left-[48px] rounded-[35px] w-[1678px] h-[805px] overflow-hidden object-cover"
        alt=""
        src="/frame-4@2x.png"
      />
      <img
        className="absolute top-[26px] left-[48px] w-[398px] h-[217.3px] object-cover mix-blend-multiply"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default LEWIS;
