import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import {Card, Button,TextField, Typography} from '@material-ui/core'

const useStyles = makeStyles( {
    message: {
      padding: "15px",
      margin: "15px"
    }
  })

const Item = ({message}) => {
    const classes = useStyles()
    return (
        <Card className={classes.message}>
            <Typography>投稿者{message.username}</Typography>
            <Typography>{message.content}</Typography>
        </Card>
    )
}

export default Item