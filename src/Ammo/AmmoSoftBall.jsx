/* eslint-disable react/no-unknown-property */
import React from 'react'
import {Sphere} from '@react-three/drei'
import {SoftBodyType, useSoftBody} from 'use-ammojs'


export const AmmoSoftBall = () => {
  const [ref] = useSoftBody({
    type: SoftBodyType.TRIMESH,
    viterations: 40,
    piterations: 40,
    friction: 0.1,
    damping: 0.01,
    pressure: 20,
    linearStiffness: 0.9,
    angularStiffness: 0.9,
  })

  return (
    <Sphere args={[0.5, 64, 64]} ref={ref}>
      <meshPhysicalMaterial attach="material" color="red"/>
    </Sphere>
  )
}
