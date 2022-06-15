import React from 'react'
import { useRouter } from 'next/router'

const Slug = () => {
    const routers = useRouter()
    const {slug} = routers.query
  return (
    <div>
      {slug}
    </div>
  )
}

export default Slug
