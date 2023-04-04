/* eslint-disable react/no-unknown-property */

import React from 'react'
import {Sphere, useGLTF} from '@react-three/drei'
import {SoftBodyType, useSoftBody} from 'use-ammojs'
import {useThree} from 'react-three-fiber'
import {customDebug} from './utils/custom.debug'


export const AmmoModel = () => {
  const three = useThree()
  const gltf = useGLTF('./Henri/Henri.gltf')
  const [ref] = useSoftBody({
    type: SoftBodyType.TRIMESH,
    pressure: 20,
  })

  if (isFirstRender) {
    isFirstRender = false
    three.scene.add(gltf.scene)
    customDebug().log('AmmoModel: three.scene: ', three.scene)
  }

  return (
    <Sphere args={[0.5, 64, 64]} ref={ref} castShadow>
      <meshPhysicalMaterial attach="material" color="red"/>
    </Sphere>
  )
}


let isFirstRender = true
