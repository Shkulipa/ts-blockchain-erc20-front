import React, { FC } from 'react'
import { SCriticalError } from '../../styles/error/critical.error'
import { SMsgError } from '../../styles/error/msg.error'
import { MsgError } from './msg.error'

interface ICriticalErrorProps {
  error: string
}

export const CriticalError = ({ error }: ICriticalErrorProps): JSX.Element => {
  return (
    <SCriticalError>
      <MsgError msg={error} />
    </SCriticalError>
  )
}
