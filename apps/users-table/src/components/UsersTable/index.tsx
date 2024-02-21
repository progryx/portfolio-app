import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Checkbox,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { actions, mainSelectors } from '@reducers/main';

export const UsersTable: React.FC = (_props) => {
  const tableData = useSelector(mainSelectors.getTableData);
  const serverMessage = useSelector(mainSelectors.getServerMessage);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getUsers());
  }, []);

  if (serverMessage !== '') {
    return <Alert severity="error">{serverMessage}</Alert>;
  }

  if (tableData.items.length === 0) {
    return <CircularProgress style={{ marginLeft: '45%', marginTop: '20%' }} />;
  }

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  color="secondary"
                  checked={tableData.isSelectedAll}
                  onChange={() => {
                    dispatch(actions.selectAllUsers(!tableData.isSelectedAll));
                  }}
                />
              </TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.items.map((row) => (
              <TableRow key={row.id} selected={row.checked}>
                <TableCell align="left">
                  <Checkbox
                    color="primary"
                    checked={row.checked}
                    onChange={() => {
                      dispatch(actions.selectUser(row.id));
                    }}
                  />
                </TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <caption>
            <Typography variant="h6">
              Users:{' '}
              {tableData.items
                .filter((user) => user.checked)
                .map((user, index, arr) => (index !== arr.length - 1 ? `${user.firstName}, ` : user.firstName))}
            </Typography>
          </caption>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};
