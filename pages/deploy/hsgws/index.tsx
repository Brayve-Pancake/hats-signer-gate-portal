import { VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import HatsSignerGateAndSafeForm from '../../../components/Deployers/forms/HatsSignerGateAndSafeForm/HatsSignerGateAndSafeForm';
import Deploy from '../../../components/MainContent/components/Deploy/Deploy';
import MainContent from '../../../components/MainContent/MainContent';
import Button from '../../../components/UI/CustomButton/CustomButton';
import { DEPLOY_ACTIONS } from '../../../context/DeployContext';
import { FiCopy } from 'react-icons/fi';
import { BsCardList, BsSafe } from 'react-icons/bs';
import { getBlockExplorerUrl } from '../../../utils/utils';
import { useNetwork } from 'wagmi';
import { AbiTypeToPrimitiveType } from 'abitype';

export interface CustomFormData {
  _ownerHatId: AbiTypeToPrimitiveType<'uint256'>;
  _signerHatId: AbiTypeToPrimitiveType<'uint256'>;
  _minThreshold: AbiTypeToPrimitiveType<'uint256'>;
  _targetThreshold: AbiTypeToPrimitiveType<'uint256'>;
  _maxSigners: AbiTypeToPrimitiveType<'uint256'>;
}

const HSGWF = () => {
  const { chain } = useNetwork();
  const [isPending, setIsPending] = useState<boolean>(false);
  const [data, setData] = useState(undefined);
  const [formData, setFormData] = useState<CustomFormData>({
    _ownerHatId: BigInt(0),
    _signerHatId: BigInt(0),
    _minThreshold: BigInt(0),
    _targetThreshold: BigInt(0),
    _maxSigners: BigInt(0),
  });
  const [transactionData, setTransactionData] = useState(undefined);
  const headerOne = () => (
    <VStack justifyContent="flex-end" height="100%" alignItems="flex-start">
      <Text as="b">Hats Signer Gate Factory HSGWS</Text>
      <Text>Select the type of Hats Signer Gate to deploy</Text>
    </VStack>
  );
  const headerTwo = () => (
    <VStack justifyContent="flex-end" height="100%" alignItems="flex-start">
      <Text as="b">Deploy Multi Hats Signer Gate + Safe</Text>
      <Text>Enter inputs, click ‘Deploy’</Text>
    </VStack>
  );
  const headerThree = () => (
    <>
      {isPending && <Text as="b">Transaction Pending...</Text>}
      {data && !isPending && <Text as="b">Transaction Complete</Text>}
    </>
  );
  const contentOne = () => <Deploy active={DEPLOY_ACTIONS.DEPLOY_HSG_W_S} />;
  const contentTwo = () => (
    <HatsSignerGateAndSafeForm
      setIsPending={setIsPending}
      setData={setData}
      setTransactionData={setTransactionData}
      formData={formData}
      setFormData={setFormData}
      isPending={isPending}
    />
  );

  const contentThree = () => (
    <>
      {!isPending && !data && (
        <VStack height="100%" alignItems="flex-start" gap={'8px'}>
          <Text>
            <b>Owner Hat</b> can transfer ownership to a new Hat ID, set
            multisig parameters, and for a MHSG, add other Hats as valid
            signers. Note: once added as a valid signer, a Hat cannot be removed
            from the multisig.
          </Text>
          <Text>
            <b>Signer Hat</b> is the ID of the Hat(s) that will have signing
            authority for the Safe multisig.
          </Text>
          <Text>
            <b>Min Threshold</b> is the fewest number of signers that can
            execute a transaction.
          </Text>
          <Text>
            <b>Max Threshold</b> when reached becomes the fewest number of
            signers that can execute a transaction.
          </Text>
          <Text>
            <b>Max Signers</b> is the maximum number of addresses that can claim
            signing authority on the Safe.
          </Text>
          <Text>
            <b>Max Signers</b> is the maximum number of addresses that can claim
            signing authority on the Safe.
          </Text>
          <Text>
            In order to execute a transaction, the safe must have a number of
            valid hat-wearing signers &gt;= Min Threshold. Each valid signer
            added beyond the Min Threshold will increase the safe&apos;s
            threshold until the Max Threshold is reached, after which the
            Safe&apos;s threshold will not increase.
          </Text>
        </VStack>
      )}
      {data && !isPending && (
        <VStack height="100%" alignItems="flex-start" gap={'24px'}>
          <Button
            leftIcon={<FiCopy />}
            onClick={() => {
              window.open(
                `${getBlockExplorerUrl(chain?.id || 1)}/tx/${
                  (transactionData as unknown as { transactionHash: string })
                    .transactionHash
                }`
              );
            }}
          >
            View Transaction
          </Button>
          <Button
            leftIcon={<BsCardList />}
            onClick={() => {
              window.open(
                `${getBlockExplorerUrl(chain?.id || 1)}/address/${
                  (data as unknown as { _hatsSignerGate: string })
                    ._hatsSignerGate
                }#writeContract`
              );
            }}
          >
            View HSG Contract
          </Button>
          <Button
            leftIcon={<BsSafe />}
            onClick={() => {
              window.open(
                `https://app.safe.global/home?safe=gor:${(
                  data as unknown as { _safe: string }
                )._safe!}`
              );
            }}
          >
            View Safe
          </Button>
          <Text>
            Min Threshold = {formData._minThreshold.toString()}
            <br />
            Max Threshold = {formData._minThreshold.toString()}
            <br />
            Max Signers = {formData._maxSigners.toString()}
          </Text>
          <Text>
            The Safe owner you see listed at app.safe.global is the new Hats
            Signer Gate contract you deployed. This signer will be replaced as
            soon as an authorized hat wearer claims signing authority for the
            first time.
          </Text>
        </VStack>
      )}
    </>
  );

  return (
    <MainContent
      headerOne={headerOne()}
      headerTwo={headerTwo()}
      headerThree={headerThree()}
      contentOne={contentOne()}
      contentTwo={contentTwo()}
      contentThree={contentThree()}
    />
  );
};

export default HSGWF;