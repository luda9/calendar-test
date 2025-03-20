import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Container from '@mui/joy/Container';

import logo from '../assets/happychililogo.jpg'

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Container
      style={{display: 'flex', width: '100%', justifyContent: 'space-between', paddingTop: '1rem', marginBottom: '2rem'}}
    >
      <div>
        <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
          <Menu />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}
          size="sm"
          variant="soft"
          sx={{
            '& .MuiDrawer-content': {
              backgroundColor: '#ffddcf'
            }
          }}
          >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 'auto',
              mt: 1,
              mr: 2,
            }}
          >
            <ModalClose id="close-icon" sx={{ position: 'initial', transform: 'scale(1.5)', backgroundColor: '#ffddcf' }} />
          </Box>
          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}
          >
            <ListItemButton sx={{ fontWeight: 'md' }}>Home</ListItemButton>
            <ListItemButton>About</ListItemButton>
            <ListItemButton>Studio</ListItemButton>
            <ListItemButton>Contact</ListItemButton>
          </List>
        </Drawer>
      </div>
      <div>
        <img src={logo} id="logo-83" width="60" height="60"></img>
      </div>
    </Container>
  );
}
