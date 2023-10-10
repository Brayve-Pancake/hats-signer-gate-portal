import { useContractWrite } from "wagmi";
import Button from "../../../../components/UI/CustomButton/CustomButton";
import { LuEdit } from 'react-icons/lu';
import { useClaimSigner } from "../../../../utils/hooks/HatsSignerGate";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface P {
    address?: string;
    onLoading: (value: boolean) => void;
    onTransationComplete: (transation: any) => void;
}

const HSGClaimForm: React.FC<P> = (p) => {
    const { config, refetch } = useClaimSigner(p.address);
    const { writeAsync } = useContractWrite(config);

    return <>
        <Button
        leftIcon={<LuEdit />}
        onClick={() => {
            refetch?.().then(data => {
                if (data.status === 'error') {
                    alert(data.error.message);
                } else {
                    writeAsync?.().then((data) => {
                        p.onTransationComplete(data.hash);
                    });
                }
            });
        }}>Claim</Button>
    </>
}

export default HSGClaimForm;