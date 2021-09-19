import React, {useState } from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { useHomeStyles } from '../pages/Home/theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTweet } from '../store/ducks/tweets/actionCreators';
import { selectAddFormState } from '../store/ducks/tweets/selectors';
import Alert from '@mui/material/Alert';
import { AddFormState } from '../store/ducks/tweets/contracts/state';


interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

const MAX_LENGHT = 280

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}): React.ReactElement => {
  const dispatch = useDispatch()
  // to use state
  const addFormState = useSelector(selectAddFormState)
  const [text, setText] = useState<string>('')
  const textLimitPercent = Math.round((text.length / 280) * 100) 
  const textCount = MAX_LENGHT - text.length

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text))
    setText('')
  }
  
  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://source.unsplash.com/random/100x100?1"
        />
        <TextareaAutosize
          onChange={handleChangeTextArea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          rowsMax={maxRows}
          value={text}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGHT ? 100 : textLimitPercent}
                  style={text.length >= MAX_LENGHT ? { color: 'red' } : undefined}
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={addFormState === AddFormState.LOADING || !text || text.length >= MAX_LENGHT}
            color="primary"
            variant="contained">
            {addFormState === AddFormState.LOADING ? (
              <CircularProgress color="inherit" size={16} />
            ) : (
              'Твитнуть'
            )}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (
        <Alert severity="error">
          Ошибка при добавлении твита{' '}
          <span aria-label="emoji-plak" role="img">
            😞
          </span>
        </Alert>
      )}
    </div>
  );
}
