//@ts-nocheck
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool, MsgWithdrawDelegatorLotteryReward } from "./tx";
export const AminoConverter = {
  "/cosmos.distributionNew.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "lottery/x/lottery/MspModifyWithdrawAddress",
    toAmino: MsgSetWithdrawAddress.toAmino,
    fromAmino: MsgSetWithdrawAddress.fromAmino
  },
  "/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "lottery/x/lottery/MspWithdrawDelegationReward",
    toAmino: MsgWithdrawDelegatorReward.toAmino,
    fromAmino: MsgWithdrawDelegatorReward.fromAmino
  },
  "/cosmos.distributionNew.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "lottery/x/lottery/MspWithdrawValCommission",
    toAmino: MsgWithdrawValidatorCommission.toAmino,
    fromAmino: MsgWithdrawValidatorCommission.fromAmino
  },
  "/cosmos.distributionNew.v1beta1.MsgFundCommunityPool": {
    aminoType: "lottery/x/lottery/MspFundCommunityPool",
    toAmino: MsgFundCommunityPool.toAmino,
    fromAmino: MsgFundCommunityPool.fromAmino
  },
  "/cosmos.distributionNew.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/distribution/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/cosmos.distributionNew.v1beta1.MsgCommunityPoolSpend": {
    aminoType: "cosmos-sdk/distr/MsgCommunityPoolSpend",
    toAmino: MsgCommunityPoolSpend.toAmino,
    fromAmino: MsgCommunityPoolSpend.fromAmino
  },
  "/cosmos.distributionNew.v1beta1.MsgDepositValidatorRewardsPool": {
    aminoType: "cosmos-sdk/distr/MsgDepositValRewards",
    toAmino: MsgDepositValidatorRewardsPool.toAmino,
    fromAmino: MsgDepositValidatorRewardsPool.fromAmino
  },
  "/cosmos.distributionNew.v1beta1.MsgWithdrawDelegatorLotteryReward": {
    aminoType: "lottery/x/lottery/MspWithdrawDelegationReward",
    toAmino: MsgWithdrawDelegatorLotteryReward.toAmino,
    fromAmino: MsgWithdrawDelegatorLotteryReward.fromAmino
  }
};