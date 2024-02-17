import { BinaryReader, BinaryWriter } from "../../binary";
export interface ServerResponse {
  roundId: string;
  randomNumber: bigint;
  token: string;
}
export interface ServerResponseProtoMsg {
  typeUrl: "/lottery.lottery.ServerResponse";
  value: Uint8Array;
}
export interface ServerResponseAmino {
  roundId?: string;
  randomNumber?: string;
  token?: string;
}
export interface ServerResponseAminoMsg {
  type: "/lottery.lottery.ServerResponse";
  value: ServerResponseAmino;
}
export interface ServerResponseSDKType {
  roundId: string;
  randomNumber: bigint;
  token: string;
}
function createBaseServerResponse(): ServerResponse {
  return {
    roundId: "",
    randomNumber: BigInt(0),
    token: ""
  };
}
export const ServerResponse = {
  typeUrl: "/lottery.lottery.ServerResponse",
  encode(message: ServerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roundId !== "") {
      writer.uint32(10).string(message.roundId);
    }
    if (message.randomNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.randomNumber);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roundId = reader.string();
          break;
        case 2:
          message.randomNumber = reader.uint64();
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServerResponse>): ServerResponse {
    const message = createBaseServerResponse();
    message.roundId = object.roundId ?? "";
    message.randomNumber = object.randomNumber !== undefined && object.randomNumber !== null ? BigInt(object.randomNumber.toString()) : BigInt(0);
    message.token = object.token ?? "";
    return message;
  },
  fromAmino(object: ServerResponseAmino): ServerResponse {
    const message = createBaseServerResponse();
    if (object.roundId !== undefined && object.roundId !== null) {
      message.roundId = object.roundId;
    }
    if (object.randomNumber !== undefined && object.randomNumber !== null) {
      message.randomNumber = BigInt(object.randomNumber);
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: ServerResponse): ServerResponseAmino {
    const obj: any = {};
    obj.roundId = message.roundId;
    obj.randomNumber = message.randomNumber ? message.randomNumber.toString() : undefined;
    obj.token = message.token;
    return obj;
  },
  fromAminoMsg(object: ServerResponseAminoMsg): ServerResponse {
    return ServerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ServerResponseProtoMsg): ServerResponse {
    return ServerResponse.decode(message.value);
  },
  toProto(message: ServerResponse): Uint8Array {
    return ServerResponse.encode(message).finish();
  },
  toProtoMsg(message: ServerResponse): ServerResponseProtoMsg {
    return {
      typeUrl: "/lottery.lottery.ServerResponse",
      value: ServerResponse.encode(message).finish()
    };
  }
};