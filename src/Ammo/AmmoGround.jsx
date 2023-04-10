/* eslint-disable react/no-unknown-property */
import React from 'react'
import {Box} from '@react-three/drei'
import {GROUND_SIZE} from '../utils/constants'
import {ShapeType, useRigidBody} from 'use-ammojs'
import {DoubleSide} from 'three'


export const AmmoGround = () => {
  const [ref] = useRigidBody(() => ({
    shapeType: ShapeType.BOX,
    mass: 0,
    position: [0, -0.5, 0],
  }))

  return (
    <Box
      ref={ref}
      args={[GROUND_SIZE, 1, GROUND_SIZE]}
    >
      <meshStandardMaterial
        color="greenyellow"
        side={DoubleSide}
      />
    </Box>
  )
}
