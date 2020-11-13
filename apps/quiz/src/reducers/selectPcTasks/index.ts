import AdvancedTasks from '@assets/images/advanced_tasks.png';
import CommonTasks from '@assets/images/common_tasks.png';
import GamingTasks from '@assets/images/gaming_tasks.jpg';
import { generateId, PropertiesTypes } from '@portfolio-app/utilities';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { QuizStepState } from '../core';

export type SelectPcTasksActions = ReturnType<PropertiesTypes<typeof selectPcTasksActions>>;

export type SelectPcTasksSystemId = 'standard' | 'extended' | 'professional';

export const initialState: QuizStepState<SelectPcTasksSystemId> = {
  topic: 'Для каких задач вам нужен компьютер?',
  items: [
    {
      id: generateId(),
      systemId: 'standard',
      name: 'Стандартые задачи',
      description:
        'Серфинг в интернете, просмотр фильмов и сериалов в стандартном качестве, олайн-шоппиг, создание и редактирование документов (Word, Excel и т.д)',
      image: CommonTasks,
    },
    {
      id: generateId(),
      systemId: 'extended',
      name: 'Расширенные задачи',
      description:
        'Активный серфинг в интернете (большое количество вкладок), просмотр фильмов в высоком качестве, создание программ или работа со средним и большим объемом даных.',
      image: AdvancedTasks,
    },
    {
      id: generateId(),
      systemId: 'professional',
      name: 'Профессиоальные задачи',
      description:
        'Играть в современные игры на высоких настройках графики, редактирование в Photoshop, просмтр фильмов в UHD качестве, работа с огромыми объемами данных',
      image: GamingTasks,
    },
  ],
};

export const selectPcTasksSlice = createSlice({
  name: 'selectPcTasks',
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

export const selectPcTasksActions = {
  ...selectPcTasksSlice.actions,
};
