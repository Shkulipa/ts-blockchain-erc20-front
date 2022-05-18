import React, { FC } from 'react'
import { IRecentTsxProps } from '../interfaces/recentTsx.interface'
import { SField } from '../styles/recentTsx/field'
import { SRecentTsx } from '../styles/recentTsx/recentTsx'

export const RecentTsx: FC<IRecentTsxProps> = ({ tsx }): JSX.Element => {
  const { from, to, value, symbol } = tsx;
  return (
    <SRecentTsx>
      <SField>
        From: {from}
      </SField>
      <SField>
        To: { to }
      </SField>
      <SField margin="0">
        Value: {value} {symbol}
      </SField>
    </SRecentTsx>
  )
}
