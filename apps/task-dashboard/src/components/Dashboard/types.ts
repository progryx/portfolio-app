import { Cards, MoveCardParams, StatusType } from '@reducers/types';

export type MapDispatchPropsType = {
  getCards: () => void;
  moveCard: (params: MoveCardParams) => void;
};

export type MapStatePropsType = {
  cardsByGroup: Array<{
    status: StatusType;
    cards: Cards;
  }>;
  serverMessage: string;
  isPageReady: boolean;
};

export type DashboardComponentProps = MapStatePropsType & MapDispatchPropsType;
