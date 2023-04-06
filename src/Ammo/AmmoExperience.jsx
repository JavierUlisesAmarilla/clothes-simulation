/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {Physics} from 'use-ammojs'
import {AmmoGround} from './AmmoGround.jsx'
import {AmmoBall} from './AmmoBall.jsx'
import {AmmoSoftBall} from './AmmoSoftBall.jsx'
import {AmmoCustomBall} from './AmmoCustomBall.jsx'
import {AmmoCustomSoftBall} from './AmmoCustomSoftBall.jsx'
import {AmmoGLTF} from './AmmoGLTF.jsx'
import {AmmoSoftGLTF} from './AmmoSoftGLTF.jsx'
import {MODEL_SCALE} from '../utils/constants.jsx'


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

      <axesHelper args={[5]}/>

      <Suspense>
        <Physics drawDebug={false}>
          <AmmoGround/>

          {/* <AmmoBall/> */}

          {/* <AmmoSoftBall/> */}

          {/* <AmmoCustomBall/> */}

          {/* <AmmoCustomSoftBall/> */}

          {/* <AmmoGLTF url='./models/soldier.glb' position={[0, 1, 0]}/> */}

          {/* <AmmoSoftGLTF url='./Henri/Henri.gltf' rotation={[Math.PI / 2, 0, 0]} scale={[MODEL_SCALE, MODEL_SCALE, MODEL_SCALE]}/> */}

          {/* <AmmoSoftGLTF url='./Henri/TShirt.gltf' rotation={[0, 0, 0]} scale={[MODEL_SCALE, MODEL_SCALE, MODEL_SCALE]}/> */}

          <AmmoSoftGLTF url='./Henri/Pant.gltf' rotation={[0, 0, 0]} scale={[MODEL_SCALE, MODEL_SCALE, MODEL_SCALE]}/>

          {/* <AmmoSoftGLTF url='./Henri/Debardeur.gltf' rotation={[0, 0, 0]} scale={[MODEL_SCALE, MODEL_SCALE, MODEL_SCALE]}/> */}
        </Physics>
      </Suspense>
    </>
  )
}
