import { Box, Icon, Flex, Text, Heading, Button, HStack, StackProps, Stack } from "@chakra-ui/react"

import React from 'react'
import CheckIcon from "@/icons/Icon";

export const Listitem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={CheckIcon} w='22px' h='22px' />
            <text>{children}</text>
        </HStack>
    )
}

export default function Pricing() {
    return (
        <Box mx='3' as='section'>
    <Box 
        display='flex'
        flexDirection={['column', 'column', 'row']}
        maxW='994px'
        margin='auto'
        mt='-160px'
        // bg="white"
        borderRadius='12px'
        overflow='hidden'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
    >
       
            <Flex >
                <Box bgColor="#F0EAFB" p="60px">
                    <Text fontWeight="bold" fontSize={["18px", "18px", "20px", "24px"]}>Premium PRO</Text>
                    <Heading as="h3" fontSize={['5xl','5xl','6xl']} mt="16px">$329</Heading>
                    <Text fontWeight="500px" fontSize="18px" mt="8px">billed just once</Text>
                    <Button color="white" colorScheme="purple" border-borderRadius="8px" size="lg" width={["180px" ,"180px", "280px"]} mt="24px"> Get Started</Button>
                </Box>
            </Flex>
       
    
        <Box
            maxW="994px" height={['425px','350px','300px']}
            p='60px' fontSize="16px" bg="white" >
            <Text pt="3" >
                Access these features when you get this pricing package for your business.
            </Text>
            <Stack as="ul" spacing='20px' pt='24px'>
                <Listitem>International calling and messaging API</Listitem>
                <Listitem>Additional phone numbers</Listitem>
                <Listitem>Automated messages via Zapier</Listitem>
                <Listitem>24/7 support and consulting</Listitem>
            </Stack>
        </Box>
    </Box>
    </Box>
     )

    }