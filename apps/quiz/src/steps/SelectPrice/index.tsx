import React from 'react';
import { useSelector } from 'react-redux';

import { coreActions, coreSelectors } from '@reducers/core';
import { selectPcPriceActions } from '@reducers/selectPcPrice';
import { useDispatch } from '@reducers/store';
import { QuizSelector, useWizard } from '@src/components';
import { Steps } from '@src/pages';

export const SelectPrice: React.FC = () => {
  const { goTo } = useWizard();

  const { items, topic } = useSelector(coreSelectors.getCurrentStepInfo);

  const dispatch = useDispatch();

  const handleSelectItem = (id: string) => {
    dispatch(selectPcPriceActions.selectItem({ id }));
    dispatch(coreActions.setStep('selectPcTasks'));
    goTo(Steps.SelectTasks);
  };

  return <QuizSelector items={items} topic={topic} handleSelectItem={handleSelectItem} />;
};
