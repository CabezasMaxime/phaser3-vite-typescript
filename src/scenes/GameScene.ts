import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image("logo", "assets/phaser3-logo.png")
    }

    create() {
        let logo = this.add.image(this.cameras.main.centerX, -100, "logo")
        
        this.add.tween({
            targets: logo,
            ease: "Bounce.Out",
            duration: 1700,
            y: 200,
            repeat: 0
        })
    }

    update(t: number, dt: number) {}
}