/* eslint-disable react/react-in-jsx-scope */
import './index.css'
import ReactDOM from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import {RapierExperience} from './Rapier/RapierExperience.jsx'
import {USE_AMMO} from './utils/constants'
import {AmmoExperience} from './Ammo/AmmoExperience'


const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [- 4, 3, 6],
      }}
    >
      {USE_AMMO ? <AmmoExperience/> : <RapierExperience/>}
    </Canvas>,
)
