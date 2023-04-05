/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {Henri} from './Henri.jsx'
import {TShirt} from './TShirt.jsx'
import {Pant} from './Pant.jsx'
import {TankTop} from './TankTop.jsx'
import {Debug, Physics} from '@react-three/rapier'
import {Ground} from './Ground.jsx'


export const Experience = () => {
  return (
    <>
      <Perf position="top-left"/>

      <OrbitControls makeDefault/>

      <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5}/>

      <axesHelper args={[5]}/>

      <Suspense>
        <Physics colliders='trimesh'>
          <Ground/>

          <Henri/>

          <TShirt/>

          {/* <Pant/> */}

          {/* <TankTop/> */}

          <Debug/>
        </Physics>
      </Suspense>
    </>
  )
}
