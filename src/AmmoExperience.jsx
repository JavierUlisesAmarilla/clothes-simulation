/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {Physics} from 'use-ammojs'
import {AmmoGround} from './AmmoGround.jsx'
import {AmmoSoftBall} from './AmmoSoftBall.jsx'
import {AmmoCustomSoftBall} from './AmmoCustomSoftBall.jsx'
import {AmmoModel} from './AmmoModel.jsx'
import {AmmoCustomBall} from './AmmoCustomBall.jsx'
import {AmmoBall} from './AmmoBall.jsx'


export const AmmoExperience = () => {
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

      {/* <axesHelper args={[5]}/> */}

      <Suspense>
        <Physics drawDebug={true}>
          <AmmoGround/>

          {/* <AmmoSoftBall/> */}

          {/* <AmmoCustomSoftBall/> */}

          <AmmoBall/>

          {/* <AmmoCustomBall/> */}

          {/* <AmmoModel/> */}
        </Physics>
      </Suspense>
    </>
  )
}
