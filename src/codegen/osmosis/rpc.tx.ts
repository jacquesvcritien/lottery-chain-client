import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distributionNew: {
      v1beta1: new (await import("../cosmos/distributionNew/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  osmosis: {
    gamm: {
      poolmodels: {
        balancer: {
          v1beta1: new (await import("./gamm/pool-models/balancer/tx/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        stableswap: {
          v1beta1: new (await import("./gamm/pool-models/stableswap/tx.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      v1beta1: new (await import("./gamm/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    incentives: new (await import("./incentives/tx.rpc.msg")).MsgClientImpl(rpc),
    lockup: new (await import("./lockup/tx.rpc.msg")).MsgClientImpl(rpc),
    protorev: {
      v1beta1: new (await import("./protorev/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    superfluid: new (await import("./superfluid/tx.rpc.msg")).MsgClientImpl(rpc),
    swaprouter: {
      v1beta1: new (await import("./swaprouter/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    tokenfactory: {
      v1beta1: new (await import("./tokenfactory/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    valsetpref: {
      v1beta1: new (await import("./valset-pref/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});