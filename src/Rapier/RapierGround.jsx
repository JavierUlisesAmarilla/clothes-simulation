/* eslint-disable react/no-unknown-property */
import React from 'react'
import {Plane} from '@react-three/drei'
import {RigidBody} from '@react-three/rapier'
import {GROUND_SIZE} from '../utils/constants'
import {DoubleSide} from 'three'


export const RapierGround = () => {
  return (
    <RigidBody lockTranslations={true}>
      <Plane
        position={[0, -0.000001, 0]}
        rotation={[- Math.PI * 0.5, 0, 0]}
        scale={GROUND_SIZE}
      >
        <meshStandardMaterial
          color="greenyellow"
          side={DoubleSide}
        />
      </Plane>
    </RigidBody>
  )
}
