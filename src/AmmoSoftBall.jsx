/* eslint-disable react/no-unknown-property */
import React from 'react'
import {Sphere} from '@react-three/drei'
import {SoftBodyType, useSoftBody} from 'use-ammojs'


export const AmmoSoftBall = () => {
  const [ref] = useSoftBody(() => ({
    type: SoftBodyType.TRIMESH,
    pressure: 20,
  }))

  return (
    <Sphere args={[0.5, 64, 64]} ref={ref} castShadow>
      <meshPhysicalMaterial attach="material" color="red"/>
    </Sphere>
  )
}
