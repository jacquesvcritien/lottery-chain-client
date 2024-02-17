import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as lotteryLotteryTxRegistry from "./lottery/tx.registry";
import * as lotteryLotteryTxAmino from "./lottery/tx.amino";
export const lotteryAminoConverters = {
  ...lotteryLotteryTxAmino.AminoConverter
};
export const lotteryProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...lotteryLotteryTxRegistry.registry];
export const getSigningLotteryClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...lotteryProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...lotteryAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningLotteryClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningLotteryClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};