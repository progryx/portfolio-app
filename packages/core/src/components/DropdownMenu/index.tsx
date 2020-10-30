import React from 'react';

import { Box, Button, ButtonProps, Menu, MenuItem } from '@material-ui/core';

export type MenuItem = {
  description: string;
  handleClickItem: () => void;
};

type Props = {
  items: MenuItem[];
  linkMenuText: string;
  buttonIcon?: ButtonProps['startIcon'];
  buttonSize?: ButtonProps['size'];
  buttonColor?: ButtonProps['color'];
  buttonClassName?: string;
};

export const DropdownMenu: React.FC<Props> = ({
  items,
  linkMenuText,
  buttonIcon,
  buttonColor,
  buttonSize,
  buttonClassName,
}) => {
  const [element, setElement] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setElement(event.currentTarget);
  };

  const handleClose = () => {
    setElement(null);
  };

  return (
    <Box m={1} p={1}>
      <Button
        variant="contained"
        color={buttonColor}
        startIcon={buttonIcon}
        onClick={handleClick}
        size={buttonSize}
        className={buttonClassName}
      >
        {linkMenuText}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={element}
        keepMounted
        open={Boolean(element)}
        onClose={handleClose}
      >
        {items.map(({ description, handleClickItem }, index) => {
          return (
            <MenuItem key={index} onClick={handleClickItem}>
              {description}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
