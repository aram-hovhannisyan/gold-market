import React from 'react'
import css from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
// import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Header = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        // borderRadius: theme.shape.borderRadius,
        // backgroundColor: alpha(theme.palette.common.white, 0.15),
        // '&:hover': {
        //     backgroundColor: alpha(theme.palette.common.white, 0.25),
        // },
        // marginLeft: 0,
        // width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(1),
        //     width: 'auto',
        // },
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        borderRadius: '50px',
        width: '300px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        width: '30px',
        height: '30px',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'aliceblue',
        backgroundColor: '#0008C1',
        borderRadius: '50%',
        margin: '0 3px',
        cursor: 'pointer'
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            // padding: theme.spacing(1, 0, 0, 1),
            // vertical padding + font size from searchIcon
            // paddingLeft: `calc(1em + ${theme.spacing(5)})`,
            // transition: theme.transitions.create('width'),
            // width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '32ch',
                // '&:focus': {
                //     width: '25ch',
                // },
            },
        },
    }));

    return (
        <div className={css.header}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Поиск"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </div >
    )
}

export default Header