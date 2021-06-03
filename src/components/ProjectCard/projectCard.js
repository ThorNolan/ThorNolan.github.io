import * as React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "./projectCard.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    margin: '1.3rem',
  },
  media: {
    height: 0,
    paddingBottom: '47%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


const ProjectCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        children
        className={classes.media}
        title={props.title}
      >
        <video src={props.src} width='100%' height='auto' autoPlay loop muted playsInline/>
      </CardMedia>
      <CardContent className="card-body">
        <Typography variant="body2" component="h5" className="client-title">
          {props.title}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Project Details"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit className="card-collapse">
        <CardContent className="collapse-content">
          <Typography paragraph>
            {props.desc}
          </Typography>
          {props.repo
            ?
            <div className="card-action">
              <a href={props.link} target="_blank" rel="noreferrer">[deployed]</a><a href={props.repo} target="_blank" rel="noreferrer">[github repo]</a>
            </div>
            :
            <div className="card-action">
              <a href={props.link} target="_blank" rel="noreferrer">[visit the site]</a>
            </div>
          }
        </CardContent>
      </Collapse>
    </Card>
  )
}

ProjectCard.defaultProps = {
  expanded: false,
}

ProjectCard.propTypes = {
  expanded: PropTypes.bool,
}

export default ProjectCard
