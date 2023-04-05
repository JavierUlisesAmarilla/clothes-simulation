/* eslint-disable react/no-unknown-property */
import React from 'react'
import {Sphere} from '@react-three/drei'
import {ShapeType, useRigidBody} from 'use-ammojs'


export const AmmoBall = () => {
  const [ref] = useRigidBody(() => ({
    shapeType: ShapeType.SPHERE,
    mass: 1,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  }))

  return (
    <Sphere args={[0.5, 64, 64]} ref={ref}>
      <meshPhysicalMaterial attach="material" color="red"/>
    </Sphere>
  )
}
