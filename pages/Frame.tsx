import type { NextPage } from "next";
import TITELBLOCK169 from "../components/TITELBLOCK169";

const Frame: NextPage = () => {
  return (
    <div className="relative w-full h-[1080px] flex flex-row items-center justify-end">
      <TITELBLOCK169
        vector="/vector@2x.png"
        pROJECTNAME="PROJECT NAME"
        pROJECTROLE="PROJECT ROLE"
        pROJECTROLE1="PROJECT ROLE"
        pROJECTDATE="PROJECT DATE"
        pROJECTDATE1="PROJECT DATE"
        pROJECTTYPE="PROJECT TYPE"
        tITELBLOCK169Position="relative"
        tITELBLOCK169Top="unset"
        tITELBLOCK169Left="unset"
        tITELBLOCK169FlexShrink="0"
        pROJECTNAMERight="-397px"
        pROJECTNAMEWidth="530px"
        pROJECTNAMEHeight="70px"
        pROJECTNAMETextTransform="unset"
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
        className="relative w-[1706px] h-[1066px] object-cover ml-[-1899px]"
        alt=""
        src="/image@2x.png"
      />
    </div>
  );
};

export default Frame;
