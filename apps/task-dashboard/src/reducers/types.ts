const priorities = ['low', 'normal', 'high'] as const;

const types = ['error', 'new', 'mod', 'm/e'] as const;

export const statuses = ['TODO', 'DEV', 'RFT', 'PROD'] as const;

const projects = ['Когнитив.МЗИК', 'RNS Web', 'Когнитив.Роснефть'] as const;

export const ItemTypes = {
  CARD: 'card',
} as const;

export type TaskPriority = typeof priorities[number];
export type TaskType = typeof types[number];
export type StatusType = typeof statuses[number];
export type ProjectType = typeof projects[number];

export type TaskData = {
  number: string;
  type: TaskType;
  priority: TaskPriority;
  description: string;
};

export type CardData = {
  id: string;
  projectName: ProjectType;
  taskData: TaskData;
  tags: Array<string>;
  status: StatusType;
};

export type Cards = Array<CardData>;

export type DashboardData = {
  cards: Cards;
};

export type MoveCardParams = {
  id: string;
  status: {
    from: StatusType;
    to: StatusType;
  };
};

export type DragItem = {
  type: typeof ItemTypes['CARD'];
  id: string;
  status: StatusType;
};
