import React,{useState, useImperativeHandle, forwardRef} from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CloseIcon from '@material-ui/icons/Close';

const useStyles =  makeStyles(() => ({
  listContainer: {
    backgroundColor: '#00001e',
    height: '100%',
    width: 500,
    color: "#fff"
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

const SideBar = forwardRef((props, ref) => { 
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme)
  //const{toggleDrawer, show} = props;

  const [state, setState] = useState({
    show: false
  });

  const toggleDrawer = open => (event) => {
    console.log(open)
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, show: open });
  };
  const exToggleDrawer = (open) =>{
    setState({ ...state, show: open });
  }
  useImperativeHandle(ref, () => {
    return {
      exToggleDrawer: exToggleDrawer
    };
  });

  const list = () => (
    <div
      className={clsx(classes.listContainer)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={clsx(classes.closeIconContainer)}>
        <CloseIcon
          className={clsx(classes.closeIcon)}

        />
      </div>
      <List
        className={clsx(classes.list)}
      >
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}
            className={clsx(classes.listItem)}
          >
            <ListItemIcon className={clsx(classes.icons)}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        className={clsx(classes.list)}
      >
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}
          className={clsx(classes.listItem)}
          >
            <ListItemIcon className={clsx(classes.icons)}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"side-bar"}>
        <SwipeableDrawer
          open={state.show}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
});

export default SideBar;