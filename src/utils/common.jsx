import * as THREE from 'three'


export const getRandom = (size) => {
  const halfSize = size / 2
  const random = halfSize - (Math.random() * size)
  return random
}


export const modelToSingleMesh = (model) => {
  const addToMaterials = (materials, newMaterial) => {
    const index = materials.findIndex((el) => el.name === newMaterial.name)

    if (index > -1) {
      return index
    } else {
      materials.push(newMaterial)
      return materials.length - 1
    }
  }

  const newMaterials = []
  const newGeometry = new THREE.Geometry()

  model.scene.traverse(function(child) {
    if (child.isMesh) {
      const materialIndices = []

      if (child.material.length) {
        for (let k = 0; k < child.material.length; k++) {
          materialIndices.push(
              addToMaterials(newMaterials, child.material[k]),
          )
        }
      } else {
        materialIndices.push(addToMaterials(newMaterials, child.material))
      }

      if (child.geometry.isBufferGeometry) {
        const tGeometry = new THREE.Geometry().fromBufferGeometry(child.geometry)
        tGeometry.faces.forEach((face) => {
          face.materialIndex = materialIndices[face.materialIndex]
        })
        child.updateMatrix()
        newGeometry.merge(tGeometry, child.matrix)
      } else {
        child.geometry.faces.forEach((face) => {
          face.materialIndex = materialIndices[face.materialIndex]
        })
        child.updateMatrix()
        newGeometry.mergeMesh(child)
      }
    }
  })

  const newMesh = new THREE.Mesh(newGeometry, newMaterials)
  return newMesh
}
