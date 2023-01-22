"use client";
import React from "react";
import {Box,Text,Heading} from '@chakra-ui/react';

export default function Header(){
    return (

        <Box pb='112px' as='section'>
        <Box color='#F7FAFX' bg='#6B46C1' pt='90px' pb='198px' px='32px' textAlign={["left","left","center"]}>
        <Heading fontWeight='extrabold' fontSize={["3xl","3xl","5xl"]} color='#F7FAFC' >
            Simple pricing for your business
        </Heading>
        <Text fontWeight='500' fontSize={["lg","lg","2xl"]} color='#F7FAFC'  pt='4'>Plans that are carefully crafted to suit your business.
        </Text>
        </Box>
        </Box>
    )
}