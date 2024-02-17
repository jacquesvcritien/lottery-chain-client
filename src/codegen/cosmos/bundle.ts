import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./crypto/multisig/keys";
import * as _23 from "./crypto/secp256k1/keys";
import * as _24 from "./crypto/secp256r1/keys";
import * as _25 from "./distributionNew/module/v1/module";
import * as _26 from "./distributionNew/v1beta1/distributionNew";
import * as _27 from "./distributionNew/v1beta1/genesis";
import * as _28 from "./distributionNew/v1beta1/query";
import * as _29 from "./distributionNew/v1beta1/tx";
import * as _30 from "./feegrant/v1beta1/feegrant";
import * as _31 from "./feegrant/v1beta1/genesis";
import * as _32 from "./feegrant/v1beta1/query";
import * as _33 from "./feegrant/v1beta1/tx";
import * as _34 from "./gov/v1/genesis";
import * as _35 from "./gov/v1/gov";
import * as _36 from "./gov/v1/query";
import * as _37 from "./gov/v1/tx";
import * as _38 from "./gov/v1beta1/genesis";
import * as _39 from "./gov/v1beta1/gov";
import * as _40 from "./gov/v1beta1/query";
import * as _41 from "./gov/v1beta1/tx";
import * as _42 from "./group/v1/events";
import * as _43 from "./group/v1/genesis";
import * as _44 from "./group/v1/query";
import * as _45 from "./group/v1/tx";
import * as _46 from "./group/v1/types";
import * as _47 from "./mint/v1beta1/genesis";
import * as _48 from "./mint/v1beta1/mint";
import * as _49 from "./mint/v1beta1/query";
import * as _50 from "./params/v1beta1/params";
import * as _51 from "./params/v1beta1/query";
import * as _52 from "./staking/v1beta1/authz";
import * as _53 from "./staking/v1beta1/genesis";
import * as _54 from "./staking/v1beta1/query";
import * as _55 from "./staking/v1beta1/staking";
import * as _56 from "./staking/v1beta1/tx";
import * as _57 from "./tx/signing/v1beta1/signing";
import * as _58 from "./tx/v1beta1/service";
import * as _59 from "./tx/v1beta1/tx";
import * as _60 from "./upgrade/v1beta1/query";
import * as _61 from "./upgrade/v1beta1/tx";
import * as _62 from "./upgrade/v1beta1/upgrade";
import * as _63 from "./vesting/v1beta1/tx";
import * as _64 from "./vesting/v1beta1/vesting";
import * as _154 from "./authz/v1beta1/tx.amino";
import * as _155 from "./bank/v1beta1/tx.amino";
import * as _156 from "./distributionNew/v1beta1/tx.amino";
import * as _157 from "./feegrant/v1beta1/tx.amino";
import * as _158 from "./gov/v1/tx.amino";
import * as _159 from "./gov/v1beta1/tx.amino";
import * as _160 from "./group/v1/tx.amino";
import * as _161 from "./staking/v1beta1/tx.amino";
import * as _162 from "./upgrade/v1beta1/tx.amino";
import * as _163 from "./vesting/v1beta1/tx.amino";
import * as _164 from "./authz/v1beta1/tx.registry";
import * as _165 from "./bank/v1beta1/tx.registry";
import * as _166 from "./distributionNew/v1beta1/tx.registry";
import * as _167 from "./feegrant/v1beta1/tx.registry";
import * as _168 from "./gov/v1/tx.registry";
import * as _169 from "./gov/v1beta1/tx.registry";
import * as _170 from "./group/v1/tx.registry";
import * as _171 from "./staking/v1beta1/tx.registry";
import * as _172 from "./upgrade/v1beta1/tx.registry";
import * as _173 from "./vesting/v1beta1/tx.registry";
import * as _174 from "./auth/v1beta1/query.rpc.Query";
import * as _175 from "./authz/v1beta1/query.rpc.Query";
import * as _176 from "./bank/v1beta1/query.rpc.Query";
import * as _177 from "./distributionNew/v1beta1/query.rpc.Query";
import * as _178 from "./feegrant/v1beta1/query.rpc.Query";
import * as _179 from "./gov/v1/query.rpc.Query";
import * as _180 from "./gov/v1beta1/query.rpc.Query";
import * as _181 from "./group/v1/query.rpc.Query";
import * as _182 from "./mint/v1beta1/query.rpc.Query";
import * as _183 from "./params/v1beta1/query.rpc.Query";
import * as _184 from "./staking/v1beta1/query.rpc.Query";
import * as _185 from "./tx/v1beta1/service.rpc.Service";
import * as _186 from "./upgrade/v1beta1/query.rpc.Query";
import * as _187 from "./authz/v1beta1/tx.rpc.msg";
import * as _188 from "./bank/v1beta1/tx.rpc.msg";
import * as _189 from "./distributionNew/v1beta1/tx.rpc.msg";
import * as _190 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _191 from "./gov/v1/tx.rpc.msg";
import * as _192 from "./gov/v1beta1/tx.rpc.msg";
import * as _193 from "./group/v1/tx.rpc.msg";
import * as _194 from "./staking/v1beta1/tx.rpc.msg";
import * as _195 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _196 from "./vesting/v1beta1/tx.rpc.msg";
import * as _247 from "./rpc.query";
import * as _248 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._174
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._154,
      ..._164,
      ..._175,
      ..._187
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._155,
      ..._165,
      ..._176,
      ..._188
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._15
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._19
    };
    export namespace hd {
      export const v1 = {
        ..._20
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._21
      };
    }
    export const multisig = {
      ..._22
    };
    export const secp256k1 = {
      ..._23
    };
    export const secp256r1 = {
      ..._24
    };
  }
  export namespace distributionNew {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._156,
      ..._166,
      ..._177,
      ..._189
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._157,
      ..._167,
      ..._178,
      ..._190
    };
  }
  export namespace gov {
    export const v1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._158,
      ..._168,
      ..._179,
      ..._191
    };
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._159,
      ..._169,
      ..._180,
      ..._192
    };
  }
  export namespace group {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._160,
      ..._170,
      ..._181,
      ..._193
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._182
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._183
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._161,
      ..._171,
      ..._184,
      ..._194
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._185
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._162,
      ..._172,
      ..._186,
      ..._195
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._163,
      ..._173,
      ..._196
    };
  }
  export const ClientFactory = {
    ..._247,
    ..._248
  };
}