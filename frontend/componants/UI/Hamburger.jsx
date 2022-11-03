import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, ListItem, ListItemIcon, ListItemText, Button, IconButton } from "@mui/material";
import { useState , useEffect } from 'react'

const data = [
  { name: "Home", icon: <MenuIcon />},
  { name: "Inbox", icon: <MenuIcon /> },
  { name: "Outbox", icon: <MenuIcon /> },
  { name: "Sent mail", icon: <MenuIcon /> },
  { name: "Draft", icon: <MenuIcon /> },
  { name: "Trash", icon: <MenuIcon /> },
];

export default function Hamburger(){
  const [open, setOpen] = useState(false);
  const getList = () => (
    <div onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  
  return (
    <div>
      <IconButton aria-label="nav" size="medium" onClick={()=>{setOpen(true)}}>
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  );
}
