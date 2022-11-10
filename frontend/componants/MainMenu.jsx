import React, { useState, useReducer } from "react"
import { Drawer, List,ListItem,ListItemButton, ListItemText, IconButton, Collapse} from "@mui/material";
import { Menu as MenuIcon , ExpandLess , ExpandMore } from '@mui/icons-material/'
import useFetch from "../custom_hooks/useFetch"
import styles from "../style/MainMenu.module.scss"

const MainList = (props)=>{
  const [Openstates , dispath ] = useReducer( (state, index) => { return state ^ (1 << index);} , 0)
  const getOpenState = (index) => { return Openstates & ( 1 << index)};
  return <List> 
            { 
              Object.keys(props.data).map((key, i) => (
              <div key={ i+ "main "} > 
              <ListItem  >
                <ListItemButton onClick={()=>( dispath(i) )}>
                  <ListItemText inset  primary={key} />
                  { (props.data[key].length > 0) 
                      ? (getOpenState(i) ? <ExpandLess /> : <ExpandMore />)
                      : null
                  }
                </ListItemButton>
              </ListItem>
              {
                (props.data[key].length > 0) && <SubList key={"rootsub"+i} data={props.data[key]} open={getOpenState(i)} />
              }
              </div>
              ))
            }
          </List>;
}

const SubList = (props)=>{
  return  <Collapse in={!!props.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                  {
                    props.data.map( (value , j)=>(
                      <ListItem key={j.toString()} sx={{pl : 6}}>
                        <ListItemButton >
                          <ListItemText inset primary={value} />
                        </ListItemButton>
                      </ListItem>
                    ))
                  }
              </List>
          </Collapse>
}


const MainMenu = (props)=>{
  const [open, setOpen] = useState(false);
  const { data ,loading , error } = useFetch("/api/NavBar");

  if(loading || error || !data ) return null;

  return <div className={props.renderedClass}>
              <IconButton aria-label="nav" size="large" onClick={()=>{setOpen(true)}}>
                <MenuIcon fontSize="large" sx={{color: props.color}}/>
              </IconButton>
              <Drawer open={open}  containerStyle={styles.drawer} anchor={"left"} onClose={() => setOpen(false)}>
                <MainList data={data}/>
              </Drawer>
          </div> ;
}


export default MainMenu;