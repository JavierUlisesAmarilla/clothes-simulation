import {useEffect} from 'react'
import {MathUtils} from 'three'
import {useGLTF} from '@react-three/drei'
import {useThree} from '@react-three/fiber'
import {useAmmoPhysicsContext} from 'use-ammojs'
import {DEFAULT_SOFTBODY_OPTIONS, MODEL_SCALE} from '../utils/constants'
import {customDebug} from '../utils/custom.debug'
import {mergeModelMeshes} from '../utils/common'


export const AmmoTankTop = () => {
  const gltf = useGLTF('./Henri/Debardeur.gltf')
  const three = useThree()
  const apc = useAmmoPhysicsContext()

  useEffect(() => {
    customDebug().log('AmmoModel#useEffect: gltf.scene: ', gltf.scene)
    const mergedMesh = mergeModelMeshes(gltf.scene)
    mergedMesh.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE)
    mergedMesh.rotateX(Math.PI / 2)
    three.scene.add(mergedMesh)
    const newUUID = MathUtils.generateUUID()
    apc.addSoftBody(
        newUUID,
        mergedMesh,
        DEFAULT_SOFTBODY_OPTIONS,
    )
  }, [apc, gltf.scene, three.scene])
}
