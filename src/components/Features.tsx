"use client";
import React, { ElementType } from "react";
import {Flex, Box,HStack,VStack,Icon,Text,StackProps, Stack } from "@chakra-ui/react";
import { HasselFreeIcon, MoneyBackGuaranteeIcon, MoneySubscriptionIcon } from "@/icons/Icon";
interface FeatureProps extends StackProps{
    icon:ElementType;
}
export function Feature(props:FeatureProps){
    const {icon,children,...rest}=props;
    return(
        <Stack {...rest} spacing='24px' direction='row'>
        <Icon as={icon} boxsize={['2xl','2xl','3xl']}></Icon>
        <Text textAlign='left' fontSize={["1xl","1xl","1.5xl"]} fontWeight='700'>
            {children}
        </Text>
        </Stack>
        
    );
}
export default function Features(){
    return(
        <Box maxW='1024px' m='auto' pt='60px' pb='32px'>
        <Stack  spacing='24px' px='60px'  direction={['column','column','column','row']}>
            <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>
            <Feature icon={HasselFreeIcon}>No setup fees 100% hassle-free</Feature>
            <Feature icon={MoneySubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
        </Stack>
        </Box>
    );
}