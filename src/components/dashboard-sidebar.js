import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Drawer, useMediaQuery, Avatar } from '@mui/material';
import { Logo } from './logo';
import { NavItem } from './nav-item';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PeopleIcon from '@mui/icons-material/People';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LayersIcon from '@mui/icons-material/Layers';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const items = [
  {
    href: '/',
    icon: (<Box sx={{ display: 'flex', alignItems: 'center' }}><ExploreOutlinedIcon sx={{ fontSize: 25 }} /></Box>),
    title: 'Dashboard'
  },
  {
    href: '/customers',
    icon: (<Box sx={{ display: 'flex', alignItems: 'center' }}><PeopleIcon sx={{ fontSize: 25 }} /></Box>),
    title: 'Users'
  },
  {
    href: '/projects',
    icon: (<Box sx={{ display: 'flex', alignItems: 'center' }}><LayersIcon sx={{ fontSize: 25 }} /></Box>),
    title: 'Projects'
  },
  {
    href: '/task',
    icon: (<Box sx={{ display: 'flex', alignItems: 'center' }}><BookmarksIcon sx={{ fontSize: 25 }} /></Box>),
    title: 'Tasks'
  },
  {
    href: '/reporting',
    icon: (<Box sx={{ display: 'flex', alignItems: 'center' }}><DonutLargeIcon sx={{ fontSize: 25 }} /></Box>),
    title: 'Reporting'
  },
  {
    href: '/login',
    icon: (<Box sx={{ display: 'flex', alignItems: 'center' }}><PermIdentityOutlinedIcon sx={{ fontSize: 25 }} /></Box>),
    title: 'Login User'
  },
];

const ibtems = [
  {
    href: '/notification',
    icon: (<Box sx={{ display: 'flex', alignItems: 'center' }}><NotificationsNoneIcon sx={{ fontSize: 25 }} /></Box>),
    title: 'Notifications'
  },
  {
    href: '/support',
    icon: (<Box sx={{ display: 'flex', alignItems: 'center' }}><ForumOutlinedIcon sx={{ fontSize: 25 }} /></Box>),
    title: 'Support'
  },
  {
    href: '/settings',
    icon: (<Box sx={{ display: 'flex', alignItems: 'center' }}><SettingsOutlinedIcon sx={{ fontSize: 25 }} /></Box>),
    title: 'Settings'
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'space-between',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <Box sx={{ p: 3 }}>
              <NextLink
                href="/"
                passHref
              >
                <a>
                  <Logo
                    sx={{
                      height: 42,
                      width: 42
                    }}
                  />
                </a>
              </NextLink>
            </Box>

          </div>

          <Box sx={{ flexGrow: 1 }}>
            {items.map((item) => (
              <NavItem
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}
              />
            ))}
          </Box>

        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',

          }}
        >

          <Box sx={{ flexGrow: 1 }}>
            {ibtems.map((item) => (
              <NavItem
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}
              />
            ))}
          </Box>

          <Box
            sx={{
              px: 2,
              width: '100%',
              mb: 2,
              mt: 2
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                px: 2,
                py: 1.5,
                border: '2px solid #ededed',
                borderRadius: '8px'
              }}>
              <Box
                sx={{ display: 'flex' }}>

                <Avatar
                  src='/static/images/avatars/avatar_1.png'
                  sx={{ mr: 1.5 }}
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>Frankie Sullivan</Box>
                  <Box
                    sx={{
                      fontSize: '10px',
                      fontWeight: '500'
                    }}>@frankie</Box>
                </Box>
              </Box>

              <Box sx={{
                display: 'flex', flexDirection: 'column'
              }}>
                <KeyboardArrowUpIcon fontSize='20' />

                <KeyboardArrowDownIcon fontSize='20' />
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.default',
            color: 'black',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          color: 'black',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
