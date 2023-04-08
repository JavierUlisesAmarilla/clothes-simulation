/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, {Suspense} from 'react'
import {OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {Physics} from 'use-ammojs'
import {AmmoGround} from './AmmoGround'
import {AmmoBall} from './AmmoBall'
import {AmmoSoftBall} from './AmmoSoftBall'
import {AmmoCustomBall} from './AmmoCustomBall'
import {AmmoCustomSoftBall} from './AmmoCustomSoftBall'
import {AmmoGLTF} from './AmmoGLTF'
import {AmmoSoftGLTF} from './AmmoSoftGLTF'
import {MODEL_SCALE} from '../utils/constants'


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
        <Physics
          drawDebug={{
            DrawWireframe: true,
            DrawAabb: true,
            DrawFeaturesText: true,
            DrawContactPoints: true,
            NoDeactivation: true,
            NoHelpText: true,
            DrawText: true,
            ProfileTimings: true,
            EnableSatComparison: true,
            DisableBulletLCP: true,
            EnableCCD: true,
            DrawConstraints: true,
            DrawConstraintLimits: true,
            FastWireframe: true,
            DrawNormals: true,
            MAX_DEBUG_DRAW_MODE: true,
          }}
          drawDebugMode={{
            DrawWireframe: true,
            DrawAabb: true,
            DrawFeaturesText: true,
            DrawContactPoints: true,
            NoDeactivation: true,
            NoHelpText: true,
            DrawText: true,
            ProfileTimings: true,
            EnableSatComparison: true,
            DisableBulletLCP: true,
            EnableCCD: true,
            DrawConstraints: true,
            DrawConstraintLimits: true,
            FastWireframe: true,
            DrawNormals: true,
            MAX_DEBUG_DRAW_MODE: true,
          }}
        // gravity={[0, -9.8, 0]}
        // epsilon={1}
        // fixedTimeStep={1}
        // maxSubSteps={1}
        // solverIterations={1}
        // simulationSpeed={1}
        >
          <AmmoGround/>
          {/* <AmmoBall/> */}
          {/* <AmmoSoftBall/> */}
          {/* <AmmoCustomBall/> */}
          {/* <AmmoCustomSoftBall/> */}

          {/* <AmmoSoftGLTF url='./Henri/Henri.gltf' position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}/> */}
          {/* <AmmoSoftGLTF url='./Henri/Henri_66803faces.gltf' position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[0.0015, 0.0015, 0.0015]}/> */}
          <AmmoSoftGLTF url='./Henri/Henri_4500vertices.gltf' position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}/>
          {/* <AmmoSoftGLTF url='./Henri/Tshirt_40poly2.gltf' position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}/> */}
          {/* <AmmoSoftGLTF url='./Henri/Pant.gltf' position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}/> */}
          {/* <AmmoSoftGLTF url='./Henri/Shirt.gltf' position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}/> */}

          {/* Low poly models test */}
          {/* <AmmoSoftGLTF url='./models/bench.glb' position={[-1, 1, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}/> */}
          {/* <AmmoSoftGLTF url='./models/benchCushion.glb' position={[0, 2, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}/> */}
          {/* <AmmoSoftGLTF url='./models/benchCushionLow.glb' position={[1, 3, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}/> */}
          {/* <AmmoSoftGLTF url='./models/bookcaseOpen.glb' position={[2, 4, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}/> */}
        </Physics>
      </Suspense>
    </>
  )
}
