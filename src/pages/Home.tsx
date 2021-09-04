import React from 'react';
import { Container, Grid, IconButton, Typography, Paper, makeStyles, Theme, withStyles, InputBase, createStyles } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import grey from '@material-ui/core/colors/grey';
import { Tweet } from '../components/Tweet';


export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh'
  },
  logo: {
    margin: '10px 0'
  },
  logoIcon: {
    fontSize: 36
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main
        }
      },
    },

    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out'
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  TweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0
  },
  tweetsHeader: {
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderRadius: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 800
    }
  },
  tweet: {
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)'
    }
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -13,
    justifyContent: 'space-between',
    width: 450
  },
  tweetUserName: {
    color: grey[500]
  }

}))

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      height: 45,
      padding: 0,
    },
  }),
)(InputBase);


export const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton className={classes.logo} aria-label="" color="primary">
                <TwitterIcon className={classes.logoIcon} />
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <div>
                <SearchIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Поиск
                </Typography>
              </div>
            </li>
            <li className={classes.sideMenuListItem}>
              <div>
                <NotificationIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Уведомления
                </Typography>
              </div>
            </li>
            <li className={classes.sideMenuListItem}>
              <div>
                <MessageIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Сообщения
                </Typography>
              </div>
            </li>
            <li className={classes.sideMenuListItem}>
              <div>
                <BookmarkIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Закладки
                </Typography>
              </div>
            </li>
            <li className={classes.sideMenuListItem}>
              <div>
                <ListIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Список
                </Typography>
              </div>
            </li>
            <li className={classes.sideMenuListItem}>
              <div>
                <UserIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLabel} variant="h6">
                  Профиль
                </Typography>
              </div>
            </li>

          </ul>        
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.TweetsWrapper} style={{ height: '100%' }} variant="outlined">
          <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  text="Петиция чтобы в каждой пачке сухариков всегда лежал один большой в три слоя обсыпанный химическими специями царь-сухарик."
                  user={{
                    fullname: 'Glafira Zhur',
                    username: 'GlafiraZhur',
                    avatarUrl:
                      'https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                  }}
                  classes={classes}
                />,
              ),
            ]}

          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder="Поиск в Твиттере" />
        </Grid>
      </Grid>
    </Container>
  );
}
