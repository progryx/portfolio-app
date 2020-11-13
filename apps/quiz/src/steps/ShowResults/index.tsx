import React from 'react';
import { useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import { coreSelectors } from '@reducers/core';

import { ResultItem } from './components/ResultItem';

export const ShowResults: React.FC = () => {
  const item = useSelector(coreSelectors.getSelectedItems);

  if (!item) {
    return <Typography>Не удалось подобрать конфигурацию</Typography>;
  }

  return (
    <>
      <Typography>Ваша конфигурация готова!</Typography>
      <ResultItem item={item} />
    </>
  );
};
