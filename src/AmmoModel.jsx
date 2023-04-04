/* eslint-disable react/no-unknown-property */

import React from 'react'
import {Sphere, useGLTF} from '@react-three/drei'
import {SoftBodyType, useSoftBody} from 'use-ammojs'
import {useThree} from 'react-three-fiber'
import {MODEL_SCALE} from './utils/constants'
import {customDebug} from './utils/custom.debug'


export const AmmoModel = () => {
  const three = useThree()
  const gltf = useGLTF('./Henri/Pant.gltf')
  const [ref] = useSoftBody({
    type: SoftBodyType.TRIMESH,
    pressure: 20,
  })

  if (isFirstRender) {
    isFirstRender = false
    customDebug().log('AmmoModel: gltf.scene: ', gltf.scene)
    gltf.scene.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE)
    three.scene.add(gltf.scene)
  }

  return (
    <Sphere args={[0.5, 64, 64]} ref={ref} castShadow>
      <meshPhysicalMaterial attach="material" color="red"/>
    </Sphere>
  )
}


let isFirstRender = true
