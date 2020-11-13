import { PropertiesTypes } from '@portfolio-app/utilities';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getByPrice } from '@src/helpers';

import { RootState } from '..';
import { SelectPcPriceSystemId } from '../selectPcPrice';
import { SelectPcTasksSystemId } from '../selectPcTasks';
import { SelectPcTypeSystemId } from '../selectPcType';

export type CoreActions = ReturnType<PropertiesTypes<typeof coreActions>>;

const steps = ['selectPcType', 'selectPcPrice', 'selectPcTasks'] as const;

type Steps = typeof steps[number];

export type SystemsIds = SelectPcPriceSystemId | SelectPcTasksSystemId | SelectPcTypeSystemId;

export type Item<SystemId> = {
  id: string;
  systemId: SystemId;
  name: string;
  description: string;
  image: string;
};

export type QuizStepState<SystemId> = {
  topic: string;
  items: Item<SystemId>[];
  selectedItem?: string;
};

export type CoreState = {
  currentStep: Steps;
};

export const initialState: CoreState = {
  currentStep: 'selectPcType',
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setStep: (state, { payload }: PayloadAction<Steps>) => {
      return {
        ...state,
        currentStep: payload,
      };
    },
  },
});

export const coreSelectors = {
  getCurrentStepInfo: (state: RootState) => ({
    items: state[state.core.currentStep].items,
    selectedItem: state[state.core.currentStep].selectedItem,
    topic: state[state.core.currentStep].topic,
  }),

  getSelectedItems: (state: RootState) => {
    // const selectedType = state.selectPcType.items.find(
    //   (item) => item.id === state.selectPcType.selectedItem
    // );

    // const selectedTasks = state.selectPcTasks.items.find(
    //   (item) => item.id === state.selectPcTasks.selectedItem
    // );

    const selectedPrice = state.selectPcPrice.items.find(
      (item) => item.id === state.selectPcPrice.selectedItem
    );

    const processor = getByPrice('processor', selectedPrice);

    return processor;
  },
};

export const coreActions = {
  ...coreSlice.actions,
};
