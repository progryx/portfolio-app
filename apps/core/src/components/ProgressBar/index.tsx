import React from 'react';

import {
  Box,
  createMuiTheme,
  createStyles,
  LinearProgress,
  LinearProgressProps,
  Theme,
  ThemeProvider,
  Typography,
  withStyles,
} from '@material-ui/core';

import styles from './styles.module.scss';

type LinearProgressWithLabel = LinearProgressProps & {
  value: number;
  skill: string;
  Icon?: JSX.Element;
};

const ProgressBarTheme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
});

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  })
)(LinearProgress);

export const ProgressBar = (props: LinearProgressWithLabel) => {
  const { skill, value, Icon } = props;

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (progress < value) {
      setProgress(progress + 1);
    }
  }, [progress, value]);
  return (
    <ThemeProvider theme={ProgressBarTheme}>
      <Box width="100%" display="flex" mr={1} className={styles.progressBar__labelWithIcon}>
        {Icon}
        <p className={styles.progressBar__textLabel}>{skill}</p>
      </Box>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <BorderLinearProgress variant="determinate" value={progress} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            progress
          )}%`}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
