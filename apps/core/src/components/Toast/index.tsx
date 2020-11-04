import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { coreActions } from '@reducers/core';
import { useDispatch } from '@reducers/store';

type Props = {
  showToast: boolean;
  type: AlertProps['severity'];
  message: string;
};

const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const Toast: React.FC<Props> = ({ showToast, type, message }) => {
  const [isOpen, setIsOpen] = React.useState(showToast);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsOpen(true);
  }, [showToast]);

  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    dispatch(coreActions.setMessage({ message: null }));

    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};
