import { ConfigurationItem, configurations } from '@constants/configurations';
import { QuizStepState } from '@reducers/core';
import { SelectPcPriceSystemId as SelectedPrice } from '@reducers/selectPcPrice';

export const getByPrice = (
  type: ConfigurationItem['type'],
  selectedPrice: QuizStepState<SelectedPrice>['items'][number] | undefined
) => {
  return configurations
    .filter((item) => item.type === type)
    .find((item) => {
      if (!selectedPrice) {
        return null;
      }

      switch (selectedPrice.systemId) {
        case 'lowPrice': {
          return item.price <= 4000;
        }

        case 'mediumPrice': {
          return item.price <= 10000;
        }

        case 'highPrice': {
          return item.price > 10000;
        }

        default: {
          return null;
        }
      }
    });
};
