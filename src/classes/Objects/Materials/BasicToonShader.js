import * as THREE from 'three'
import BasicToonVert from '../Shaders/BasicToon.vert'
import BasicToonFrag from '../Shaders/BasicToon.frag'

export default class BasicToonShader
{
  constructor(_map, _color, _shadeColor)
  {
    this.color = new THREE.Color(_color)
    this.shadeColor = new THREE.Color(_shadeColor)

    this.uniforms = {
      lightDirection: {value: new THREE.Vector3(-8, 15, 10)},
      cameraDirection: {value: new THREE.Vector3(0, 1, 1.5)},
      shadeControl: {value: 0.4},
      uColor: {value: {r: this.color.r, g: this.color.g, b: this.color.b}},
      uShadeColor: {value: {r: this.shadeColor.r, g: this.shadeColor.g, b: this.shadeColor.b}},
      textureMap: {value: _map} 
    }
    this.materialSetup()
  }

  materialSetup()
  {
    this.material = new THREE.ShaderMaterial({
      precision: 'mediump',
      uniforms: this.uniforms,
      vertexShader: BasicToonVert,
      fragmentShader: BasicToonFrag,
    })
  }
}