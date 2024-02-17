import { BinaryReader, BinaryWriter } from "../../binary";
export interface StakingLotteryOutcome {
  roundId: bigint;
  number: bigint;
}
export interface StakingLotteryOutcomeProtoMsg {
  typeUrl: "/lottery.lottery.StakingLotteryOutcome";
  value: Uint8Array;
}
export interface StakingLotteryOutcomeAmino {
  roundId?: string;
  number?: string;
}
export interface StakingLotteryOutcomeAminoMsg {
  type: "/lottery.lottery.StakingLotteryOutcome";
  value: StakingLotteryOutcomeAmino;
}
export interface StakingLotteryOutcomeSDKType {
  roundId: bigint;
  number: bigint;
}
function createBaseStakingLotteryOutcome(): StakingLotteryOutcome {
  return {
    roundId: BigInt(0),
    number: BigInt(0)
  };
}
export const StakingLotteryOutcome = {
  typeUrl: "/lottery.lottery.StakingLotteryOutcome",
  encode(message: StakingLotteryOutcome, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roundId !== BigInt(0)) {
      writer.uint32(8).uint64(message.roundId);
    }
    if (message.number !== BigInt(0)) {
      writer.uint32(16).uint64(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingLotteryOutcome {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingLotteryOutcome();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roundId = reader.uint64();
          break;
        case 2:
          message.number = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingLotteryOutcome>): StakingLotteryOutcome {
    const message = createBaseStakingLotteryOutcome();
    message.roundId = object.roundId !== undefined && object.roundId !== null ? BigInt(object.roundId.toString()) : BigInt(0);
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StakingLotteryOutcomeAmino): StakingLotteryOutcome {
    const message = createBaseStakingLotteryOutcome();
    if (object.roundId !== undefined && object.roundId !== null) {
      message.roundId = BigInt(object.roundId);
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    return message;
  },
  toAmino(message: StakingLotteryOutcome): StakingLotteryOutcomeAmino {
    const obj: any = {};
    obj.roundId = message.roundId ? message.roundId.toString() : undefined;
    obj.number = message.number ? message.number.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StakingLotteryOutcomeAminoMsg): StakingLotteryOutcome {
    return StakingLotteryOutcome.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingLotteryOutcomeProtoMsg): StakingLotteryOutcome {
    return StakingLotteryOutcome.decode(message.value);
  },
  toProto(message: StakingLotteryOutcome): Uint8Array {
    return StakingLotteryOutcome.encode(message).finish();
  },
  toProtoMsg(message: StakingLotteryOutcome): StakingLotteryOutcomeProtoMsg {
    return {
      typeUrl: "/lottery.lottery.StakingLotteryOutcome",
      value: StakingLotteryOutcome.encode(message).finish()
    };
  }
};