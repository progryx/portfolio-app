import { CardData } from './types';

type MockData = Array<Omit<CardData, 'id'>>;

export const mockData: MockData = [
  {
    projectName: 'Когнитив.МЗИК',
    taskData: {
      number: '№ 259',
      type: 'new',
      priority: 'low',
      description: 'При согласовании изменения договора Руководителем выходит сообщение об ошибке',
    },
    tags: ['C.M'],
    status: 'TODO',
  },
  {
    projectName: 'RNS Web',
    taskData: {
      number: '№ 2897',
      type: 'new',
      priority: 'normal',
      description: '"Важность" в сообщениях',
    },
    tags: ['C.M'],
    status: 'DEV',
  },
  {
    projectName: 'Когнитив.Роснефть',
    taskData: {
      number: '№ 2',
      type: 'mod',
      priority: 'high',
      description: '"Важность" в сообщениях',
    },
    tags: ['C.M'],
    status: 'RFT',
  },
  {
    projectName: 'RNS Web',
    taskData: {
      number: '№ 2896',
      type: 'mod',
      priority: 'low',
      description: 'Перенести кнопку "Выход" в меню из настроек',
    },
    tags: ['C.M'],
    status: 'PROD',
  },
  {
    projectName: 'RNS Web',
    taskData: {
      number: '№ 258',
      type: 'm/e',
      priority: 'normal',
      description: 'В форме "Исполнение договора" должны отображаться данные.',
    },
    tags: ['C.M'],
    status: 'TODO',
  },
  {
    projectName: 'Когнитив.МЗИК',
    taskData: {
      number: '№ 168',
      type: 'new',
      priority: 'high',
      description: 'Интеграция с ЕЭТП. Запрос на разъяснение положений закупочной документации',
    },
    tags: ['C.M'],
    status: 'DEV',
  },
];
