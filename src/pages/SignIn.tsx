import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh'
  },
  leftBlock: {
    backgroundColor: '#71C9F8',
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  leftBlockBigIcon: {
    position: 'absolute',
    left: '20%',
    top: '8%',
    transform: 'translate(-40%, -30%)',
    width: '250%',
    height: '250%'
  },
  leftBlockList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: 380,
    position: 'relative',
    '& h6': {
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
    '& li': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  leftBlockIcon: {
    color: 'white',
    fontSize: 32,
    marginRight: 16
  },
  rightBlock: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  rightBlockWrapper: {
    width: 380
  },
  rightBlockTwitterIcon: {
    fontSize: 45
  },
  rightBlockTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20
  },
  rightBlockText: {
    fontWeight: 700,
    marginBottom: 15
  }
}))

function SignIn() {
  const classes = useStyles()

  return (
    <section className={classes.wrapper}>    
      <div className={classes.leftBlock}>
        <TwitterIcon className={classes.leftBlockBigIcon} color="primary" />
        <ul className={classes.leftBlockList}>
          <li style={{ marginBottom: 40 }}>
            <SearchIcon className={classes.leftBlockIcon} />
            <Typography variant="h6">Читайте о том, что вам интересно.</Typography>
          </li>
          <li style={{ marginBottom: 40 }}>
            <PeopleIcon className={classes.leftBlockIcon} />
            <Typography variant="h6">Узнайте, о чем говорят в мире.</Typography>
          </li>
          <li>
            <MessageIcon className={classes.leftBlockIcon} />
            <Typography variant="h6">Присоединяйтесь к общению.</Typography>
          </li>
        </ul>  
      </div>
      <div className={classes.rightBlock}>
        <div className={classes.rightBlockWrapper}>
          <TwitterIcon className={classes.rightBlockTwitterIcon} color="primary" />
          <Typography className={classes.rightBlockTitle} variant="h4">Узнайте, что происходит в мире прямо сейчас</Typography>
          <Typography className={classes.rightBlockText}>Присоединяйтесь к Твиттеру прямо сейчас</Typography>
          <Button style={{ marginBottom: 20 }} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
          <Button variant="outlined" color="primary" fullWidth>Войти</Button>
        </div>
      </div>
    </section>
  )
}

export default SignIn