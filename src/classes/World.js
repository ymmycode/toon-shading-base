import * as THREE from 'three'
import Experience from './Experience.js'
import Environment from './Environment.js'
import { Joystick } from './Objects'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.joystick = new Joystick()

                this.environment = new Environment()
            }
        })
    }

    debugObjects()
    {
    }

    resize()
    {
    }

    update()
    {
        
    }

    destroy()
    {
    }
}