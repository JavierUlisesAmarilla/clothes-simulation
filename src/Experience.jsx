/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {Henri} from './Henri.jsx'
import {TShirt} from './TShirt.jsx'
import {Pant} from './Pant.jsx'
import {TankTop} from './TankTop.jsx'
import {Physics} from 'use-ammojs'
import {Ground} from './Ground.jsx'
import {SoftBall} from './SoftBall.jsx'


export const Experience = () => {
  return (
    <>
      <Perf position="top-left"/>

      <OrbitControls makeDefault/>

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5}/>

      <axesHelper args={[5]}/>

      <Suspense>
        <Physics drawDebug={true}>
          <Ground/>

          <Henri/>

          {/* <TShirt/> */}

          {/* <Pant/> */}

          {/* <TankTop/> */}

          {/* <SoftBall/> */}
        </Physics>
      </Suspense>
    </>
  )
}
