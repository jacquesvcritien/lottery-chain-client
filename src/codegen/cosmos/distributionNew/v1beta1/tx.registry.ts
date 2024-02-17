//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool, MsgWithdrawDelegatorLotteryReward } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.distributionNew.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress], ["/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward], ["/cosmos.distributionNew.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission], ["/cosmos.distributionNew.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool], ["/cosmos.distributionNew.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.distributionNew.v1beta1.MsgCommunityPoolSpend", MsgCommunityPoolSpend], ["/cosmos.distributionNew.v1beta1.MsgDepositValidatorRewardsPool", MsgDepositValidatorRewardsPool], ["/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorLotteryReward", MsgWithdrawDelegatorLotteryReward]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.encode(value).finish()
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.encode(value).finish()
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.encode(value).finish()
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.encode(value).finish()
      };
    },
    depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgDepositValidatorRewardsPool",
        value: MsgDepositValidatorRewardsPool.encode(value).finish()
      };
    },
    withdrawDelegatorLotteryReward(value: MsgWithdrawDelegatorLotteryReward) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorLotteryReward",
        value: MsgWithdrawDelegatorLotteryReward.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgSetWithdrawAddress",
        value
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorReward",
        value
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgWithdrawValidatorCommission",
        value
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgFundCommunityPool",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgUpdateParams",
        value
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgCommunityPoolSpend",
        value
      };
    },
    depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgDepositValidatorRewardsPool",
        value
      };
    },
    withdrawDelegatorLotteryReward(value: MsgWithdrawDelegatorLotteryReward) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorLotteryReward",
        value
      };
    }
  },
  fromPartial: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.fromPartial(value)
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.fromPartial(value)
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.fromPartial(value)
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.fromPartial(value)
      };
    },
    depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgDepositValidatorRewardsPool",
        value: MsgDepositValidatorRewardsPool.fromPartial(value)
      };
    },
    withdrawDelegatorLotteryReward(value: MsgWithdrawDelegatorLotteryReward) {
      return {
        typeUrl: "/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorLotteryReward",
        value: MsgWithdrawDelegatorLotteryReward.fromPartial(value)
      };
    }
  }
};