import { BinaryReader, BinaryWriter } from "../../binary";
export interface PrivateLottery {
  id: string;
  totalPrize: string;
  pricePercentages: string;
  winnerRequirements: string;
  maxNumber: number;
  correctNumbers: number;
  creator: string;
  createdHeight: bigint;
  prizesPaid: string;
  entryFee: string;
}
export interface PrivateLotteryProtoMsg {
  typeUrl: "/lottery.lottery.PrivateLottery";
  value: Uint8Array;
}
export interface PrivateLotteryAmino {
  id?: string;
  totalPrize?: string;
  pricePercentages?: string;
  winnerRequirements?: string;
  maxNumber?: number;
  correctNumbers?: number;
  creator?: string;
  createdHeight?: string;
  prizesPaid?: string;
  entryFee?: string;
}
export interface PrivateLotteryAminoMsg {
  type: "/lottery.lottery.PrivateLottery";
  value: PrivateLotteryAmino;
}
export interface PrivateLotterySDKType {
  id: string;
  totalPrize: string;
  pricePercentages: string;
  winnerRequirements: string;
  maxNumber: number;
  correctNumbers: number;
  creator: string;
  createdHeight: bigint;
  prizesPaid: string;
  entryFee: string;
}
export interface NewPrivateLotteryEvent {
  id: string;
}
export interface NewPrivateLotteryEventProtoMsg {
  typeUrl: "/lottery.lottery.NewPrivateLotteryEvent";
  value: Uint8Array;
}
export interface NewPrivateLotteryEventAmino {
  id?: string;
}
export interface NewPrivateLotteryEventAminoMsg {
  type: "/lottery.lottery.NewPrivateLotteryEvent";
  value: NewPrivateLotteryEventAmino;
}
export interface NewPrivateLotteryEventSDKType {
  id: string;
}
function createBasePrivateLottery(): PrivateLottery {
  return {
    id: "",
    totalPrize: "",
    pricePercentages: "",
    winnerRequirements: "",
    maxNumber: 0,
    correctNumbers: 0,
    creator: "",
    createdHeight: BigInt(0),
    prizesPaid: "",
    entryFee: ""
  };
}
export const PrivateLottery = {
  typeUrl: "/lottery.lottery.PrivateLottery",
  encode(message: PrivateLottery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.totalPrize !== "") {
      writer.uint32(18).string(message.totalPrize);
    }
    if (message.pricePercentages !== "") {
      writer.uint32(26).string(message.pricePercentages);
    }
    if (message.winnerRequirements !== "") {
      writer.uint32(34).string(message.winnerRequirements);
    }
    if (message.maxNumber !== 0) {
      writer.uint32(40).uint32(message.maxNumber);
    }
    if (message.correctNumbers !== 0) {
      writer.uint32(48).uint32(message.correctNumbers);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    if (message.createdHeight !== BigInt(0)) {
      writer.uint32(64).uint64(message.createdHeight);
    }
    if (message.prizesPaid !== "") {
      writer.uint32(74).string(message.prizesPaid);
    }
    if (message.entryFee !== "") {
      writer.uint32(82).string(message.entryFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivateLottery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateLottery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.totalPrize = reader.string();
          break;
        case 3:
          message.pricePercentages = reader.string();
          break;
        case 4:
          message.winnerRequirements = reader.string();
          break;
        case 5:
          message.maxNumber = reader.uint32();
          break;
        case 6:
          message.correctNumbers = reader.uint32();
          break;
        case 7:
          message.creator = reader.string();
          break;
        case 8:
          message.createdHeight = reader.uint64();
          break;
        case 9:
          message.prizesPaid = reader.string();
          break;
        case 10:
          message.entryFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrivateLottery>): PrivateLottery {
    const message = createBasePrivateLottery();
    message.id = object.id ?? "";
    message.totalPrize = object.totalPrize ?? "";
    message.pricePercentages = object.pricePercentages ?? "";
    message.winnerRequirements = object.winnerRequirements ?? "";
    message.maxNumber = object.maxNumber ?? 0;
    message.correctNumbers = object.correctNumbers ?? 0;
    message.creator = object.creator ?? "";
    message.createdHeight = object.createdHeight !== undefined && object.createdHeight !== null ? BigInt(object.createdHeight.toString()) : BigInt(0);
    message.prizesPaid = object.prizesPaid ?? "";
    message.entryFee = object.entryFee ?? "";
    return message;
  },
  fromAmino(object: PrivateLotteryAmino): PrivateLottery {
    const message = createBasePrivateLottery();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.totalPrize !== undefined && object.totalPrize !== null) {
      message.totalPrize = object.totalPrize;
    }
    if (object.pricePercentages !== undefined && object.pricePercentages !== null) {
      message.pricePercentages = object.pricePercentages;
    }
    if (object.winnerRequirements !== undefined && object.winnerRequirements !== null) {
      message.winnerRequirements = object.winnerRequirements;
    }
    if (object.maxNumber !== undefined && object.maxNumber !== null) {
      message.maxNumber = object.maxNumber;
    }
    if (object.correctNumbers !== undefined && object.correctNumbers !== null) {
      message.correctNumbers = object.correctNumbers;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.createdHeight !== undefined && object.createdHeight !== null) {
      message.createdHeight = BigInt(object.createdHeight);
    }
    if (object.prizesPaid !== undefined && object.prizesPaid !== null) {
      message.prizesPaid = object.prizesPaid;
    }
    if (object.entryFee !== undefined && object.entryFee !== null) {
      message.entryFee = object.entryFee;
    }
    return message;
  },
  toAmino(message: PrivateLottery): PrivateLotteryAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.totalPrize = message.totalPrize;
    obj.pricePercentages = message.pricePercentages;
    obj.winnerRequirements = message.winnerRequirements;
    obj.maxNumber = message.maxNumber;
    obj.correctNumbers = message.correctNumbers;
    obj.creator = message.creator;
    obj.createdHeight = message.createdHeight ? message.createdHeight.toString() : undefined;
    obj.prizesPaid = message.prizesPaid;
    obj.entryFee = message.entryFee;
    return obj;
  },
  fromAminoMsg(object: PrivateLotteryAminoMsg): PrivateLottery {
    return PrivateLottery.fromAmino(object.value);
  },
  fromProtoMsg(message: PrivateLotteryProtoMsg): PrivateLottery {
    return PrivateLottery.decode(message.value);
  },
  toProto(message: PrivateLottery): Uint8Array {
    return PrivateLottery.encode(message).finish();
  },
  toProtoMsg(message: PrivateLottery): PrivateLotteryProtoMsg {
    return {
      typeUrl: "/lottery.lottery.PrivateLottery",
      value: PrivateLottery.encode(message).finish()
    };
  }
};
function createBaseNewPrivateLotteryEvent(): NewPrivateLotteryEvent {
  return {
    id: ""
  };
}
export const NewPrivateLotteryEvent = {
  typeUrl: "/lottery.lottery.NewPrivateLotteryEvent",
  encode(message: NewPrivateLotteryEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NewPrivateLotteryEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewPrivateLotteryEvent();
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
  fromPartial(object: Partial<NewPrivateLotteryEvent>): NewPrivateLotteryEvent {
    const message = createBaseNewPrivateLotteryEvent();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: NewPrivateLotteryEventAmino): NewPrivateLotteryEvent {
    const message = createBaseNewPrivateLotteryEvent();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: NewPrivateLotteryEvent): NewPrivateLotteryEventAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: NewPrivateLotteryEventAminoMsg): NewPrivateLotteryEvent {
    return NewPrivateLotteryEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: NewPrivateLotteryEventProtoMsg): NewPrivateLotteryEvent {
    return NewPrivateLotteryEvent.decode(message.value);
  },
  toProto(message: NewPrivateLotteryEvent): Uint8Array {
    return NewPrivateLotteryEvent.encode(message).finish();
  },
  toProtoMsg(message: NewPrivateLotteryEvent): NewPrivateLotteryEventProtoMsg {
    return {
      typeUrl: "/lottery.lottery.NewPrivateLotteryEvent",
      value: NewPrivateLotteryEvent.encode(message).finish()
    };
  }
};