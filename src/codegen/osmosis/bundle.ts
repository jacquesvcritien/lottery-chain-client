import * as _79 from "./downtime-detector/v1beta1/downtime_duration";
import * as _80 from "./downtime-detector/v1beta1/genesis";
import * as _81 from "./downtime-detector/v1beta1/query";
import * as _82 from "./epochs/genesis";
import * as _83 from "./epochs/query";
import * as _84 from "./gamm/pool-models/balancer/balancerPool";
import * as _85 from "./gamm/v1beta1/genesis";
import * as _86 from "./gamm/v1beta1/query";
import * as _87 from "./gamm/v1beta1/tx";
import * as _88 from "./gamm/pool-models/balancer/tx/tx";
import * as _89 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _90 from "./gamm/pool-models/stableswap/tx";
import * as _91 from "./gamm/v2/query";
import * as _92 from "./ibc-rate-limit/v1beta1/params";
import * as _93 from "./ibc-rate-limit/v1beta1/query";
import * as _94 from "./incentives/gauge";
import * as _95 from "./incentives/genesis";
import * as _96 from "./incentives/params";
import * as _97 from "./incentives/query";
import * as _98 from "./incentives/tx";
import * as _99 from "./lockup/genesis";
import * as _100 from "./lockup/lock";
import * as _101 from "./lockup/params";
import * as _102 from "./lockup/query";
import * as _103 from "./lockup/tx";
import * as _104 from "./mint/v1beta1/genesis";
import * as _105 from "./mint/v1beta1/mint";
import * as _106 from "./mint/v1beta1/query";
import * as _107 from "./pool-incentives/v1beta1/genesis";
import * as _108 from "./pool-incentives/v1beta1/gov";
import * as _109 from "./pool-incentives/v1beta1/incentives";
import * as _110 from "./pool-incentives/v1beta1/query";
import * as _111 from "./protorev/v1beta1/genesis";
import * as _112 from "./protorev/v1beta1/gov";
import * as _113 from "./protorev/v1beta1/params";
import * as _114 from "./protorev/v1beta1/protorev";
import * as _115 from "./protorev/v1beta1/query";
import * as _116 from "./protorev/v1beta1/tx";
import * as _117 from "./sumtree/v1beta1/tree";
import * as _118 from "./superfluid/genesis";
import * as _119 from "./superfluid/params";
import * as _120 from "./superfluid/query";
import * as _121 from "./superfluid/superfluid";
import * as _122 from "./superfluid/tx";
import * as _123 from "./swaprouter/v1beta1/genesis";
import * as _124 from "./swaprouter/v1beta1/module_route";
import * as _125 from "./swaprouter/v1beta1/query";
import * as _126 from "./swaprouter/v1beta1/swap_route";
import * as _127 from "./swaprouter/v1beta1/tx";
import * as _128 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _129 from "./tokenfactory/v1beta1/genesis";
import * as _130 from "./tokenfactory/v1beta1/params";
import * as _131 from "./tokenfactory/v1beta1/query";
import * as _132 from "./tokenfactory/v1beta1/tx";
import * as _133 from "./twap/v1beta1/genesis";
import * as _134 from "./twap/v1beta1/query";
import * as _135 from "./twap/v1beta1/twap_record";
import * as _136 from "./txfees/v1beta1/feetoken";
import * as _137 from "./txfees/v1beta1/genesis";
import * as _138 from "./txfees/v1beta1/gov";
import * as _139 from "./txfees/v1beta1/query";
import * as _140 from "./valset-pref/v1beta1/query";
import * as _141 from "./valset-pref/v1beta1/state";
import * as _142 from "./valset-pref/v1beta1/tx";
import * as _201 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _202 from "./gamm/pool-models/stableswap/tx.amino";
import * as _203 from "./gamm/v1beta1/tx.amino";
import * as _204 from "./incentives/tx.amino";
import * as _205 from "./lockup/tx.amino";
import * as _206 from "./protorev/v1beta1/tx.amino";
import * as _207 from "./superfluid/tx.amino";
import * as _208 from "./swaprouter/v1beta1/tx.amino";
import * as _209 from "./tokenfactory/v1beta1/tx.amino";
import * as _210 from "./valset-pref/v1beta1/tx.amino";
import * as _211 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _212 from "./gamm/pool-models/stableswap/tx.registry";
import * as _213 from "./gamm/v1beta1/tx.registry";
import * as _214 from "./incentives/tx.registry";
import * as _215 from "./lockup/tx.registry";
import * as _216 from "./protorev/v1beta1/tx.registry";
import * as _217 from "./superfluid/tx.registry";
import * as _218 from "./swaprouter/v1beta1/tx.registry";
import * as _219 from "./tokenfactory/v1beta1/tx.registry";
import * as _220 from "./valset-pref/v1beta1/tx.registry";
import * as _221 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _222 from "./epochs/query.rpc.Query";
import * as _223 from "./gamm/v1beta1/query.rpc.Query";
import * as _224 from "./gamm/v2/query.rpc.Query";
import * as _225 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _226 from "./incentives/query.rpc.Query";
import * as _227 from "./lockup/query.rpc.Query";
import * as _228 from "./mint/v1beta1/query.rpc.Query";
import * as _229 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _230 from "./protorev/v1beta1/query.rpc.Query";
import * as _231 from "./superfluid/query.rpc.Query";
import * as _232 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _233 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _234 from "./twap/v1beta1/query.rpc.Query";
import * as _235 from "./txfees/v1beta1/query.rpc.Query";
import * as _236 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _237 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _238 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _239 from "./gamm/v1beta1/tx.rpc.msg";
import * as _240 from "./incentives/tx.rpc.msg";
import * as _241 from "./lockup/tx.rpc.msg";
import * as _242 from "./protorev/v1beta1/tx.rpc.msg";
import * as _243 from "./superfluid/tx.rpc.msg";
import * as _244 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _245 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _246 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _251 from "./rpc.query";
import * as _252 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._221
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._222
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._203,
      ..._213,
      ..._223,
      ..._239
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._88,
          ..._201,
          ..._211,
          ..._237
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._89,
          ..._90,
          ..._202,
          ..._212,
          ..._238
        };
      }
    }
    export const v2 = {
      ..._91,
      ..._224
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._225
    };
  }
  export const incentives = {
    ..._94,
    ..._95,
    ..._96,
    ..._97,
    ..._98,
    ..._204,
    ..._214,
    ..._226,
    ..._240
  };
  export const lockup = {
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._103,
    ..._205,
    ..._215,
    ..._227,
    ..._241
  };
  export namespace mint {
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._228
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._229
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._206,
      ..._216,
      ..._230,
      ..._242
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._117
    };
  }
  export const superfluid = {
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._207,
    ..._217,
    ..._231,
    ..._243
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._208,
      ..._218,
      ..._232,
      ..._244
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._209,
      ..._219,
      ..._233,
      ..._245
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._133,
      ..._134,
      ..._135,
      ..._234
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._235
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._140,
      ..._141,
      ..._142,
      ..._210,
      ..._220,
      ..._236,
      ..._246
    };
  }
  export const ClientFactory = {
    ..._251,
    ..._252
  };
}