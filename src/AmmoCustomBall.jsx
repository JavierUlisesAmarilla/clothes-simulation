import {useEffect} from 'react'
import {useThree} from 'react-three-fiber'
import {ShapeType, useAmmoPhysicsContext} from 'use-ammojs'
import {MathUtils, Mesh, MeshStandardMaterial, SphereGeometry} from 'three'


export const AmmoCustomBall = () => {
  const three = useThree()
  const apc = useAmmoPhysicsContext()

  useEffect(() => {
    const sphereMesh = new Mesh(
        new SphereGeometry(0.5, 50, 50),
        new MeshStandardMaterial({color: 'red'}),
    )
    three.scene.add(sphereMesh)
    const newUUID = MathUtils.generateUUID()
    apc.addRigidBody(
        newUUID,
        sphereMesh,
        {
          meshToUse: sphereMesh,
          shapeConfig: {
            type: ShapeType.SPHERE,
          },
        },
    )
  }, [apc, three.scene])
}
