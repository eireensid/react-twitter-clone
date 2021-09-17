import React from 'react';

import { useHomeStyles } from '../pages/Home/theme';
import { Divider, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectIsTopicsLoaded, selectTopicsItems } from '../store/ducks/topics/selectors';
import { Link } from 'react-router-dom';

interface TopicsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Topics: React.FC<TopicsProps> = ({
  classes,
}): React.ReactElement | null => {
  const items = useSelector(selectTopicsItems)
  const isLoaded = useSelector(selectIsTopicsLoaded)

  if (!isLoaded) {
    return null
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((obj) => (
          <React.Fragment key={obj._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${obj.name}`}>
                <ListItemText
                  primary={obj.name}
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      Твитов: {obj.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper> 
  );
};