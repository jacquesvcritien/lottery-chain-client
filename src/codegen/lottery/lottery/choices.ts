import { BinaryReader, BinaryWriter } from "../../binary";
export interface StakingLotteryParticipants_ParticipantsEntry {
  key: string;
  value: bigint;
}
export interface StakingLotteryParticipants_ParticipantsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface StakingLotteryParticipants_ParticipantsEntryAmino {
  key?: string;
  value?: string;
}
export interface StakingLotteryParticipants_ParticipantsEntryAminoMsg {
  type: string;
  value: StakingLotteryParticipants_ParticipantsEntryAmino;
}
export interface StakingLotteryParticipants_ParticipantsEntrySDKType {
  key: string;
  value: bigint;
}
export interface StakingLotteryParticipants {
  participants: {
    [key: string]: bigint;
  };
}
export interface StakingLotteryParticipantsProtoMsg {
  typeUrl: "/lottery.lottery.StakingLotteryParticipants";
  value: Uint8Array;
}
export interface StakingLotteryParticipantsAmino {
  participants?: {
    [key: string]: string;
  };
}
export interface StakingLotteryParticipantsAminoMsg {
  type: "/lottery.lottery.StakingLotteryParticipants";
  value: StakingLotteryParticipantsAmino;
}
export interface StakingLotteryParticipantsSDKType {
  participants: {
    [key: string]: bigint;
  };
}
export interface PrivateLotteryParticipants_ParticipantsEntry {
  key: string;
  value: boolean;
}
export interface PrivateLotteryParticipants_ParticipantsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface PrivateLotteryParticipants_ParticipantsEntryAmino {
  key?: string;
  value?: boolean;
}
export interface PrivateLotteryParticipants_ParticipantsEntryAminoMsg {
  type: string;
  value: PrivateLotteryParticipants_ParticipantsEntryAmino;
}
export interface PrivateLotteryParticipants_ParticipantsEntrySDKType {
  key: string;
  value: boolean;
}
export interface PrivateLotteryParticipants {
  participants: {
    [key: string]: boolean;
  };
}
export interface PrivateLotteryParticipantsProtoMsg {
  typeUrl: "/lottery.lottery.PrivateLotteryParticipants";
  value: Uint8Array;
}
export interface PrivateLotteryParticipantsAmino {
  participants?: {
    [key: string]: boolean;
  };
}
export interface PrivateLotteryParticipantsAminoMsg {
  type: "/lottery.lottery.PrivateLotteryParticipants";
  value: PrivateLotteryParticipantsAmino;
}
export interface PrivateLotteryParticipantsSDKType {
  participants: {
    [key: string]: boolean;
  };
}
export interface PrivateLotteryChoices_ChoicesEntry {
  key: string;
  value?: PrivateLotteryParticipants;
}
export interface PrivateLotteryChoices_ChoicesEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface PrivateLotteryChoices_ChoicesEntryAmino {
  key?: string;
  value?: PrivateLotteryParticipantsAmino;
}
export interface PrivateLotteryChoices_ChoicesEntryAminoMsg {
  type: string;
  value: PrivateLotteryChoices_ChoicesEntryAmino;
}
export interface PrivateLotteryChoices_ChoicesEntrySDKType {
  key: string;
  value?: PrivateLotteryParticipantsSDKType;
}
export interface PrivateLotteryChoices {
  choices: {
    [key: string]: PrivateLotteryParticipants;
  };
}
export interface PrivateLotteryChoicesProtoMsg {
  typeUrl: "/lottery.lottery.PrivateLotteryChoices";
  value: Uint8Array;
}
export interface PrivateLotteryChoicesAmino {
  choices?: {
    [key: string]: PrivateLotteryParticipantsAmino;
  };
}
export interface PrivateLotteryChoicesAminoMsg {
  type: "/lottery.lottery.PrivateLotteryChoices";
  value: PrivateLotteryChoicesAmino;
}
export interface PrivateLotteryChoicesSDKType {
  choices: {
    [key: string]: PrivateLotteryParticipantsSDKType;
  };
}
function createBaseStakingLotteryParticipants_ParticipantsEntry(): StakingLotteryParticipants_ParticipantsEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
export const StakingLotteryParticipants_ParticipantsEntry = {
  encode(message: StakingLotteryParticipants_ParticipantsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingLotteryParticipants_ParticipantsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingLotteryParticipants_ParticipantsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingLotteryParticipants_ParticipantsEntry>): StakingLotteryParticipants_ParticipantsEntry {
    const message = createBaseStakingLotteryParticipants_ParticipantsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StakingLotteryParticipants_ParticipantsEntryAmino): StakingLotteryParticipants_ParticipantsEntry {
    const message = createBaseStakingLotteryParticipants_ParticipantsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: StakingLotteryParticipants_ParticipantsEntry): StakingLotteryParticipants_ParticipantsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StakingLotteryParticipants_ParticipantsEntryAminoMsg): StakingLotteryParticipants_ParticipantsEntry {
    return StakingLotteryParticipants_ParticipantsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingLotteryParticipants_ParticipantsEntryProtoMsg): StakingLotteryParticipants_ParticipantsEntry {
    return StakingLotteryParticipants_ParticipantsEntry.decode(message.value);
  },
  toProto(message: StakingLotteryParticipants_ParticipantsEntry): Uint8Array {
    return StakingLotteryParticipants_ParticipantsEntry.encode(message).finish();
  }
};
function createBaseStakingLotteryParticipants(): StakingLotteryParticipants {
  return {
    participants: {}
  };
}
export const StakingLotteryParticipants = {
  typeUrl: "/lottery.lottery.StakingLotteryParticipants",
  encode(message: StakingLotteryParticipants, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.participants).forEach(([key, value]) => {
      StakingLotteryParticipants_ParticipantsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(8).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingLotteryParticipants {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingLotteryParticipants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = StakingLotteryParticipants_ParticipantsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.participants[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingLotteryParticipants>): StakingLotteryParticipants {
    const message = createBaseStakingLotteryParticipants();
    message.participants = Object.entries(object.participants ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: StakingLotteryParticipantsAmino): StakingLotteryParticipants {
    const message = createBaseStakingLotteryParticipants();
    message.participants = Object.entries(object.participants ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: StakingLotteryParticipants): StakingLotteryParticipantsAmino {
    const obj: any = {};
    obj.participants = {};
    if (message.participants) {
      Object.entries(message.participants).forEach(([k, v]) => {
        obj.participants[k] = v.toString();
      });
    }
    return obj;
  },
  fromAminoMsg(object: StakingLotteryParticipantsAminoMsg): StakingLotteryParticipants {
    return StakingLotteryParticipants.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingLotteryParticipantsProtoMsg): StakingLotteryParticipants {
    return StakingLotteryParticipants.decode(message.value);
  },
  toProto(message: StakingLotteryParticipants): Uint8Array {
    return StakingLotteryParticipants.encode(message).finish();
  },
  toProtoMsg(message: StakingLotteryParticipants): StakingLotteryParticipantsProtoMsg {
    return {
      typeUrl: "/lottery.lottery.StakingLotteryParticipants",
      value: StakingLotteryParticipants.encode(message).finish()
    };
  }
};
function createBasePrivateLotteryParticipants_ParticipantsEntry(): PrivateLotteryParticipants_ParticipantsEntry {
  return {
    key: "",
    value: false
  };
}
export const PrivateLotteryParticipants_ParticipantsEntry = {
  encode(message: PrivateLotteryParticipants_ParticipantsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivateLotteryParticipants_ParticipantsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateLotteryParticipants_ParticipantsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrivateLotteryParticipants_ParticipantsEntry>): PrivateLotteryParticipants_ParticipantsEntry {
    const message = createBasePrivateLotteryParticipants_ParticipantsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
  fromAmino(object: PrivateLotteryParticipants_ParticipantsEntryAmino): PrivateLotteryParticipants_ParticipantsEntry {
    const message = createBasePrivateLotteryParticipants_ParticipantsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: PrivateLotteryParticipants_ParticipantsEntry): PrivateLotteryParticipants_ParticipantsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: PrivateLotteryParticipants_ParticipantsEntryAminoMsg): PrivateLotteryParticipants_ParticipantsEntry {
    return PrivateLotteryParticipants_ParticipantsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PrivateLotteryParticipants_ParticipantsEntryProtoMsg): PrivateLotteryParticipants_ParticipantsEntry {
    return PrivateLotteryParticipants_ParticipantsEntry.decode(message.value);
  },
  toProto(message: PrivateLotteryParticipants_ParticipantsEntry): Uint8Array {
    return PrivateLotteryParticipants_ParticipantsEntry.encode(message).finish();
  }
};
function createBasePrivateLotteryParticipants(): PrivateLotteryParticipants {
  return {
    participants: {}
  };
}
export const PrivateLotteryParticipants = {
  typeUrl: "/lottery.lottery.PrivateLotteryParticipants",
  encode(message: PrivateLotteryParticipants, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.participants).forEach(([key, value]) => {
      PrivateLotteryParticipants_ParticipantsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(8).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivateLotteryParticipants {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateLotteryParticipants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = PrivateLotteryParticipants_ParticipantsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.participants[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrivateLotteryParticipants>): PrivateLotteryParticipants {
    const message = createBasePrivateLotteryParticipants();
    message.participants = Object.entries(object.participants ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: PrivateLotteryParticipantsAmino): PrivateLotteryParticipants {
    const message = createBasePrivateLotteryParticipants();
    message.participants = Object.entries(object.participants ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: PrivateLotteryParticipants): PrivateLotteryParticipantsAmino {
    const obj: any = {};
    obj.participants = {};
    if (message.participants) {
      Object.entries(message.participants).forEach(([k, v]) => {
        obj.participants[k] = bool.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: PrivateLotteryParticipantsAminoMsg): PrivateLotteryParticipants {
    return PrivateLotteryParticipants.fromAmino(object.value);
  },
  fromProtoMsg(message: PrivateLotteryParticipantsProtoMsg): PrivateLotteryParticipants {
    return PrivateLotteryParticipants.decode(message.value);
  },
  toProto(message: PrivateLotteryParticipants): Uint8Array {
    return PrivateLotteryParticipants.encode(message).finish();
  },
  toProtoMsg(message: PrivateLotteryParticipants): PrivateLotteryParticipantsProtoMsg {
    return {
      typeUrl: "/lottery.lottery.PrivateLotteryParticipants",
      value: PrivateLotteryParticipants.encode(message).finish()
    };
  }
};
function createBasePrivateLotteryChoices_ChoicesEntry(): PrivateLotteryChoices_ChoicesEntry {
  return {
    key: "",
    value: undefined
  };
}
export const PrivateLotteryChoices_ChoicesEntry = {
  encode(message: PrivateLotteryChoices_ChoicesEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PrivateLotteryParticipants.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivateLotteryChoices_ChoicesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateLotteryChoices_ChoicesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PrivateLotteryParticipants.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrivateLotteryChoices_ChoicesEntry>): PrivateLotteryChoices_ChoicesEntry {
    const message = createBasePrivateLotteryChoices_ChoicesEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? PrivateLotteryParticipants.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: PrivateLotteryChoices_ChoicesEntryAmino): PrivateLotteryChoices_ChoicesEntry {
    const message = createBasePrivateLotteryChoices_ChoicesEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = PrivateLotteryParticipants.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: PrivateLotteryChoices_ChoicesEntry): PrivateLotteryChoices_ChoicesEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? PrivateLotteryParticipants.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: PrivateLotteryChoices_ChoicesEntryAminoMsg): PrivateLotteryChoices_ChoicesEntry {
    return PrivateLotteryChoices_ChoicesEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PrivateLotteryChoices_ChoicesEntryProtoMsg): PrivateLotteryChoices_ChoicesEntry {
    return PrivateLotteryChoices_ChoicesEntry.decode(message.value);
  },
  toProto(message: PrivateLotteryChoices_ChoicesEntry): Uint8Array {
    return PrivateLotteryChoices_ChoicesEntry.encode(message).finish();
  }
};
function createBasePrivateLotteryChoices(): PrivateLotteryChoices {
  return {
    choices: {}
  };
}
export const PrivateLotteryChoices = {
  typeUrl: "/lottery.lottery.PrivateLotteryChoices",
  encode(message: PrivateLotteryChoices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.choices).forEach(([key, value]) => {
      PrivateLotteryChoices_ChoicesEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivateLotteryChoices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateLotteryChoices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = PrivateLotteryChoices_ChoicesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.choices[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrivateLotteryChoices>): PrivateLotteryChoices {
    const message = createBasePrivateLotteryChoices();
    message.choices = Object.entries(object.choices ?? {}).reduce<{
      [key: string]: PrivateLotteryParticipants;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = PrivateLotteryParticipants.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: PrivateLotteryChoicesAmino): PrivateLotteryChoices {
    const message = createBasePrivateLotteryChoices();
    message.choices = Object.entries(object.choices ?? {}).reduce<{
      [key: string]: PrivateLotteryParticipants;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = PrivateLotteryParticipants.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: PrivateLotteryChoices): PrivateLotteryChoicesAmino {
    const obj: any = {};
    obj.choices = {};
    if (message.choices) {
      Object.entries(message.choices).forEach(([k, v]) => {
        obj.choices[k] = PrivateLotteryParticipants.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: PrivateLotteryChoicesAminoMsg): PrivateLotteryChoices {
    return PrivateLotteryChoices.fromAmino(object.value);
  },
  fromProtoMsg(message: PrivateLotteryChoicesProtoMsg): PrivateLotteryChoices {
    return PrivateLotteryChoices.decode(message.value);
  },
  toProto(message: PrivateLotteryChoices): Uint8Array {
    return PrivateLotteryChoices.encode(message).finish();
  },
  toProtoMsg(message: PrivateLotteryChoices): PrivateLotteryChoicesProtoMsg {
    return {
      typeUrl: "/lottery.lottery.PrivateLotteryChoices",
      value: PrivateLotteryChoices.encode(message).finish()
    };
  }
};