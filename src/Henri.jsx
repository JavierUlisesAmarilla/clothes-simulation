/* eslint-disable react/no-unknown-property */
import React, {useRef} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {useControls} from 'leva'
import {useFrame} from 'react-three-fiber'
import {RigidBody} from '@react-three/rapier'
import {DEFAULT_ANGULAR_DAMPING, DEFAULT_LINEAR_DAMPING, MODEL_SCALE} from './utils/constants'
import {customDebug} from './utils/debug'


export const Henri = () => {
  const {visible, rotationY} = useControls({
    visible: {value: true, label: 'Show Henri'},
    rotationY: {value: 0, min: 0, max: 1, label: 'Rotation Y'},
  })
  const gltf = useGLTF('./Henri/Henri.gltf')
  customDebug().log('Henri: gltf.scene: ', gltf.scene)
  const gltfRef = useRef()
  // eslint-disable-next-line no-unused-vars
  const {actions} = useAnimations(gltf.scene.animations, gltfRef)
  const rotationRef = useRef(0)
  const rigidBody = useRef(null)

  useFrame((state, delta) => {
    // Calculate the rotation angle based on the rotationY control
    const rotationAngle = rotationY * Math.PI * 2

    // Update the rotationRef value based on the rotation angle
    rotationRef.current += (rotationAngle - rotationRef.current) * 0.05

    // Set the rotation value of the gltf.scene object
    gltf.scene.rotation.y = rotationRef.current
  })

  return visible ? (
    <RigidBody
      ref={rigidBody}
      colliders='trimesh'
      position={[0, 0, 0]}
      enabledRotations={[false, true, false]}
      linearDamping={DEFAULT_LINEAR_DAMPING}
      angularDamping={DEFAULT_ANGULAR_DAMPING}
    >
      <primitive
        ref={gltfRef}
        object={gltf.scene}
        scale={MODEL_SCALE}
        castShadow
      />
    </RigidBody>
  ) : null
}

useGLTF.preload('./Henri/Henri.gltf')
