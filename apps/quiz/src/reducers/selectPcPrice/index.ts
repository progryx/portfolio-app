import HighPrice from '@assets/images/high_price.png';
import LowPrice from '@assets/images/low_price.jpg';
import MediumPrice from '@assets/images/medium_price.png';
import { generateId, PropertiesTypes } from '@portfolio-app/utilities';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { QuizStepState } from '../core';

export type SelectPcPriceActions = ReturnType<PropertiesTypes<typeof selectPcPriceActions>>;

export type SelectPcPriceSystemId = 'lowPrice' | 'mediumPrice' | 'highPrice';

export const initialState: QuizStepState<SelectPcPriceSystemId> = {
  topic: 'В каком ценовом сегменте вы хотите компьютер?',
  items: [
    {
      id: generateId(),
      systemId: 'lowPrice',
      name: 'Низкий ценовой сегмент',
      description: 'Чем дешевле - тем лучше. Качество не волнует',
      image: LowPrice,
    },
    {
      id: generateId(),
      systemId: 'mediumPrice',
      name: 'Средний ценовой сегмент',
      description: 'Можно и немного потратиться, раз уж новый компьютер',
      image: MediumPrice,
    },
    {
      id: generateId(),
      systemId: 'highPrice',
      name: 'Высокий ценовой сегмент',
      description: 'Стоимость не волнует. Покажите самое лушее, что есть на рынке.',
      image: HighPrice,
    },
  ],
};

export const selectPcPriceSlice = createSlice({
  name: 'selectPcPrice',
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

export const selectPcPriceActions = {
  ...selectPcPriceSlice.actions,
};
