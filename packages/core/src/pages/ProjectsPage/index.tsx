import React from 'react';

import { TabPanel } from '@material-ui/lab';
import { useNavigation } from '@src/hooks/useNavigation';
// import styles from './styles.scss';

export const ProjectsPage: React.FC = () => {
  const currentTab = useNavigation('1');

  return (
    <TabPanel value={currentTab}>
      <h2>Projects page</h2>
    </TabPanel>
  );
};
