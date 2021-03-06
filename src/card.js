import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    maxWidth: 400,
    backgroundColor: '#01579B'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 28,
    color: '#fff'
  },
  pos: {
    fontSize: 20,
    fontWeight: 1000,
    color: '#0acdf5'
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          {props.title}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography className={classes.pos}variant="body2" component="p">
        {props.value ? numberWithCommas(props.value) : 'N/A'}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
