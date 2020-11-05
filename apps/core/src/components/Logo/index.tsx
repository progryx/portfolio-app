import React from 'react';

import styles from './styles.scss';

type Props = {
  onClick: () => void;
  href: string;
};

export const Logo: React.FC<Props> = ({ onClick, href }) => {
  return (
    <a href={href} className={styles.logo} onClick={onClick}>
      {' '}
    </a>
  );
};
