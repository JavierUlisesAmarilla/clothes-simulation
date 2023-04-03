/* eslint-disable react/no-unknown-property */
import React, {useRef} from 'react'
import {Shape, useGLTF} from '@react-three/drei'
import {useControls} from 'leva'
import {useFrame} from 'react-three-fiber'
import {MODEL_SCALE} from './utils/constants'
import {customDebug} from './utils/debug'
import {BodyType, ShapeType, useRigidBody} from 'use-ammojs'
import {modelToSingleMesh} from './utils/common'


export const Henri = () => {
  const {visible, rotationY} = useControls({
    visible: {value: true, label: 'Show Henri'},
    rotationY: {value: 0, min: 0, max: 1, label: 'Rotation Y'},
  })
  const gltf = useGLTF('./Henri/Henri.gltf')
  customDebug().log('Henri: gltf.scene: ', gltf.scene)
  const gltfMesh = modelToSingleMesh(gltf)
  customDebug().log('Henri: gltfMesh: ', gltfMesh)
  const rotationRef = useRef(0)

  const [ref] = useRigidBody(
      () => ({
        shapeType: ShapeType.MESH,
        bodyType: BodyType.STATIC,
      }),
      gltfMesh,
  )
  customDebug().log('Henri: ref: ', ref, gltfMesh)

  useFrame((state, delta) => {
    // Calculate the rotation angle based on the rotationY control
    const rotationAngle = rotationY * Math.PI * 2

    // Update the rotationRef value based on the rotation angle
    rotationRef.current += (rotationAngle - rotationRef.current) * 0.05

    // Set the rotation value of the gltf.scene object
    gltf.scene.rotation.y = rotationRef.current
  })

  return visible ? (
    <Shape
      ref={ref}
      scale={MODEL_SCALE}
    >
      <meshPhysicalMaterial attach="material" color="red"/>
    </Shape>
  ) : null
}

useGLTF.preload('./Henri/Henri.gltf')
