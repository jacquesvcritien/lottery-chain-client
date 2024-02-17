import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lottery.lottery.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lottery.lottery.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lottery.lottery.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lottery.lottery.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryShowNumberRequest {
  address: string;
}
export interface QueryShowNumberRequestProtoMsg {
  typeUrl: "/lottery.lottery.QueryShowNumberRequest";
  value: Uint8Array;
}
export interface QueryShowNumberRequestAmino {
  address?: string;
}
export interface QueryShowNumberRequestAminoMsg {
  type: "/lottery.lottery.QueryShowNumberRequest";
  value: QueryShowNumberRequestAmino;
}
export interface QueryShowNumberRequestSDKType {
  address: string;
}
export interface QueryShowNumberResponse {
  number: string;
}
export interface QueryShowNumberResponseProtoMsg {
  typeUrl: "/lottery.lottery.QueryShowNumberResponse";
  value: Uint8Array;
}
export interface QueryShowNumberResponseAmino {
  number?: string;
}
export interface QueryShowNumberResponseAminoMsg {
  type: "/lottery.lottery.QueryShowNumberResponse";
  value: QueryShowNumberResponseAmino;
}
export interface QueryShowNumberResponseSDKType {
  number: string;
}
export interface QueryShowPrivateLotteryNumberRequest {
  lottery: string;
  address: string;
}
export interface QueryShowPrivateLotteryNumberRequestProtoMsg {
  typeUrl: "/lottery.lottery.QueryShowPrivateLotteryNumberRequest";
  value: Uint8Array;
}
export interface QueryShowPrivateLotteryNumberRequestAmino {
  lottery?: string;
  address?: string;
}
export interface QueryShowPrivateLotteryNumberRequestAminoMsg {
  type: "/lottery.lottery.QueryShowPrivateLotteryNumberRequest";
  value: QueryShowPrivateLotteryNumberRequestAmino;
}
export interface QueryShowPrivateLotteryNumberRequestSDKType {
  lottery: string;
  address: string;
}
export interface QueryShowPrivateLotteryNumberResponse {
  number: string;
}
export interface QueryShowPrivateLotteryNumberResponseProtoMsg {
  typeUrl: "/lottery.lottery.QueryShowPrivateLotteryNumberResponse";
  value: Uint8Array;
}
export interface QueryShowPrivateLotteryNumberResponseAmino {
  number?: string;
}
export interface QueryShowPrivateLotteryNumberResponseAminoMsg {
  type: "/lottery.lottery.QueryShowPrivateLotteryNumberResponse";
  value: QueryShowPrivateLotteryNumberResponseAmino;
}
export interface QueryShowPrivateLotteryNumberResponseSDKType {
  number: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lottery.lottery.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lottery.lottery.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lottery.lottery.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lottery.lottery.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowNumberRequest(): QueryShowNumberRequest {
  return {
    address: ""
  };
}
export const QueryShowNumberRequest = {
  typeUrl: "/lottery.lottery.QueryShowNumberRequest",
  encode(message: QueryShowNumberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowNumberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowNumberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowNumberRequest>): QueryShowNumberRequest {
    const message = createBaseQueryShowNumberRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryShowNumberRequestAmino): QueryShowNumberRequest {
    const message = createBaseQueryShowNumberRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryShowNumberRequest): QueryShowNumberRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryShowNumberRequestAminoMsg): QueryShowNumberRequest {
    return QueryShowNumberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowNumberRequestProtoMsg): QueryShowNumberRequest {
    return QueryShowNumberRequest.decode(message.value);
  },
  toProto(message: QueryShowNumberRequest): Uint8Array {
    return QueryShowNumberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowNumberRequest): QueryShowNumberRequestProtoMsg {
    return {
      typeUrl: "/lottery.lottery.QueryShowNumberRequest",
      value: QueryShowNumberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowNumberResponse(): QueryShowNumberResponse {
  return {
    number: ""
  };
}
export const QueryShowNumberResponse = {
  typeUrl: "/lottery.lottery.QueryShowNumberResponse",
  encode(message: QueryShowNumberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.number !== "") {
      writer.uint32(10).string(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowNumberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowNumberResponse>): QueryShowNumberResponse {
    const message = createBaseQueryShowNumberResponse();
    message.number = object.number ?? "";
    return message;
  },
  fromAmino(object: QueryShowNumberResponseAmino): QueryShowNumberResponse {
    const message = createBaseQueryShowNumberResponse();
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    return message;
  },
  toAmino(message: QueryShowNumberResponse): QueryShowNumberResponseAmino {
    const obj: any = {};
    obj.number = message.number;
    return obj;
  },
  fromAminoMsg(object: QueryShowNumberResponseAminoMsg): QueryShowNumberResponse {
    return QueryShowNumberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowNumberResponseProtoMsg): QueryShowNumberResponse {
    return QueryShowNumberResponse.decode(message.value);
  },
  toProto(message: QueryShowNumberResponse): Uint8Array {
    return QueryShowNumberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowNumberResponse): QueryShowNumberResponseProtoMsg {
    return {
      typeUrl: "/lottery.lottery.QueryShowNumberResponse",
      value: QueryShowNumberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowPrivateLotteryNumberRequest(): QueryShowPrivateLotteryNumberRequest {
  return {
    lottery: "",
    address: ""
  };
}
export const QueryShowPrivateLotteryNumberRequest = {
  typeUrl: "/lottery.lottery.QueryShowPrivateLotteryNumberRequest",
  encode(message: QueryShowPrivateLotteryNumberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lottery !== "") {
      writer.uint32(10).string(message.lottery);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowPrivateLotteryNumberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowPrivateLotteryNumberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lottery = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowPrivateLotteryNumberRequest>): QueryShowPrivateLotteryNumberRequest {
    const message = createBaseQueryShowPrivateLotteryNumberRequest();
    message.lottery = object.lottery ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryShowPrivateLotteryNumberRequestAmino): QueryShowPrivateLotteryNumberRequest {
    const message = createBaseQueryShowPrivateLotteryNumberRequest();
    if (object.lottery !== undefined && object.lottery !== null) {
      message.lottery = object.lottery;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryShowPrivateLotteryNumberRequest): QueryShowPrivateLotteryNumberRequestAmino {
    const obj: any = {};
    obj.lottery = message.lottery;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryShowPrivateLotteryNumberRequestAminoMsg): QueryShowPrivateLotteryNumberRequest {
    return QueryShowPrivateLotteryNumberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowPrivateLotteryNumberRequestProtoMsg): QueryShowPrivateLotteryNumberRequest {
    return QueryShowPrivateLotteryNumberRequest.decode(message.value);
  },
  toProto(message: QueryShowPrivateLotteryNumberRequest): Uint8Array {
    return QueryShowPrivateLotteryNumberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowPrivateLotteryNumberRequest): QueryShowPrivateLotteryNumberRequestProtoMsg {
    return {
      typeUrl: "/lottery.lottery.QueryShowPrivateLotteryNumberRequest",
      value: QueryShowPrivateLotteryNumberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowPrivateLotteryNumberResponse(): QueryShowPrivateLotteryNumberResponse {
  return {
    number: ""
  };
}
export const QueryShowPrivateLotteryNumberResponse = {
  typeUrl: "/lottery.lottery.QueryShowPrivateLotteryNumberResponse",
  encode(message: QueryShowPrivateLotteryNumberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.number !== "") {
      writer.uint32(10).string(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowPrivateLotteryNumberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowPrivateLotteryNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowPrivateLotteryNumberResponse>): QueryShowPrivateLotteryNumberResponse {
    const message = createBaseQueryShowPrivateLotteryNumberResponse();
    message.number = object.number ?? "";
    return message;
  },
  fromAmino(object: QueryShowPrivateLotteryNumberResponseAmino): QueryShowPrivateLotteryNumberResponse {
    const message = createBaseQueryShowPrivateLotteryNumberResponse();
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    return message;
  },
  toAmino(message: QueryShowPrivateLotteryNumberResponse): QueryShowPrivateLotteryNumberResponseAmino {
    const obj: any = {};
    obj.number = message.number;
    return obj;
  },
  fromAminoMsg(object: QueryShowPrivateLotteryNumberResponseAminoMsg): QueryShowPrivateLotteryNumberResponse {
    return QueryShowPrivateLotteryNumberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowPrivateLotteryNumberResponseProtoMsg): QueryShowPrivateLotteryNumberResponse {
    return QueryShowPrivateLotteryNumberResponse.decode(message.value);
  },
  toProto(message: QueryShowPrivateLotteryNumberResponse): Uint8Array {
    return QueryShowPrivateLotteryNumberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowPrivateLotteryNumberResponse): QueryShowPrivateLotteryNumberResponseProtoMsg {
    return {
      typeUrl: "/lottery.lottery.QueryShowPrivateLotteryNumberResponse",
      value: QueryShowPrivateLotteryNumberResponse.encode(message).finish()
    };
  }
};