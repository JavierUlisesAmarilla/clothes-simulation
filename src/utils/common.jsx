import {mergeBufferGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils'
import {Mesh} from 'three'


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

  const mergedBufferGeometry = mergeBufferGeometries(bufferGeometries, true)
  mergedBufferGeometry.computeBoundingBox()
  const mergedMesh = new Mesh(mergedBufferGeometry, materials)
  return mergedMesh
}
