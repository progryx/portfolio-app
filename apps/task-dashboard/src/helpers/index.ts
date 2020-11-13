import { statuses, StatusType } from '@reducers/types';

export const isColumnStatusValidForDrop = (statusFrom: StatusType, statusTo: StatusType) => {
  const indexFrom = statuses.indexOf(statusFrom);
  const indexTo = statuses.indexOf(statusTo);

  return (indexTo === 0 && indexFrom === statuses.length - 1) || indexFrom === indexTo - 1;
};
