import {AppBar, Toolbar, IconButton} from '@mui/material';
import stacklineLogo from '@assets/stackline_logo.svg';

const Header = () => {
    return (
        <AppBar position="static">
        <Toolbar sx={{backgroundColor: '#052750'}} >
            <IconButton edge="start"  color="inherit" aria-label="Stackline Homepage" href="https://www.stackline.com/" target="_blank">
                <img
                    className="w-32 h-auto"
                    src={stacklineLogo}
                    alt="Stackline logo"
                />
            </IconButton>
        </Toolbar>
    </AppBar>
    );
};

export default Header;