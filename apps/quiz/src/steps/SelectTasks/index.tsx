import React from 'react';
import { useSelector } from 'react-redux';

import { coreSelectors } from '@reducers/core';
import { selectPcTasksActions } from '@reducers/selectPcTasks';
import { useDispatch } from '@reducers/store';
import { QuizSelector, useWizard } from '@src/components';
import { Steps } from '@src/pages';

export const SelectTasks: React.FC = () => {
  const { goTo } = useWizard();
  const { items, topic } = useSelector(coreSelectors.getCurrentStepInfo);

  const dispatch = useDispatch();

  const handleSelectItem = (id: string) => {
    dispatch(selectPcTasksActions.selectItem({ id }));
    //  dispatch(coreActions.setStep('selectPcTasks'));
    goTo(Steps.ShowResults);
  };

  return <QuizSelector items={items} topic={topic} handleSelectItem={handleSelectItem} />;
};
