import React from 'react';

import { Box, Divider, Typography } from '@material-ui/core';
import { Cake, LocationOn, School } from '@material-ui/icons';
import { coreSelectors } from '@reducers/core';
import { useSelector } from '@reducers/store';
import { List, ListItem } from '@src/components';
import { useLocale } from '@src/hooks';
import { getYearsFromDate } from '@src/utilities';

export function InfoBlock() {
  const localedText = useLocale();
  const isEnLocale = useSelector(coreSelectors.isEnLanguage);

  const yearsCount = getYearsFromDate(new Date(1994, 8, 4));

  const aboutMeInfo: ListItem[] = [
    {
      description: localedText('birthdateText'),
      secondaryDescription: `${localedText('birthDateInfo')}\u00A0(${yearsCount} ${isEnLocale ? 'y.o' : 'лет'})`,
      listAvatar: <Cake />,
    },
    {
      description: localedText('locationText'),
      secondaryDescription: localedText('locationPlace'),
      listAvatar: <LocationOn />,
    },
    {
      description: localedText('educationText'),
      secondaryDescription: localedText('educationInfo'),
      listAvatar: <School />,
    },
  ];

  return (
    <Box m={1} p={1}>
      <Typography variant="body2" color="textSecondary" component="p">
        {localedText('aboutMe')}
      </Typography>
      <Divider />
      <List items={aboutMeInfo} />
    </Box>
  );
}
