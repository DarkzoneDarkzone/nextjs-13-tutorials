'use client'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@/redux/features/counter/counterSlice'
import React, { useEffect, useState } from 'react'
import type { RootSlice } from '@/types/RootState'
import apiJson from '@/utils/apiJson'
import { Button, Modal } from 'antd'

const Page = (): React.ReactElement => {
  // useSelector gets the state from store
  const count = useSelector<RootSlice, number>((state) => state.counter.value) // Access the counter state

  // useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)
  const handleOpen = (): void => { setOpen(true) }
  const handleClose = (): void => { setOpen(false) }
  const [data, setData] = useState<any>([])

  useEffect(() => {
    const jsonData = async (): Promise<any> => {
      await apiJson.get('todos').then((res) => {
        setData(res.data)
      })
    }
    jsonData()
  }, [])

  return (
    <div>
      <h1>Counter: {count}</h1> {/* Display the counter state */}
      <button onClick={() => dispatch(increment())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        decrement
      </button>
      <Button type="primary" className='bg-blue-500' onClick={handleOpen}>Open modal</Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={open}
        onOk={handleClose}
        onCancel={handleClose}
        okButtonProps={{ className: 'bg-blue-500' }}
      >
        {data?.map((el: any) => <p key={el.id}>{el.title}</p>)}
      </Modal>
    </div>
  )
}

export default Page
