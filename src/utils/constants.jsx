import {SoftBodyType} from 'use-ammojs'


export const MODEL_SCALE = 0.0015

export const GROUND_SIZE = 10

export const DEFAULT_LINEAR_DAMPING = 10

export const DEFAULT_ANGULAR_DAMPING = 10

export const USE_AMMO = true

export const DEFAULT_SOFTBODY_OPTIONS = {
  type: SoftBodyType.TRIMESH,
  viterations: 40,
  piterations: 40,
  friction: 0.1,
  damping: 0.01,
  pressure: 0.1,
  linearStiffness: 0.9,
  angularStiffness: 0.9,
}
