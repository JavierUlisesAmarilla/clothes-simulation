import {useEffect} from 'react'
import {useThree} from '@react-three/fiber'
import {SoftBodyType, useAmmoPhysicsContext} from 'use-ammojs'
import {MathUtils, Mesh, MeshStandardMaterial, SphereGeometry} from 'three'


export const AmmoCustomSoftBall = () => {
  const three = useThree()
  const apc = useAmmoPhysicsContext()

  useEffect(() => {
    const sphereMesh = new Mesh(
        new SphereGeometry(0.5, 50, 50),
        new MeshStandardMaterial({color: 'red'}),
    )
    sphereMesh.position.setY(2)
    three.scene.add(sphereMesh)
    const newUUID = MathUtils.generateUUID()
    apc.addSoftBody(
        newUUID,
        sphereMesh,
        {
          type: SoftBodyType.TRIMESH,
        },
    )
  }, [apc, three.scene])
}
