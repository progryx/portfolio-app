import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Box, Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@material-ui/core';
import { isTruthy } from '@portfolio-app/utilities';
import { useRoutesMap } from '@src/hooks';

type EventType = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const routesMap = useRoutesMap();

  type RouteKeys = keyof typeof routesMap;

  const isHomePage = location.pathname === '/';

  const routes = location.pathname.split('/') as RouteKeys[];

  const handleClick = (event: EventType, url: string) => {
    event.preventDefault();
    history.push(url);
  };

  return isHomePage ? null : (
    <Box m={1} p={1}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          href={routesMap.main.url}
          onClick={(event: EventType) => handleClick(event, routesMap.main.url)}
        >
          {routesMap.main.name}
        </Link>
        {routes.map((route, index) => {
          if (!isTruthy(route)) {
            return null;
          }

          const routeTo = routes.slice(0, index + 1).join('/');
          const routeName = routesMap[route].name;

          const isLast = index === routes.length - 1;

          return isLast ? (
            <Typography key={index} color="textPrimary">
              {routeName}
            </Typography>
          ) : (
            <Link key={index} color="inherit" href={routeTo} onClick={(e: EventType) => handleClick(e, routeTo)}>
              {routeName}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
};
