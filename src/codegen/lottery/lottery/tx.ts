import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/lottery.lottery.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "lottery/x/lottery/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lottery.lottery.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lottery.lottery.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgChangeNumber {
  creator: string;
  number: string;
}
export interface MsgChangeNumberProtoMsg {
  typeUrl: "/lottery.lottery.MsgChangeNumber";
  value: Uint8Array;
}
export interface MsgChangeNumberAmino {
  creator?: string;
  number?: string;
}
export interface MsgChangeNumberAminoMsg {
  type: "/lottery.lottery.MsgChangeNumber";
  value: MsgChangeNumberAmino;
}
export interface MsgChangeNumberSDKType {
  creator: string;
  number: string;
}
export interface MsgChangeNumberResponse {}
export interface MsgChangeNumberResponseProtoMsg {
  typeUrl: "/lottery.lottery.MsgChangeNumberResponse";
  value: Uint8Array;
}
export interface MsgChangeNumberResponseAmino {}
export interface MsgChangeNumberResponseAminoMsg {
  type: "/lottery.lottery.MsgChangeNumberResponse";
  value: MsgChangeNumberResponseAmino;
}
export interface MsgChangeNumberResponseSDKType {}
export interface MsgCreatePrivateLottery {
  creator: string;
  totalPrize: string;
  pricePerentages: string;
  winnerRequirements: string;
  maxNumber: bigint;
  entryFee: string;
}
export interface MsgCreatePrivateLotteryProtoMsg {
  typeUrl: "/lottery.lottery.MsgCreatePrivateLottery";
  value: Uint8Array;
}
export interface MsgCreatePrivateLotteryAmino {
  creator?: string;
  totalPrize?: string;
  pricePerentages?: string;
  winnerRequirements?: string;
  maxNumber?: string;
  entryFee?: string;
}
export interface MsgCreatePrivateLotteryAminoMsg {
  type: "/lottery.lottery.MsgCreatePrivateLottery";
  value: MsgCreatePrivateLotteryAmino;
}
export interface MsgCreatePrivateLotterySDKType {
  creator: string;
  totalPrize: string;
  pricePerentages: string;
  winnerRequirements: string;
  maxNumber: bigint;
  entryFee: string;
}
export interface MsgCreatePrivateLotteryResponse {
  id: string;
}
export interface MsgCreatePrivateLotteryResponseProtoMsg {
  typeUrl: "/lottery.lottery.MsgCreatePrivateLotteryResponse";
  value: Uint8Array;
}
export interface MsgCreatePrivateLotteryResponseAmino {
  id?: string;
}
export interface MsgCreatePrivateLotteryResponseAminoMsg {
  type: "/lottery.lottery.MsgCreatePrivateLotteryResponse";
  value: MsgCreatePrivateLotteryResponseAmino;
}
export interface MsgCreatePrivateLotteryResponseSDKType {
  id: string;
}
export interface MsgChooseNumberPrivate {
  creator: string;
  lottery: string;
  number: string;
}
export interface MsgChooseNumberPrivateProtoMsg {
  typeUrl: "/lottery.lottery.MsgChooseNumberPrivate";
  value: Uint8Array;
}
export interface MsgChooseNumberPrivateAmino {
  creator?: string;
  lottery?: string;
  number?: string;
}
export interface MsgChooseNumberPrivateAminoMsg {
  type: "/lottery.lottery.MsgChooseNumberPrivate";
  value: MsgChooseNumberPrivateAmino;
}
export interface MsgChooseNumberPrivateSDKType {
  creator: string;
  lottery: string;
  number: string;
}
export interface MsgChooseNumberPrivateResponse {}
export interface MsgChooseNumberPrivateResponseProtoMsg {
  typeUrl: "/lottery.lottery.MsgChooseNumberPrivateResponse";
  value: Uint8Array;
}
export interface MsgChooseNumberPrivateResponseAmino {}
export interface MsgChooseNumberPrivateResponseAminoMsg {
  type: "/lottery.lottery.MsgChooseNumberPrivateResponse";
  value: MsgChooseNumberPrivateResponseAmino;
}
export interface MsgChooseNumberPrivateResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/lottery.lottery.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "lottery/x/lottery/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/lottery.lottery.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/lottery.lottery.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/lottery.lottery.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeNumber(): MsgChangeNumber {
  return {
    creator: "",
    number: ""
  };
}
export const MsgChangeNumber = {
  typeUrl: "/lottery.lottery.MsgChangeNumber",
  encode(message: MsgChangeNumber, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.number !== "") {
      writer.uint32(18).string(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeNumber {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeNumber();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.number = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeNumber>): MsgChangeNumber {
    const message = createBaseMsgChangeNumber();
    message.creator = object.creator ?? "";
    message.number = object.number ?? "";
    return message;
  },
  fromAmino(object: MsgChangeNumberAmino): MsgChangeNumber {
    const message = createBaseMsgChangeNumber();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    return message;
  },
  toAmino(message: MsgChangeNumber): MsgChangeNumberAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.number = message.number;
    return obj;
  },
  fromAminoMsg(object: MsgChangeNumberAminoMsg): MsgChangeNumber {
    return MsgChangeNumber.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeNumberProtoMsg): MsgChangeNumber {
    return MsgChangeNumber.decode(message.value);
  },
  toProto(message: MsgChangeNumber): Uint8Array {
    return MsgChangeNumber.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeNumber): MsgChangeNumberProtoMsg {
    return {
      typeUrl: "/lottery.lottery.MsgChangeNumber",
      value: MsgChangeNumber.encode(message).finish()
    };
  }
};
function createBaseMsgChangeNumberResponse(): MsgChangeNumberResponse {
  return {};
}
export const MsgChangeNumberResponse = {
  typeUrl: "/lottery.lottery.MsgChangeNumberResponse",
  encode(_: MsgChangeNumberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeNumberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChangeNumberResponse>): MsgChangeNumberResponse {
    const message = createBaseMsgChangeNumberResponse();
    return message;
  },
  fromAmino(_: MsgChangeNumberResponseAmino): MsgChangeNumberResponse {
    const message = createBaseMsgChangeNumberResponse();
    return message;
  },
  toAmino(_: MsgChangeNumberResponse): MsgChangeNumberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeNumberResponseAminoMsg): MsgChangeNumberResponse {
    return MsgChangeNumberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeNumberResponseProtoMsg): MsgChangeNumberResponse {
    return MsgChangeNumberResponse.decode(message.value);
  },
  toProto(message: MsgChangeNumberResponse): Uint8Array {
    return MsgChangeNumberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeNumberResponse): MsgChangeNumberResponseProtoMsg {
    return {
      typeUrl: "/lottery.lottery.MsgChangeNumberResponse",
      value: MsgChangeNumberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePrivateLottery(): MsgCreatePrivateLottery {
  return {
    creator: "",
    totalPrize: "",
    pricePerentages: "",
    winnerRequirements: "",
    maxNumber: BigInt(0),
    entryFee: ""
  };
}
export const MsgCreatePrivateLottery = {
  typeUrl: "/lottery.lottery.MsgCreatePrivateLottery",
  encode(message: MsgCreatePrivateLottery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.totalPrize !== "") {
      writer.uint32(18).string(message.totalPrize);
    }
    if (message.pricePerentages !== "") {
      writer.uint32(26).string(message.pricePerentages);
    }
    if (message.winnerRequirements !== "") {
      writer.uint32(34).string(message.winnerRequirements);
    }
    if (message.maxNumber !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxNumber);
    }
    if (message.entryFee !== "") {
      writer.uint32(50).string(message.entryFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePrivateLottery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePrivateLottery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.totalPrize = reader.string();
          break;
        case 3:
          message.pricePerentages = reader.string();
          break;
        case 4:
          message.winnerRequirements = reader.string();
          break;
        case 5:
          message.maxNumber = reader.uint64();
          break;
        case 6:
          message.entryFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreatePrivateLottery>): MsgCreatePrivateLottery {
    const message = createBaseMsgCreatePrivateLottery();
    message.creator = object.creator ?? "";
    message.totalPrize = object.totalPrize ?? "";
    message.pricePerentages = object.pricePerentages ?? "";
    message.winnerRequirements = object.winnerRequirements ?? "";
    message.maxNumber = object.maxNumber !== undefined && object.maxNumber !== null ? BigInt(object.maxNumber.toString()) : BigInt(0);
    message.entryFee = object.entryFee ?? "";
    return message;
  },
  fromAmino(object: MsgCreatePrivateLotteryAmino): MsgCreatePrivateLottery {
    const message = createBaseMsgCreatePrivateLottery();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.totalPrize !== undefined && object.totalPrize !== null) {
      message.totalPrize = object.totalPrize;
    }
    if (object.pricePerentages !== undefined && object.pricePerentages !== null) {
      message.pricePerentages = object.pricePerentages;
    }
    if (object.winnerRequirements !== undefined && object.winnerRequirements !== null) {
      message.winnerRequirements = object.winnerRequirements;
    }
    if (object.maxNumber !== undefined && object.maxNumber !== null) {
      message.maxNumber = BigInt(object.maxNumber);
    }
    if (object.entryFee !== undefined && object.entryFee !== null) {
      message.entryFee = object.entryFee;
    }
    return message;
  },
  toAmino(message: MsgCreatePrivateLottery): MsgCreatePrivateLotteryAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.totalPrize = message.totalPrize;
    obj.pricePerentages = message.pricePerentages;
    obj.winnerRequirements = message.winnerRequirements;
    obj.maxNumber = message.maxNumber ? message.maxNumber.toString() : undefined;
    obj.entryFee = message.entryFee;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePrivateLotteryAminoMsg): MsgCreatePrivateLottery {
    return MsgCreatePrivateLottery.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePrivateLotteryProtoMsg): MsgCreatePrivateLottery {
    return MsgCreatePrivateLottery.decode(message.value);
  },
  toProto(message: MsgCreatePrivateLottery): Uint8Array {
    return MsgCreatePrivateLottery.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePrivateLottery): MsgCreatePrivateLotteryProtoMsg {
    return {
      typeUrl: "/lottery.lottery.MsgCreatePrivateLottery",
      value: MsgCreatePrivateLottery.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePrivateLotteryResponse(): MsgCreatePrivateLotteryResponse {
  return {
    id: ""
  };
}
export const MsgCreatePrivateLotteryResponse = {
  typeUrl: "/lottery.lottery.MsgCreatePrivateLotteryResponse",
  encode(message: MsgCreatePrivateLotteryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePrivateLotteryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePrivateLotteryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreatePrivateLotteryResponse>): MsgCreatePrivateLotteryResponse {
    const message = createBaseMsgCreatePrivateLotteryResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreatePrivateLotteryResponseAmino): MsgCreatePrivateLotteryResponse {
    const message = createBaseMsgCreatePrivateLotteryResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreatePrivateLotteryResponse): MsgCreatePrivateLotteryResponseAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePrivateLotteryResponseAminoMsg): MsgCreatePrivateLotteryResponse {
    return MsgCreatePrivateLotteryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePrivateLotteryResponseProtoMsg): MsgCreatePrivateLotteryResponse {
    return MsgCreatePrivateLotteryResponse.decode(message.value);
  },
  toProto(message: MsgCreatePrivateLotteryResponse): Uint8Array {
    return MsgCreatePrivateLotteryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePrivateLotteryResponse): MsgCreatePrivateLotteryResponseProtoMsg {
    return {
      typeUrl: "/lottery.lottery.MsgCreatePrivateLotteryResponse",
      value: MsgCreatePrivateLotteryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChooseNumberPrivate(): MsgChooseNumberPrivate {
  return {
    creator: "",
    lottery: "",
    number: ""
  };
}
export const MsgChooseNumberPrivate = {
  typeUrl: "/lottery.lottery.MsgChooseNumberPrivate",
  encode(message: MsgChooseNumberPrivate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.lottery !== "") {
      writer.uint32(18).string(message.lottery);
    }
    if (message.number !== "") {
      writer.uint32(26).string(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChooseNumberPrivate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChooseNumberPrivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.lottery = reader.string();
          break;
        case 3:
          message.number = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChooseNumberPrivate>): MsgChooseNumberPrivate {
    const message = createBaseMsgChooseNumberPrivate();
    message.creator = object.creator ?? "";
    message.lottery = object.lottery ?? "";
    message.number = object.number ?? "";
    return message;
  },
  fromAmino(object: MsgChooseNumberPrivateAmino): MsgChooseNumberPrivate {
    const message = createBaseMsgChooseNumberPrivate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.lottery !== undefined && object.lottery !== null) {
      message.lottery = object.lottery;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    return message;
  },
  toAmino(message: MsgChooseNumberPrivate): MsgChooseNumberPrivateAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.lottery = message.lottery;
    obj.number = message.number;
    return obj;
  },
  fromAminoMsg(object: MsgChooseNumberPrivateAminoMsg): MsgChooseNumberPrivate {
    return MsgChooseNumberPrivate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChooseNumberPrivateProtoMsg): MsgChooseNumberPrivate {
    return MsgChooseNumberPrivate.decode(message.value);
  },
  toProto(message: MsgChooseNumberPrivate): Uint8Array {
    return MsgChooseNumberPrivate.encode(message).finish();
  },
  toProtoMsg(message: MsgChooseNumberPrivate): MsgChooseNumberPrivateProtoMsg {
    return {
      typeUrl: "/lottery.lottery.MsgChooseNumberPrivate",
      value: MsgChooseNumberPrivate.encode(message).finish()
    };
  }
};
function createBaseMsgChooseNumberPrivateResponse(): MsgChooseNumberPrivateResponse {
  return {};
}
export const MsgChooseNumberPrivateResponse = {
  typeUrl: "/lottery.lottery.MsgChooseNumberPrivateResponse",
  encode(_: MsgChooseNumberPrivateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChooseNumberPrivateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChooseNumberPrivateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgChooseNumberPrivateResponse>): MsgChooseNumberPrivateResponse {
    const message = createBaseMsgChooseNumberPrivateResponse();
    return message;
  },
  fromAmino(_: MsgChooseNumberPrivateResponseAmino): MsgChooseNumberPrivateResponse {
    const message = createBaseMsgChooseNumberPrivateResponse();
    return message;
  },
  toAmino(_: MsgChooseNumberPrivateResponse): MsgChooseNumberPrivateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChooseNumberPrivateResponseAminoMsg): MsgChooseNumberPrivateResponse {
    return MsgChooseNumberPrivateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChooseNumberPrivateResponseProtoMsg): MsgChooseNumberPrivateResponse {
    return MsgChooseNumberPrivateResponse.decode(message.value);
  },
  toProto(message: MsgChooseNumberPrivateResponse): Uint8Array {
    return MsgChooseNumberPrivateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChooseNumberPrivateResponse): MsgChooseNumberPrivateResponseProtoMsg {
    return {
      typeUrl: "/lottery.lottery.MsgChooseNumberPrivateResponse",
      value: MsgChooseNumberPrivateResponse.encode(message).finish()
    };
  }
};