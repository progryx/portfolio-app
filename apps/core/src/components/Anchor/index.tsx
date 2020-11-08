import React from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

type Props = {
  id: string;
  className?: string;
};

export const Anchor: React.FC<Props> = ({ id, className }) => {
  return (
    <a id={id} className={cn(styles.anchor, className)}>
      {' '}
    </a>
  );
};
