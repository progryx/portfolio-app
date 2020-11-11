import React from 'react';

import { AppBar, Box, Container, Typography } from '@material-ui/core';
import { useLocale, useWindowSize } from '@src/hooks';

import { Breadcrumbs } from '@components/Breadcrumbs';

import { DesktopMenu, MobileMenu } from './components';
import styles from './styles.scss';

export const Layout: React.FC = ({ children }) => {
  const localedText = useLocale();

  const { isMobile, isTablet, isLargeDesktop, isSmallDesktop } = useWindowSize();

  const Menu = () => {
    if (isMobile || isTablet || isSmallDesktop) {
      return <MobileMenu />;
    }

    if (isLargeDesktop) {
      return <DesktopMenu />;
    }

    return null;
  };

  return (
    <>
      <AppBar position="fixed" color="primary" square className={styles.NavBar}>
        <Menu />
      </AppBar>
      <Container maxWidth="lg" component="main" className={styles.gridLayout__container}>
        <Breadcrumbs />
        <Box m={0}>{children}</Box>
      </Container>
      <AppBar position="static" color="primary" square component="footer">
        <Box m={1} p={1}>
          <Typography variant="subtitle2" align="center">
            {localedText('footerContent')}
          </Typography>
        </Box>
      </AppBar>
    </>
  );
};
