import React from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

type Props = {
  href: string;
};

export const Logo: React.FC<Props> = ({ href }) => {
  return (
    <Link href={href}>
      <a className={styles.logo}> </a>
    </Link>
  );
};
