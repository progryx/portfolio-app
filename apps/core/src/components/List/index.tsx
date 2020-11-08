import React from 'react';

import {
  Avatar as MListAvatar,
  List as MList,
  ListItem as MListItem,
  ListItemAvatar as MListItemAvatar,
  ListItemIcon as MListItemIcon,
  ListItemText as MListItemText,
} from '@material-ui/core';

export type ListItem = {
  description: string | JSX.Element;
  secondaryDescription?: string | JSX.Element;
  Icon?: JSX.Element;
  iconClassname?: string;
  listAvatar?: JSX.Element;
};

type Props = {
  items: ListItem[];
};

export const List: React.FC<Props> = ({ items }) => {
  return (
    <MList>
      {items.map(
        ({ description, Icon, iconClassname, secondaryDescription, listAvatar }, index) => (
          <MListItem key={index}>
            {Icon && <MListItemIcon className={iconClassname}>{Icon}</MListItemIcon>}
            {listAvatar && (
              <MListItemAvatar>
                <MListAvatar>{listAvatar}</MListAvatar>
              </MListItemAvatar>
            )}
            <MListItemText primary={description} secondary={secondaryDescription} />
          </MListItem>
        )
      )}
    </MList>
  );
};
