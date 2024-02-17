//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgChangeNumber, MsgCreatePrivateLottery, MsgChooseNumberPrivate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lottery.lottery.MsgUpdateParams", MsgUpdateParams], ["/lottery.lottery.MsgChangeNumber", MsgChangeNumber], ["/lottery.lottery.MsgCreatePrivateLottery", MsgCreatePrivateLottery], ["/lottery.lottery.MsgChooseNumberPrivate", MsgChooseNumberPrivate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lottery.lottery.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    changeNumber(value: MsgChangeNumber) {
      return {
        typeUrl: "/lottery.lottery.MsgChangeNumber",
        value: MsgChangeNumber.encode(value).finish()
      };
    },
    createPrivateLottery(value: MsgCreatePrivateLottery) {
      return {
        typeUrl: "/lottery.lottery.MsgCreatePrivateLottery",
        value: MsgCreatePrivateLottery.encode(value).finish()
      };
    },
    chooseNumberPrivate(value: MsgChooseNumberPrivate) {
      return {
        typeUrl: "/lottery.lottery.MsgChooseNumberPrivate",
        value: MsgChooseNumberPrivate.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lottery.lottery.MsgUpdateParams",
        value
      };
    },
    changeNumber(value: MsgChangeNumber) {
      return {
        typeUrl: "/lottery.lottery.MsgChangeNumber",
        value
      };
    },
    createPrivateLottery(value: MsgCreatePrivateLottery) {
      return {
        typeUrl: "/lottery.lottery.MsgCreatePrivateLottery",
        value
      };
    },
    chooseNumberPrivate(value: MsgChooseNumberPrivate) {
      return {
        typeUrl: "/lottery.lottery.MsgChooseNumberPrivate",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/lottery.lottery.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    changeNumber(value: MsgChangeNumber) {
      return {
        typeUrl: "/lottery.lottery.MsgChangeNumber",
        value: MsgChangeNumber.fromPartial(value)
      };
    },
    createPrivateLottery(value: MsgCreatePrivateLottery) {
      return {
        typeUrl: "/lottery.lottery.MsgCreatePrivateLottery",
        value: MsgCreatePrivateLottery.fromPartial(value)
      };
    },
    chooseNumberPrivate(value: MsgChooseNumberPrivate) {
      return {
        typeUrl: "/lottery.lottery.MsgChooseNumberPrivate",
        value: MsgChooseNumberPrivate.fromPartial(value)
      };
    }
  }
};