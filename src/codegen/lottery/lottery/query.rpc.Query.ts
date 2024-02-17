import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryShowNumberRequest, QueryShowNumberResponse, QueryShowPrivateLotteryNumberRequest, QueryShowPrivateLotteryNumberResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ShowNumber items. */
  showNumber(request: QueryShowNumberRequest): Promise<QueryShowNumberResponse>;
  /** Queries a list of ShowPrivateLotteryNumber items. */
  showPrivateLotteryNumber(request: QueryShowPrivateLotteryNumberRequest): Promise<QueryShowPrivateLotteryNumberResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.showNumber = this.showNumber.bind(this);
    this.showPrivateLotteryNumber = this.showPrivateLotteryNumber.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  showNumber(request: QueryShowNumberRequest): Promise<QueryShowNumberResponse> {
    const data = QueryShowNumberRequest.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Query", "ShowNumber", data);
    return promise.then(data => QueryShowNumberResponse.decode(new BinaryReader(data)));
  }
  showPrivateLotteryNumber(request: QueryShowPrivateLotteryNumberRequest): Promise<QueryShowPrivateLotteryNumberResponse> {
    const data = QueryShowPrivateLotteryNumberRequest.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Query", "ShowPrivateLotteryNumber", data);
    return promise.then(data => QueryShowPrivateLotteryNumberResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    showNumber(request: QueryShowNumberRequest): Promise<QueryShowNumberResponse> {
      return queryService.showNumber(request);
    },
    showPrivateLotteryNumber(request: QueryShowPrivateLotteryNumberRequest): Promise<QueryShowPrivateLotteryNumberResponse> {
      return queryService.showPrivateLotteryNumber(request);
    }
  };
};