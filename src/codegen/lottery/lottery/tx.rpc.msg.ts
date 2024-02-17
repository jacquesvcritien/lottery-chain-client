import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgChangeNumber, MsgChangeNumberResponse, MsgCreatePrivateLottery, MsgCreatePrivateLotteryResponse, MsgChooseNumberPrivate, MsgChooseNumberPrivateResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  changeNumber(request: MsgChangeNumber): Promise<MsgChangeNumberResponse>;
  createPrivateLottery(request: MsgCreatePrivateLottery): Promise<MsgCreatePrivateLotteryResponse>;
  chooseNumberPrivate(request: MsgChooseNumberPrivate): Promise<MsgChooseNumberPrivateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.createPrivateLottery = this.createPrivateLottery.bind(this);
    this.chooseNumberPrivate = this.chooseNumberPrivate.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  changeNumber(request: MsgChangeNumber): Promise<MsgChangeNumberResponse> {
    const data = MsgChangeNumber.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "ChangeNumber", data);
    return promise.then(data => MsgChangeNumberResponse.decode(new BinaryReader(data)));
  }
  createPrivateLottery(request: MsgCreatePrivateLottery): Promise<MsgCreatePrivateLotteryResponse> {
    const data = MsgCreatePrivateLottery.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "CreatePrivateLottery", data);
    return promise.then(data => MsgCreatePrivateLotteryResponse.decode(new BinaryReader(data)));
  }
  chooseNumberPrivate(request: MsgChooseNumberPrivate): Promise<MsgChooseNumberPrivateResponse> {
    const data = MsgChooseNumberPrivate.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "ChooseNumberPrivate", data);
    return promise.then(data => MsgChooseNumberPrivateResponse.decode(new BinaryReader(data)));
  }
}