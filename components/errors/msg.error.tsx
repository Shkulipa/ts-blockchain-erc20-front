import React from 'react'
import { SMsgError } from '../../styles/error/msg.error';

interface IError {
  msg: string;
}

export const MsgError = ({ msg }: IError): JSX.Element => <SMsgError>{msg}</SMsgError>;
