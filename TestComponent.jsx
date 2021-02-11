import React, { useEffect, useState } from 'react'
import { string } from 'prop-types'

const Component = ({ someProp }) => {
  const [state, setState] = useState()

  useEffect(() => {
    if (someProp) {
      setState(someProp)
    }
  }, [someProp])

  return <h1>{state}</h1>
}

Component.propTypes = {
  someProp: string
}

export default Component
