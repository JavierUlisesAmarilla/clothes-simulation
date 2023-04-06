import {mergeBufferGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils'
import {Mesh} from 'three'
import {customDebug} from './custom.debug'


export const mergeModelMeshes = (model) => {
  const bufferGeometries = []
  const materials = []

  model.traverse((child) => {
    if (child.isMesh) {
      if (child.geometry?.isBufferGeometry) {
        bufferGeometries.push(child.geometry)
      }
      if (child.material?.isMaterial) {
        materials.push(child.material)
      }
    }
  })

  customDebug().log('common#mergeModelMeshes: bufferGeometries: ', bufferGeometries)
  customDebug().log('common#mergeModelMeshes: materials: ', materials)
  const mergedBufferGeometry = mergeBufferGeometries(bufferGeometries, true)
  mergedBufferGeometry.computeBoundingBox()
  const mergedMesh = new Mesh(mergedBufferGeometry, materials)
  return mergedMesh
}
