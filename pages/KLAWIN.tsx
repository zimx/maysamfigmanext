import type { NextPage } from "next";
import TITELBLOCK169 from "../components/TITELBLOCK169";

const KLAWIN: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden">
      <TITELBLOCK169
        vector="/vector@2x.png"
        pROJECTNAME="Klawin Residence"
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
        className="absolute bottom-[32px] left-[48px] rounded-21xl w-[1676px] h-[798px] object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <img
        className="absolute top-[-2px] left-[693px] w-[1031px] h-[364px] object-contain mix-blend-multiply"
        alt=""
        src="/image-2@2x.png"
      />
      <img
        className="absolute top-[5px] left-[40px] w-[656px] h-[579px] object-cover mix-blend-multiply"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default KLAWIN;
