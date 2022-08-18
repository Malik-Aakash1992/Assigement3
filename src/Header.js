import { Toolbar, AppBar, Tabs, Tab, Button, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import DrawerComponent from './DrawerComponent';
import logo from './logo.png';
const arrayPages = ["Home", "About", "Portfolio", "Pages", "Blog", "Contact"];
const Header = () => {
    const { Value, setValue } = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <React.Fragment >
            <AppBar sx={{ background: "#0b0952" }}>
                <Toolbar>
                    <img sx={{ innerWidth: "100px", innerHeight: "100px" }} src={logo} alt="Logo" />
                    {
                        isMatch ? (
                            <>
                                <DrawerComponent />
                            </>
                        ) : (
                            <>
                                <Tabs sx={{ marginLeft: "auto" }} textColor="inherit" value={Value} onChange={(e, Value) => setValue(Value)}
                                    indicatorColor="secondary">
                                    {arrayPages.map((page, index) => (<Tab key={index} label={page} />))}
                                </Tabs>
                                <Button sx={{ marginLeft: "auto" }} variant="contained">Lets Talk</Button>
                            </>
                        )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>

    );
};
export default Header;
