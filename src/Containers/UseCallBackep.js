import React, { useCallback } from 'react'
import { useState } from 'react'
import Switch from '@mui/material/Switch';
import { height } from '@mui/system';
import Listitem from './Listitem';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function UseCallBackep(props) {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);


  const dark = {
    background: theme ? '#fff' : '#000',
    colar: theme ? '#000' : '#fff'
  }

  const getItem = useCallback(
    (i) => {
      return [i + number, i + number + 1, i + number + 2, i+number+3,i+number+4, i+number+5, i+number+6, i+number+7, i+number+8, i+number+9, i+number+10]
    },
    [number]
  );

  return (
    <>

      <div style={dark}>
        <Switch {...label} onClick={(e) => setTheme(!theme)} />
        <input type="number" placeholder='enter your number' onChange={(e) => setNumber(parseInt(e.target.value))} />

        <Listitem getItem={getItem} />
      </div>
    </>

  )
}
