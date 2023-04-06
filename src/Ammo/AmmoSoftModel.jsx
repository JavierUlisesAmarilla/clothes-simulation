import {useEffect} from 'react'
import {MathUtils, MeshStandardMaterial} from 'three'
import {useGLTF} from '@react-three/drei'
import {useThree} from '@react-three/fiber'
import {SoftBodyType, useAmmoPhysicsContext} from 'use-ammojs'
import {mergeModelMeshes} from '../utils/common'
import {MODEL_SCALE} from '../utils/constants'


export const AmmoSoftModel = () => {
  const gltf = useGLTF('./Henri/Pant.gltf')
  const three = useThree()
  const apc = useAmmoPhysicsContext()

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const customMaterial = new MeshStandardMaterial({color: 'green'})
    const mergedMesh = mergeModelMeshes(gltf.scene)
    mergedMesh.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE)
    // mergedMesh.rotateX(Math.PI / 2)
    three.scene.add(mergedMesh)
    const newUUID = MathUtils.generateUUID()
    apc.addSoftBody(
        newUUID,
        mergedMesh,
        {
          type: SoftBodyType.TRIMESH,
          viterations: 40,
          piterations: 40,
          friction: 0.1,
          damping: 0.01,
          pressure: 0.1,
          linearStiffness: 0.9,
          angularStiffness: 0.9,
        },
    )
  }, [apc, gltf.scene, three.scene])
}
