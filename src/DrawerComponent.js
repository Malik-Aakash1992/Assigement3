import React, { useState } from 'react'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const arrayPages = ["Home", "About", "Portfolio", "Pages", "Blog", "Contact", "Lets Talk"];
const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ background: "#0b0952" }}>
                    {arrayPages.map((page, index) => (
                        <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                            <ListItemIcon>
                                <ListItemText sx={{ color: "white" }}>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComponent