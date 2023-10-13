import { useContractWrite } from 'wagmi';
import {
  useClaimSigner,
  useRemoveSigner,
} from '../../../../utils/hooks/MultiHatsSignerGate';
import { useEffect, useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import CustomInputWrapper from '../../../../components/Deployers/forms/utils/CustomInputWrapper';
import Button from '../../../../components/UI/CustomButton/CustomButton';
import { LuEdit } from 'react-icons/lu';
import { VStack } from '@chakra-ui/react';
import * as Yup from 'yup';
import { EthereumAddress } from '../../../../components/Deployers/forms/utils/ReadForm';

interface P {
  address?: EthereumAddress;
  onLoading: (value: boolean) => void;
  onTransationComplete: (transation: any) => void;
}

const MHSGRemoveForm: React.FC<P> = (p) => {
  const [formData, setFormData] = useState({
    _hatId: BigInt(0),
  });

  const { config, refetch } = useRemoveSigner(p.address);
  const {
    data: transationData,
    isLoading,
    error,
    writeAsync,
  } = useContractWrite(config);

  const validationSchema = Yup.object().shape({
    _hatId: Yup.string().required('Required'),
  });
  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values, _actions) => {
        setFormData(values);
        refetch?.().then((data) => {
          if (data.status === 'error') {
            alert(data.error.message);
          } else {
            writeAsync?.().then((data) => {
              p.onTransationComplete(data.hash);
            });
          }
        });
      }}
    >
      {(props) => (
        <Form>
          <VStack width="100%" alignItems={'flex-start'} fontSize={14} gap={5}>
            <CustomInputWrapper
              label="Hat Id"
              placeholder="0xC8ac0000000000000000000000000000000047fe"
              name="_hatId"
            />

            <Button
              leftIcon={<LuEdit />}
              type="submit"
              disabled={!props.dirty || isLoading}
            >
              Remove
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default MHSGRemoveForm;