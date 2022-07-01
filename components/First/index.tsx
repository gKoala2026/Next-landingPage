import type { NextPage } from 'next'
import Image from 'next/image'

import * as React from 'react'
import {
    Toolbar,
    Container,
    Stack,
    Typography,
    Button,
    Divider,

} from '@mui/material';
import { Box } from '@mui/system';

import {
    ArrowRightAlt,
} from '@mui/icons-material';
import styled from '@emotion/styled';

const IconBox = styled(Box)(({theme}) => ({
    width:'55px',
    height:'55px', 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    // background: '#F9FDFF', 
    boxShadow: '0px 12px 20px rgba(216, 166, 20, 0.31)', 
    borderRadius: '20px'
}));
const StyledStack = styled(Stack)(({theme}) => ({
    alignItems:'center', 
    justifyContent:'center',
}));

const First:NextPage = () => {
    return(
        <>
        <Container maxWidth='xl'>
            <StyledStack direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }} spacing={15} mt='50px'>
                <Stack spacing={5}>
                    <Typography fontSize="80px" fontFamily="Bai Jamjuree" color="text.primary" >
                        <b>Banking <br/>
                        <b style={{ border: "3px solid #FF8A1F", borderRadius: "50%" }}>More</b> Smart</b>
                    </Typography>
                    <Typography fontSize="18px" color="text.secondary" >
                    Meet the only spend management <br />platform and corporate card.
                    </Typography>
                    <Stack direction='row' alignItems='center' spacing={2}>
                        <ArrowRightAlt sx={{backgroundColor:'text.primary', color:'#F3FAFE', width:'50px', height:'50px'}}/>
                        <Typography fontSize="18px" color="text.primary">
                        Get your card
                        </Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Box width='675px' height='327px' sx={{ background: 'linear-gradient(106.01deg, #80D1FF 0%, #44B2F1 69.58%)', borderRadius: '4px'}} mt='50px' position="relative">
                        <Box width='228px' height='327px' sx={{backgroundColor:'yellow'}} right='0' position='absolute'>
                            <Stack ml='45px' mt='60px' spacing={3}>
                                <Stack direction='row' spacing={3}>
                                    <IconBox sx={{backgroundColor:'primary.main'}}>
                                        <img src='icon1.png' alt='icon1'></img>
                                    </IconBox>
                                    <IconBox sx={{backgroundColor:'primary.main'}}>
                                        <img src='icon2.png' alt='icon2'></img>
                                    </IconBox>
                                </Stack>
                                <Stack direction='row' spacing={3}>
                                    <IconBox sx={{backgroundColor:'primary.main'}}>
                                        <img src='icon3.png' alt='icon1'></img>
                                    </IconBox>
                                    <IconBox sx={{backgroundColor:'primary.dark'}}>
                                        <img src='icon4.png' alt='icon2'></img>
                                    </IconBox>
                                </Stack>
                                <Stack direction='row' spacing={3}>
                                    <IconBox sx={{backgroundColor:'primary.dark'}}>
                                        <img src='icon5.png' alt='icon1'></img>
                                    </IconBox>
                                    <IconBox sx={{backgroundColor:'primary.main'}}>
                                        <img src='icon6.png' alt='icon2'></img>
                                    </IconBox>
                                </Stack>
                            </Stack>  
                        </Box>
                        <Box left='-70px' top='-130px' position='absolute' width='427.48px' height='346.16px' sx={{transform:' rotate(-5.86deg)'}}>
                        <img src='visa_card.png' alt="visa_card"></img>
                        </Box>
                        <Box left='315px' bottom='10px' position='absolute' width='96px' height='96px'>
                        <img src='text.png' alt="text"></img>
                        </Box>
                    </Box>
                </Stack>
            </StyledStack>
            <StyledStack direction={{xl:'row', lg:'row',md:'column',sm:'column',xs:'column'}} spacing={20} mt='116px'>
                <Stack direction={{xl:'row', lg:'row',md:'row',sm:'column',xs:'column'}} spacing={20}>
                    <Stack spacing={2}>
                        <Typography fontSize="35px" fontFamily="Bai Jamjuree" color="text.primary" alignItems='center' >
                            <b>Hot <img src='fire.png' height='32px'></img> <br/>
                            deals for you</b>
                        </Typography>
                        <Typography fontSize="16px" color="text.secondary" alignItems='center' >
                            Online shopping for retail sales <br/> direct to consumers
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <img src='image528.png' width='32px' height='35px' />
                        <Typography fontSize="20px" fontFamily='Inter' color="text.primary" alignItems='center' >
                            1.5% cashback
                        </Typography>
                        <Typography fontSize="16px" color="text.secondary" alignItems='center' >
                            Online shopping for retail <br/> sales direct to consumers
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={{xl:'row', lg:'row',md:'row',sm:'column',xs:'column'}} spacing={20}>
                    <Stack spacing={2}>
                        <img src='image528.png' width='32px' height='35px' />
                        <Typography fontSize="20px" fontFamily='Inter' color="text.primary" alignItems='center' >
                            30-day terms
                        </Typography>
                        <Typography fontSize="16px" color="text.secondary" alignItems='center' >
                            Online shopping for retail <br/> sales direct to consumers
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <img src='image528.png' width='32px' height='35px' />
                        <Typography fontSize="20px" fontFamily='Inter' color="text.primary" alignItems='center' >
                            Save Money
                        </Typography>
                        <Typography fontSize="16px" color="text.secondary" alignItems='center' >
                            Online shopping for retail <br/> sales direct to consumers
                        </Typography>
                    </Stack>
                </Stack>
            </StyledStack>
        </Container>
        <Box width="100%" mt='130px' position='relative'  justifyContent='center' display='flex'>
            <Box width="100%" height='100%' sx={{backgroundColor:'primary.light', opacity:'0.25'}} position='absolute'></Box>
            <Box width='70px' height='70px' top='-35px' position='absolute'>
                <img src='Ellipse711.png' />
            </Box>
            <StyledStack direction={{xl:'row', lg:'row', md:'row', sm:'column', xs:'column'}} spacing={20} mt="135px" mb="135px">
                    <Stack spacing={2}>
                        <Typography fontSize="30px" fontFamily='Bai Jamjuree' color="text.primary">
                        We Building <br /> Social uniqueness
                        </Typography>
                        <Typography fontSize="16px" color="text.secondary">
                        The marketing strategy lays out <br /> target markets and the value.
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography fontSize="30px" fontFamily='Bai Jamjuree' color="text.primary">
                        Social Media <br /> beyond probability
                        </Typography>
                        <Typography fontSize="16px" color="text.secondary">
                        Essentially a formula for how a <br /> business is going to compete,
                        </Typography>
                    </Stack>
            </StyledStack>
        </Box>
        <StyledStack mt='130px' spacing={4}>
            <Typography fontSize="80px" fontFamily='Bai Jamjuree' color="#0D1111" >
            <b>1000+ Customer</b>
            </Typography>
            <Typography fontSize="16px" color="text.secondary" align='center' pb='90px'>
            Analyze any Business or Creator account—including your competitors—to find the imagery, <br /> visuals, and captions that drive audience engagement. Get social calendars planned faster <br /> and spend less time testing content strategies.
            </Typography>
            <Box>
                <Divider sx={{}} />
                <Stack direction='row' spacing={10} divider={<Divider orientation="vertical" flexItem />}>
                    <StyledStack spacing={4} mt="70px" mb="70px">
                        <Typography fontSize="16px" fontFamily='Inter' color="text.secondary" align='center' sx={{letter:'40%'}}>
                        PRODUCT
                        </Typography>
                        <Typography fontSize="25px" color="black" align='center' sx={{letter:'40%'}}>
                        10,0000+ 
                        </Typography>
                    </StyledStack>
                    <StyledStack spacing={4} mt="70px" mb="70px">
                        <Typography fontSize="16px" fontFamily='Inter' color="text.secondary" align='center' sx={{letter:'40%'}}>
                        PRODUCT
                        </Typography>
                        <Typography fontSize="25px" color="black" align='center' sx={{letter:'40%'}}>
                        10,0000+ 
                        </Typography>
                    </StyledStack>
                    <StyledStack spacing={4} mt="70px" mb="70px">
                        <Typography fontSize="16px" fontFamily='Inter' color="text.secondary" align='center' sx={{letter:'40%'}}>
                        PRODUCT
                        </Typography>
                        <Typography fontSize="25px" color="black" align='center' sx={{letter:'40%'}}>
                        10,0000+ 
                        </Typography>
                    </StyledStack>
                    <StyledStack spacing={4} mt="70px" mb="70px">
                        <Typography fontSize="16px" fontFamily='Inter' color="text.secondary" align='center' sx={{letter:'40%'}}>
                        PRODUCT
                        </Typography>
                        <Typography fontSize="25px" color="black" align='center' sx={{letter:'40%'}}>
                        10,0000+ 
                        </Typography>
                    </StyledStack>
                </Stack>
                
                <Divider />
            </Box>
            
        </StyledStack>
        </>
    )
}

export default First