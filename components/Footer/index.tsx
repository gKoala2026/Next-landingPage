import type { NextPage } from 'next'

import * as React from 'react';
import { 
    Stack, 
    Typography,
    Box,
} from '@mui/material';

import styled from '@emotion/styled';

const StyledStack = styled(Stack)(({theme}) => ({
    alignItems:'center', 
    justifyContent:'center',
}));


const Footer:NextPage = () => {
  return (  <>
            <StyledStack direction='row' spacing={{lx:40, lg:35, md:20, sm:10, xs:5}} mt='150px' mb='90px'>
                <Stack direction={{lx:'row', lg:'row', md:'column', sm:'column', xs:'column'}} spacing={5} ml="118px">
                    <Typography variant="h6" component="div" fontSize="14px">
                    ABOUT
                    </Typography>
                    <Typography variant="h6" component="div" fontSize="14px">
                    HOW IT WORKS
                    </Typography>
                    <Typography variant="h6" component="div" fontSize="14px">
                    CONTACT
                    </Typography>
                </Stack>
                <img src='Besnik.png' />
                <StyledStack direction={{lx:'row', lg:'row', md:'column', sm:'column', xs:'column'}} spacing={5} ml="118px">
                    <Typography fontSize="14px" color='#404041'>
                    Signup
                    </Typography>
                    <Typography fontSize="14px" color='#404041'>
                    Login
                    </Typography>
                    <Stack direction='row' spacing={3} height='12px'>
                        <Box><img src='icon11.png' /></Box>
                        <Box><img src='icon12.png' /></Box>
                        <Box><img src='icon13.png' /></Box>
                    </Stack>
                </StyledStack>
            </StyledStack>
            <StyledStack width='100%' direction='row' spacing={5}>
                    <Typography fontSize="12px" color='#1B1B1B' >
                    Copyright © 2020.Besnik creative
                    </Typography>
                    <Box width='50%' height={0} sx={{border: '1px solid #565B58'}}></Box>
                    <Typography fontSize="12px" color='#7B827D'>
                    Designed by Besnik
                    </Typography>
            </StyledStack>
            </>
  );
}
export default Footer
