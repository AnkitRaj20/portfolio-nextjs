import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

const Page = ({params}:Params) => {
  const id = params.id
  return (
    <div>project id :: {id} </div>
  )
}

export default Page