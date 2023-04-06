import {useEffect} from 'react'
import {useThree} from '@react-three/fiber'
import {useAmmoPhysicsContext} from 'use-ammojs'
import {MathUtils, Mesh, MeshStandardMaterial, SphereGeometry} from 'three'
import {DEFAULT_SOFTBODY_OPTIONS} from '../utils/constants'


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
        DEFAULT_SOFTBODY_OPTIONS,
    )
  }, [apc, three.scene])
}
