import Phaser from 'phaser';
import GameScene from './scenes/GameScene';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  backgroundColor: '#33A5E7',
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  scene: [
    GameScene
  ],
  dom: {
    createContainer: true
  },
};

export default config