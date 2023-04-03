
import React from 'react'
import {Plane} from '@react-three/drei'
import {GROUND_SIZE} from './utils/constants'
import {ShapeType, useRigidBody} from 'use-ammojs'


export const Ground = () => {
  const [ref] = useRigidBody(() => ({
    shapeType: ShapeType.BOX,
    mass: 0,
    position: [0, -1, 0],
    rotation: [- Math.PI * 0.5, 0, 0],
  }))

  return (
    <Plane ref={ref} scale={GROUND_SIZE}>
      <meshStandardMaterial color="greenyellow"/>
    </Plane>
  )
}
