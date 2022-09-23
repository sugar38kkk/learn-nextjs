import React from 'react'
import useSWR from 'swr'

type Props = {

}

const ListRestaurant = ({}: Props) => {
  const {data,error,mutate, isValidating} = useSWR('/restaurants/list-restaurants')
  if(!data){
    return <h2>Loading...</h2>
  }
  return (
    <>
      <h2>List Restaurant</h2>
      <ul>
        {
          data?.data.map((restaurant: any) =>{
            return(
              <li key={restaurant.id}>{restaurant.name}</li>
            )
          })
        }
      </ul>
      <hr />
    </>
  );
}

export default ListRestaurant