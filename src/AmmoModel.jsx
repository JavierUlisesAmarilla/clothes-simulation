
import React from 'react'
import {Shape, useGLTF} from '@react-three/drei'
import {BodyType, ShapeType, useRigidBody} from 'use-ammojs'


export const AmmoModel = () => {
  const gltf = useGLTF('./Henri/Henri.gltf')
  const [ref] = useRigidBody({
    shapeType: ShapeType.MESH,
    bodyType: BodyType.STATIC,
  }, gltf.scene)

  return (
    <Shape ref={ref}/>
  )
}
