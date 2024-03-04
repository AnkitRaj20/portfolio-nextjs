import React from 'react'

const Page = ({params}:any) => {
  const id = params.id
  return (
    <div>project id :: {id} </div>
  )
}

export default Page