import {useEffect} from 'react'
import {MathUtils, MeshStandardMaterial} from 'three'
import {useGLTF} from '@react-three/drei'
import {useThree} from '@react-three/fiber'
import {useAmmoPhysicsContext} from 'use-ammojs'
import {mergeModelMeshes} from '../utils/common'
import {DEFAULT_SOFTBODY_OPTIONS, MODEL_SCALE} from '../utils/constants'


export const AmmoSoftModel = () => {
  const gltf = useGLTF('./Henri/Pant.gltf')
  const three = useThree()
  const apc = useAmmoPhysicsContext()

  useEffect(() => {
    const customMaterial = new MeshStandardMaterial({color: 'green'})
    const mergedMesh = mergeModelMeshes(gltf.scene, customMaterial)
    mergedMesh.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE)
    // mergedMesh.rotateX(Math.PI / 2)
    three.scene.add(mergedMesh)
    const newUUID = MathUtils.generateUUID()
    apc.addSoftBody(
        newUUID,
        mergedMesh,
        DEFAULT_SOFTBODY_OPTIONS,
    )
  }, [apc, gltf.scene, three.scene])
}
