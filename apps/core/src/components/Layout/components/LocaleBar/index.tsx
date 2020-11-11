import React from 'react';

import TranslateIcon from '@material-ui/icons/Translate';
import { coreActions, coreSelectors } from '@reducers/core';
import { useDispatch, useSelector } from '@reducers/store';
import cn from 'classnames';

import { DropdownMenu, MenuItem } from '@components/DropdownMenu';

import styles from './styles.scss';

type Props = {
  className?: string;
};

export const LocaleBar: React.FC<Props> = ({ className }) => {
  const currentLocale = useSelector(coreSelectors.getCurrentLangName);

  const dispatch = useDispatch();

  const localesList: MenuItem[] = [
    {
      description: 'English',
      handleClickItem: () => dispatch(coreActions.setLanguage({ lang: 'EN' })),
    },
    {
      description: 'Русский',
      handleClickItem: () => dispatch(coreActions.setLanguage({ lang: 'RU' })),
    },
  ];

  return (
    <DropdownMenu
      buttonClassName={cn(styles.localesList, className)}
      items={localesList}
      linkMenuText={currentLocale}
      buttonColor="inherit"
      buttonVariant="text"
      buttonIcon={<TranslateIcon />}
    />
  );
};
