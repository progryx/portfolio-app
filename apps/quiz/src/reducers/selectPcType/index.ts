import GamingPC from '@assets/images/gaming_pc.png';
import OfficePC from '@assets/images/office_pc.jpg';
import { generateId, PropertiesTypes } from '@portfolio-app/utilities';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { QuizStepState } from '../core';

export type SelectPcTypeActions = ReturnType<PropertiesTypes<typeof selectPcTypeActions>>;

export type SelectPcTypeSystemId = 'officePC' | 'gamingPC';

export const initialState: QuizStepState<SelectPcTypeSystemId> = {
  topic: 'Какой компьютер вам нужен?',
  items: [
    {
      id: generateId(),
      systemId: 'officePC',
      name: 'Обычный офисный компьютер',
      description: 'Я хочу обычный компьютер для типовых задач',
      image: OfficePC,
    },
    {
      id: generateId(),
      systemId: 'gamingPC',
      name: 'Игровой компьютер',
      description: 'Я хочу мощный компьютер для нестандартных задач или игр',
      image: GamingPC,
    },
  ],
};

export const selectPcTypeSlice = createSlice({
  name: 'selectPcType',
  initialState,
  reducers: {
    selectItem: (state, { payload }: PayloadAction<{ id: string }>) => {
      return {
        ...state,
        selectedItem: payload.id,
      };
    },
  },
});

export const selectPcTypeActions = {
  ...selectPcTypeSlice.actions,
};
