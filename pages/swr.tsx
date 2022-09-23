import ListRestaurant from '@/components/swr/ListRestaurant'
import React from 'react'

type Props = {}

const SWRPage = (props: Props) => {
  return (
    <div>
        <h1>SWR Playground</h1>
        <ListRestaurant/>
        <ListRestaurant/>
        <ListRestaurant/>
    </div>
  )
}

export default SWRPage  