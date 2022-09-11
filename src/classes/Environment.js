import * as THREE from 'three'
import Experience from './Experience'

export default class Environment
{
  constructor()
  {
    this.experience = new Experience()
    this.scene = this.experience.scene

    this.setLighting()
  }

  setLighting()
  {
    this.debugProps = {}
    this.debugProps.lightColor = 0xffffff
    this.debugProps.dirLightIntensity = 1.0
    this.debugProps.ambientIntensity = .2

    this.directionalLight = new THREE.DirectionalLight(this.debugProps.dirLightColor, this.debugProps.dirLightIntensity)
    this.directionalLight.position.set(-8, 15, 10)

    this.ambientLight = new THREE.AmbientLight(this.debugProps.lightColor, this.debugProps.ambientIntensity)
    
    this.scene.add(this.directionalLight, this.ambientLight)

  }
}