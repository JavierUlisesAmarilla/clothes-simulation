/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import {Debug, Physics} from '@react-three/rapier'
import {Perf} from 'r3f-perf'
import {RapierGround} from './RapierGround.jsx'
import {RapierHenri} from './RapierHenri.jsx'
import {RapierTShirt} from './RapierTShirt.jsx'
import {RapierPant} from './RapierPant.jsx'
import {RapierTankTop} from './RapierTankTop.jsx'


export const RapierExperience = () => {
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
          <RapierGround/>

          {/* <RapierHenri/> */}

          {/* <RapierTShirt/> */}

          <RapierPant/>

          {/* <RapierTankTop/> */}

          <Debug/>
        </Physics>
      </Suspense>
    </>
  )
}
