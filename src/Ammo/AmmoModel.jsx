import {useEffect} from 'react'
import {MathUtils} from 'three'
import {useGLTF} from '@react-three/drei'
import {useThree} from '@react-three/fiber'
import {ShapeType, useAmmoPhysicsContext} from 'use-ammojs'


export const AmmoModel = () => {
  const gltf = useGLTF('./models/soldier.glb')
  const three = useThree()
  const apc = useAmmoPhysicsContext()

  useEffect(() => {
    gltf.scene.position.setY(1)
    three.scene.add(gltf.scene)
    const newUUID = MathUtils.generateUUID()
    apc.addRigidBody(
        newUUID,
        gltf.scene,
        {
          meshToUse: gltf.scene,
          shapeConfig: {
            type: ShapeType.HULL,
          },
        },
    )
  }, [apc, gltf.scene, three.scene])
}
