import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../../redux/action/counter.action'


export default function Counter() {
    const c = useSelector(state=>state.counter)
    
    const dispatch = useDispatch()

    const handleincrement = () => {
        dispatch(incrementCounter())
    }

    const handledecrement = () => {
        dispatch(decrementCounter())
    }
  return (
    <div className='text-center'>
        <button className='btn btn btn-outline-success m-3 px-5' onClick={() => handleincrement()}>+</button>
        <p className='m-3'>{c.counter}</p>
        <button className='btn btn btn-outline-warning m-3 px-5' onClick={() => handledecrement()}>-</button>
    </div>
  )
}
