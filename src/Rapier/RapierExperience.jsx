/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import {Debug, Physics} from '@react-three/rapier'
import {Perf} from 'r3f-perf'
import {RapierGround} from './RapierGround'
import {RapierHenri} from './RapierHenri'
import {RapierTShirt} from './RapierTShirt'
import {RapierPant} from './RapierPant'
import {RapierTankTop} from './RapierTankTop'


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
