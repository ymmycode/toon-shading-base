import * as THREE from 'three'
import ToonHalftoneVert from '../Shaders/ToonHalftone.vert'
import ToonHalftoneFrag from '../Shaders/ToonHalftone.frag'

export default class ToonHalftone
{
  constructor(_map, _color, _color2, _shadeColor)
  {
    this.color = new THREE.Color(_color)
    this.color2 = new THREE.Color(_color2)
    this.shadeColor = new THREE.Color(_shadeColor)

    this.uniforms = {
      lightDirection: {value: new THREE.Vector3(-8, 15, 10)},
      cameraDirection: {value: new THREE.Vector3(0, 1, 1.5)},
      shadeControl1: {value: 0.7},
      shadeControl2: {value: 0.4},
      halftoneRadius: {value: .6},
      haltoneScale: {value: .5},
      uColor: {value: {r: this.color.r, g: this.color.g, b: this.color.b}},
      uColor2: {value: {r: this.color2.r, g: this.color2.g, b: this.color2.b}},
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
      vertexShader: ToonHalftoneVert,
      fragmentShader: ToonHalftoneFrag,
    })
  }
}