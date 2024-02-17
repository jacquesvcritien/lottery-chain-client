//@ts-nocheck
import { MsgUpdateParams, MsgChangeNumber, MsgCreatePrivateLottery, MsgChooseNumberPrivate } from "./tx";
export const AminoConverter = {
  "/lottery.lottery.MsgUpdateParams": {
    aminoType: "lottery/x/lottery/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/lottery.lottery.MsgChangeNumber": {
    aminoType: "/lottery.lottery.MsgChangeNumber",
    toAmino: MsgChangeNumber.toAmino,
    fromAmino: MsgChangeNumber.fromAmino
  },
  "/lottery.lottery.MsgCreatePrivateLottery": {
    aminoType: "/lottery.lottery.MsgCreatePrivateLottery",
    toAmino: MsgCreatePrivateLottery.toAmino,
    fromAmino: MsgCreatePrivateLottery.fromAmino
  },
  "/lottery.lottery.MsgChooseNumberPrivate": {
    aminoType: "/lottery.lottery.MsgChooseNumberPrivate",
    toAmino: MsgChooseNumberPrivate.toAmino,
    fromAmino: MsgChooseNumberPrivate.fromAmino
  }
};