import type { NextPage } from 'next'
import Image from 'next/image'

import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { Grid, Stack } from '@mui/material';

import Besnik from '../../public/Besnik.png'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header:NextPage<Props> = (props) => {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid>
                <Stack direction={'row'} spacing={5} ml="118px">
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
            </Grid>
            <Box position='absolute' sx={{ right:{xl:'800px', lg:'600px', md:'200px', sm: '100px', xs:'10px'} }}>
                <Image src={Besnik} alt='Besnik'>
                </Image>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
export default Header
