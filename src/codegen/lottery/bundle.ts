import * as _71 from "./lottery/choices";
import * as _72 from "./lottery/genesis";
import * as _73 from "./lottery/lottery";
import * as _74 from "./lottery/params";
import * as _75 from "./lottery/privatelottery";
import * as _76 from "./lottery/query";
import * as _77 from "./lottery/tx";
import * as _78 from "./lottery/ve";
import * as _197 from "./lottery/tx.amino";
import * as _198 from "./lottery/tx.registry";
import * as _199 from "./lottery/query.rpc.Query";
import * as _200 from "./lottery/tx.rpc.msg";
import * as _249 from "./rpc.query";
import * as _250 from "./rpc.tx";
export namespace lottery {
  export const lottery = {
    ..._71,
    ..._72,
    ..._73,
    ..._74,
    ..._75,
    ..._76,
    ..._77,
    ..._78,
    ..._197,
    ..._198,
    ..._199,
    ..._200
  };
  export const ClientFactory = {
    ..._249,
    ..._250
  };
}