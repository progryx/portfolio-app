import React from 'react';
import { useSelector } from 'react-redux';

import { coreActions, coreSelectors } from '@reducers/core';
import { selectPcTypeActions } from '@reducers/selectPcType';
import { useDispatch } from '@reducers/store';
import { QuizSelector, useWizard } from '@src/components';
import { Steps } from '@src/pages';

export const SelectType: React.FC = () => {
  const { goTo } = useWizard();
  const { items, topic } = useSelector(coreSelectors.getCurrentStepInfo);

  const dispatch = useDispatch();

  const handleSelectItem = (id: string) => {
    dispatch(selectPcTypeActions.selectItem({ id }));
    dispatch(coreActions.setStep('selectPcPrice'));
    goTo(Steps.SelectPrice);
  };

  return <QuizSelector items={items} topic={topic} handleSelectItem={handleSelectItem} />;
};
