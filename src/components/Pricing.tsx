"use client";
import {
    Box,
    Flex,
    Text,
    Heading,
    Button,
    HStack,
    Icon,
    Stack,
    background,
    StackProps,
    VStack,
  } from "@chakra-ui/react";
  import Checkicon from "@/icons/Icon";
  
  export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
      <HStack as="li" spacing="12px" {...rest} alignItems="start">
        <Icon as={Checkicon} boxSize="20px" />
        <Text h="50px">{children}</Text>
      </HStack>
    );
  };
  
  export default function Pricing() {
    return (
      <div>
        <Box mx='6'>
          <Box mx="auto" mt="-256px" overflow="hidden">
            <Flex
              direction={["column", "column", "column", "row"]}
              mx="auto"
              bg="white"
              borderRadius="12px"

              boxShadow="dark-lg"
              // box-Shadow="dark-lg,0px 10px 10px -5px rgba(0,0,0,0.1),0px 20px 25px -5px rgba(0,0,0,0.4)"
            maxW="95%">
              <Box
                textAlign="center"
                borderRadius="12px"
                backgroundColor="#F0EAFB"
                padding="60px"
              >
                <VStack mt="17">
                  <Text
                    fontWeight="800"
                    fontSize={["18px", "18px", "20px", "24px"]}
                    line-height="32px"
                  > Premium PRO</Text>
  
                  <Text fontWeight="500" fontSize="18px" lineHeight="38px">
                    billed just once
                  </Text>
                  <Heading as='h3' fontSize={['5xl','5xl','6xl']} mt='16px'>$329</Heading>
                  <Button
                    background="#805AD5"
                    width={["150px", "180px", "180px", "280px"]}
                    height="51px"
                    border-borderRadius="8px"
                    mt="24px"
                  >
                    Get Started
                  </Button>
                </VStack>
              </Box>
              <Box
                mx={["20px", "40px", "50px", "60px"]}
                fontWeight="semibold"
                fontSize={["14px", "14px", "16px", "18px"]}
                bg="white"
              >
                <Text textAlign="left" pt="3">
                  Access these features when you get this pricing package for your
                  business.
                </Text>
                <Stack
                  as="ul"
                  spacing="20px"
                  pt="24px"
                  fontSize={["12px", "16px", "18px", "20px"]}
                >
                  <ListItem>International calling and API</ListItem>
                  <ListItem>Additional phone numbers</ListItem>
                  <ListItem>Automated messages Zapier</ListItem>
                  <ListItem>24/7 support and consulting</ListItem>
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
    );
  }
  