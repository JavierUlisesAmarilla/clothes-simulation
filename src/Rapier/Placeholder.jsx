/* eslint-disable react/no-unknown-property */
import React from 'react'


export const Placeholder = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]}/>
      <meshBasicMaterial wireframe color="red"/>
    </mesh>
  )
}