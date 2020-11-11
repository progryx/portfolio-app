import React from 'react';

import {
  Avatar as MListAvatar,
  List as MList,
  ListItem as MListItem,
  ListItemAvatar as MListItemAvatar,
  ListItemIcon as MListItemIcon,
  ListItemText as MListItemText,
} from '@material-ui/core';
import { isDefined } from '@portfolio-app/utilities';

export type ListItem = {
  description: string | JSX.Element;
  secondaryDescription?: string | JSX.Element;
  Icon?: JSX.Element;
  iconClassname?: string;
  listAvatar?: JSX.Element;
  onClick?: () => void;
  href?: string;
};

type Props = {
  items: ListItem[];
};

export const List: React.FC<Props> = ({ items }) => {
  return (
    <MList>
      {items.map(
        (
          { description, Icon, iconClassname, secondaryDescription, listAvatar, onClick, href },
          index
        ) => {
          const ListItem: React.FC = ({ children }) => {
            return isDefined(onClick) && isDefined(href) ? (
              <MListItem key={index} button component="a" onClick={onClick} href={href}>
                {children}
              </MListItem>
            ) : (
              <MListItem key={index}>{children}</MListItem>
            );
          };

          return (
            <ListItem>
              {Icon && <MListItemIcon className={iconClassname}>{Icon}</MListItemIcon>}
              {listAvatar && (
                <MListItemAvatar>
                  <MListAvatar>{listAvatar}</MListAvatar>
                </MListItemAvatar>
              )}
              <MListItemText primary={description} secondary={secondaryDescription} />
            </ListItem>
          );
        }
      )}
    </MList>
  );
};
