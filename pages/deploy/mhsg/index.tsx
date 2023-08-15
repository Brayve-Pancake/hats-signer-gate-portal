import { VStack, Text } from '@chakra-ui/react';
import MultiHatsSignerGateForm from '../../../components/Deployers/forms/MultiHatsSignerGateForm/MultiHatsSignerGateForm';
import Deploy from '../../../components/MainContent/components/ContentOne/components/Deploy/Deploy';
import MainContent from '../../../components/MainContent/MainContent';
import { DEPLOY_ACTIONS } from '../../../context/DeployContext';

const MHSG = () => {
  return (
    <MainContent
      headerOne={
        <VStack justifyContent='flex-end' height='100%' alignItems='flex-start'>
          <Text as='b'>Welcome to the Hats Signer Gate Frontend</Text>
          <Text>
            You can leverage the capabilities of this dashboard for the
            following functions:
          </Text>
        </VStack>
      }
      contentOne={<Deploy selectedDeployAction={DEPLOY_ACTIONS.DEPLOY_MHSG} />}
      contentTwo={<MultiHatsSignerGateForm />}
    />
  );
};

export default MHSG;
