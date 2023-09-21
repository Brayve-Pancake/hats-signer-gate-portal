import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  VStack,
} from '@chakra-ui/react';
import HatsSignerGateAndSafeForm from './forms/HatsSignerGateAndSafeForm/HatsSignerGateAndSafeForm';
import HatsSignerGateForm from './forms/HatsSignerGateForm/HatsSignerGateForm';
import MultiHatsSignerGateForm from './forms/MultiHatsSignerGateForm/MultiHatsSignerGateForm';

export default function Deployers() {
  return (
    <HStack
      justifyContent="space-evenly"
      alignItems="flex-start"
      className="py-2"
      gap="24px"
    >
      <VStack width="100%" py={10} pl={8} pr={24} alignItems={'flex-start'}>
        <h3>What to deploy?</h3>
        <Accordion allowToggle width="100%">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Hats Signer Gate
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} width="100%">
              <HatsSignerGateForm />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Hats Signer Gate and Safe
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/* <HatsSignerGateAndSafeForm /> */}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Multi Hats Signer Gate
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MultiHatsSignerGateForm />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Multi Hats Signer Gate And Safe
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
      <Box minW="250px">
        <h3>Result</h3>
        <div className="py-4">
          <pre>result here</pre>
        </div>
      </Box>
    </HStack>
  );
}
