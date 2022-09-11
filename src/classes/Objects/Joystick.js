import * as THREE from 'three'
import Experience from '../Experience'
import {
  BasicToonShader, 
  ToonHalftone,
} from './Materials'

export default class Joystick {
  constructor()
  {
    this.experience = new Experience()
    this.scene = this.experience.scene

    this.joystickGLB = this.experience.resources.items.joystick
    this.joystick = this.joystickGLB.scene

    this.joystickGroup = new THREE.Group()
    this.scale = 1.2
    this.joystickGroup.scale.set(this.scale, this.scale, this.scale)
    
    this.setGroup()
    this.setMaterial()

    this.scene.add(this.joystickGroup)
  }

  setGroup()
  {
    this.joystickOuterRing  = this.joystick.children.find(child => child.name === "JoystickOuterRing")
    this.joystickPlaceOuter = this.joystick.children.find(child => child.name === "JoystickPlaceOuter")
    this.joystickPlaceInner = this.joystick.children.find(child => child.name === "JoystickPlaceInner")
    this.stickHold          = this.joystick.children.find(child => child.name === "StickHold")
    this.stick              = this.joystick.children.find(child => child.name === "Stick")
    this.handle             = this.joystick.children.find(child => child.name === "Handle")
    this.button1Ring        = this.joystick.children.find(child => child.name === "Button1Ring")
    this.button1            = this.joystick.children.find(child => child.name === "Button1")
    this.button2Ring        = this.joystick.children.find(child => child.name === "Button2Ring")
    this.button2            = this.joystick.children.find(child => child.name === "Button2")
    this.button3Ring        = this.joystick.children.find(child => child.name === "Button3Ring")
    this.button3            = this.joystick.children.find(child => child.name === "Button3")
    this.mainCase           = this.joystick.children.find(child => child.name === "MainCase")
    this.topCase            = this.joystick.children.find(child => child.name === "TopCase")
    this.interactArea       = this.joystick.children.find(child => child.name === "InteractArea")
    this.backCase           = this.joystick.children.find(child => child.name === "BackCase")
    this.sliderPlace2       = this.joystick.children.find(child => child.name === "SliderPlace2")
    this.sliderPlace1       = this.joystick.children.find(child => child.name === "SliderPlace1")
    this.slider1            = this.joystick.children.find(child => child.name === "Slider1")
    this.slider2            = this.joystick.children.find(child => child.name === "Slider2")

    this.joystickGroup.add(
      this.joystickOuterRing ,
      this.joystickPlaceOuter,
      this.joystickPlaceInner,
      this.stickHold         ,
      this.stick             ,
      this.handle            ,
      this.button1Ring       ,
      this.button1           ,
      this.button2Ring       ,
      this.button2           ,
      this.button3Ring       ,
      this.button3           ,
      this.mainCase          ,
      this.topCase           ,
      this.interactArea      ,
      this.backCase          ,
      this.sliderPlace2      ,
      this.sliderPlace1      ,
      this.slider1           ,
      this.slider2           ,
    )
  }

  setMaterial()
  {
    this.joystickOuterRing .material = new BasicToonShader(null, '#ffffff', '#E1E1E1').material
    this.stick             .material = new BasicToonShader(null, '#9FFFFD', '#89FFDF').material
    this.handle            .material = new BasicToonShader(null, '#F38C7A', '#EB290D').material
    this.button1Ring       .material = new BasicToonShader(null, '#ffffff', '#E1E1E1').material
    this.button1           .material = new BasicToonShader(null, '#8DDDFE', '#4890FE').material
    this.button2Ring       .material = new BasicToonShader(null, '#ffffff', '#E1E1E1').material
    this.button2           .material = new BasicToonShader(null, '#8DDDFE', '#4890FE').material
    this.button3Ring       .material = new BasicToonShader(null, '#FFFC02', '#FCCB06').material
    this.mainCase          .material = new BasicToonShader(null, '#5072FC', '#4947FF').material
    this.sliderPlace2      .material = new BasicToonShader(null, '#ffffff', '#E1E1E1').material
    this.sliderPlace1      .material = new BasicToonShader(null, '#ffffff', '#E1E1E1').material
    this.slider1           .material = new BasicToonShader(null, '#FFFC02', '#FCCB06').material
    this.slider2           .material = new BasicToonShader(null, '#FFFC02', '#FCCB06').material

    this.stickHold         .material = new ToonHalftone(null, '#B13A3A', '#FE666B', '#DB4B4B').material
    this.joystickPlaceInner.material = new ToonHalftone(null, '#BE4589', '#FF7CC4', '#E849A0').material
    this.joystickPlaceOuter.material = new ToonHalftone(null, '#B13A3A', '#FE666B', '#DB4B4B').material
    this.interactArea      .material = new ToonHalftone(null, '#FCCB06', '#FFFC02', '#DA9206').material
    this.topCase           .material = new ToonHalftone(null, '#366DC0', '#8DDDFE', '#4890FE').material
    this.backCase          .material = new ToonHalftone(null, '#FCCB06', '#FFFC02', '#DA9206').material
    this.button3           .material = new ToonHalftone(null, '#BE4589', '#FF7CC4', '#E849A0').material

  }
}