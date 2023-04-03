/* eslint-disable react/no-unknown-property */
import React from 'react'
import {Sphere} from '@react-three/drei'
import {SoftBodyType, useSoftBody} from 'use-ammojs'


export const SoftBall = () => {
  const [ref] = useSoftBody(() => ({
    type: SoftBodyType.TRIMESH,
    pressure: 100,
  }))

  return (
    <Sphere args={[0.5, 16, 16]} ref={ref} castShadow>
      <meshPhysicalMaterial attach="material" color="red"/>
    </Sphere>
  )
}
