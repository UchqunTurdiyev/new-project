import { Button, Menu, MenuItem } from '@material-ui/core';
import React, { MouseEvent } from 'react';
import { useState } from 'react';

export const NavMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleOpen = (evt: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(evt.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className='md:!hidden'>
			<Button onClick={handleOpen} className='!capitalize !text-white'>
				Browse
			</Button>
			<Menu open={open} anchorEl={anchorEl} onClick={handleClose} className='!absolute !top-10'>
				<MenuItem>Home</MenuItem>
				<MenuItem>Movies</MenuItem>
				<MenuItem>TV Show</MenuItem>
				<MenuItem>New</MenuItem>
				<MenuItem>Popular</MenuItem>
			</Menu>
		</div>
	);
};
