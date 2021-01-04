import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const barOptions = [
  {
    'name' : 'Para el alma',
    'compoment': [
      {
        'title': 'Demo Poem',
        'date': '01/01/2021',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        'title': 'Demo Poem 2',
        'date': '01/01/2021',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      {
        'title': 'Demo Poem 3',
        'date': '01/01/2021',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      }
    ]
  },
  {
    'name' : 'Para el corazon',
    'compoment': 'demo'
  }

]

const useStyles =  makeStyles(() => ({

  listContainer: {
    position: 'fixed',
    top: '4rem',
    backgroundColor: '#272c34',
    height: '100%',
    width: 500,
    color: "#fff",
    fontFamily: 'var(--secondary-font)'
  },
  list: {
    paddingLeft: '8px'
  },
  listItem:{
    opacity: 0.7,
    '&:hover':{
      opacity: 1
    }
  },
  icons: {
    color: '#fff',
  },
  fullList: {
    width: "auto"
  },
  closeIconContainer:{
    display: 'flex',
    justifyContent: 'flex-end'
  },
  closeIcon: {
    color: '#fff',
    padding: '1.5rem 1rem 0',
    width: '1.5rem',
    height: '1.5rem',
    cursor: 'pointer'
  }
}));

const SideBar = (props) =>{
  const classes = useStyles();
  const {show, setShow} = props;

  const toggleDrawer = open => (event) => {
    console.log(open)
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShow(open);
  };
 
  const list = () => (
    <div
      className={clsx(classes.listContainer)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        className={clsx(classes.list)}
      >
        {barOptions.map((obj, index) => (
          <ListItem button key={obj.name}
            className={clsx(classes.listItem)}
            // onClick={}
          >
            <ListItemIcon className={clsx(classes.icons)}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={obj.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      open={show}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      transitionDuration={300}
    >
      {list()}
    </SwipeableDrawer>
  );
};

export default SideBar;