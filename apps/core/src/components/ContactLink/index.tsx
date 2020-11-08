import React, { ComponentType } from 'react';

import { Link } from '@material-ui/core';

import styles from './styles.module.scss';

type Props = {
  contactHref: string;
  contactText: string;
  Icon?: ComponentType<{ className?: string }>;
};

export const ContactLink: React.FC<Props> = ({ contactHref, contactText, Icon }) => {
  return (
    <div className={styles.contactLink__contact}>
      {Icon && <Icon className={styles.contactLink__contactIcon} />}
      <Link variant="body2" href={contactHref}>
        {contactText}
      </Link>
    </div>
  );
};
