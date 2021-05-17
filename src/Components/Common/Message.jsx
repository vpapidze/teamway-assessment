import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageWrapper = ({ message, note, ...rest }) => (
  <Message {...rest}>
    <Message.Header>{message}</Message.Header>
    {note && <p>{note}</p>}
  </Message>
)

export default MessageWrapper;
