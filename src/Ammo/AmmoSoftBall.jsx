/* eslint-disable react/no-unknown-property */
import React from 'react'
import {Sphere} from '@react-three/drei'
import {useSoftBody} from 'use-ammojs'
import {DEFAULT_SOFTBODY_OPTIONS} from '../utils/constants'


export const AmmoSoftBall = () => {
  const [ref] = useSoftBody(DEFAULT_SOFTBODY_OPTIONS)

  return (
    <Sphere args={[0.5, 64, 64]} ref={ref}>
      <meshPhysicalMaterial attach="material" color="red"/>
    </Sphere>
  )
}
