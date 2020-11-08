import React from 'react';

import { coreSelectors } from '@reducers/core';
import { useSelector } from '@reducers/store';

import { Toast } from '@components/Toast';

export const useToast = () => {
  const toastMessage = useSelector(coreSelectors.getToastMessage);

  const [showToast, setShowToast] = React.useState(false);

  React.useEffect(() => {
    setShowToast(true);
  }, [toastMessage]);

  return toastMessage && <Toast showToast={showToast} type="success" message={toastMessage} />;
};
