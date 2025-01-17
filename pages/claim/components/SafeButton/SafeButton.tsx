import { BsSafe } from 'react-icons/bs';
import Button from '../../../../components/UI/CustomButton/CustomButton';
import { useSafe as useHSGSafe } from '../../../../utils/hooks/HatsSignerGate';
import { useSafe as useMHSGSafe } from '../../../../utils/hooks/MultiHatsSignerGate';
import { EthereumAddress } from '../../../../components/Deployers/forms/utils/ReadForm';
import { useNetwork } from 'wagmi';
import { getSafeAppUrlPrefix } from '../../../../utils/utils';

interface P {
  address?: EthereumAddress;
  type: 'HSG' | 'MHSG';
}

const SafeButton: React.FC<P> = (p) => {
  if (p.type === 'HSG') {
    return <HSGSafeButton address={p.address}></HSGSafeButton>;
  } else {
    return <MHSGSafeButton address={p.address}></MHSGSafeButton>;
  }
};

interface HSGSafeButtonP {
  address?: EthereumAddress;
}

const HSGSafeButton: React.FC<HSGSafeButtonP> = (p) => {
  const { data: safe } = useHSGSafe(p.address);
  const { chain } = useNetwork();

  return (
    <Button
      leftIcon={<BsSafe />}
      onClick={() => {
        window.open(`${getSafeAppUrlPrefix(chain?.id)}${safe}`);
      }}
    >
      View Safe
    </Button>
  );
};

const MHSGSafeButton: React.FC<HSGSafeButtonP> = (p) => {
  const { data: safe } = useMHSGSafe(p.address);
  const { chain } = useNetwork();

  return (
    <Button
      leftIcon={<BsSafe />}
      onClick={() => {
        window.open(`${getSafeAppUrlPrefix(chain?.id)}${safe}`);
      }}
    >
      View Safe
    </Button>
  );
};

export default SafeButton;
