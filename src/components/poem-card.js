import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  firstPoemRow: {
    minWidth: 275,
    flexShrink: 1,
    flexGrow: 1,
    maxWidth: '22%',
    margin: '4.5rem 0 0 0'
  },
  secondPoemRow:{
    minWidth: 275,
    flexShrink: 1,
    flexGrow: 1,
    maxWidth: '22%',
    margin: '-9rem 0 0 0'
  }
});

export default function PoemCard(props) {
  const {title, body, date, position} = props;

  const classes = useStyles();

  return (
    <Card className={position < 4 ?  classes.firstPoemRow : classes.secondPoemRow } variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {date}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}