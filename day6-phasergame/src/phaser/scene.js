import Phaser from "phaser";
import bomb from "../assets/bomb.png";
import dude from "../assets/dude.png";
import platform from "../assets/platform.png";
import star from "../assets/star.png";
import sky from "../assets/sky.png";
import ScoreLabel from "./ScoreLabel";
import BombSpawner from "./BombSpawner";

class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
    this.gameOver = false;
  }

  preload() {
    this.load.image("sky", sky);
    this.load.image("bomb", bomb);
    this.load.image("platform", platform);
    this.load.image("star", star);
    this.load.image("bomb", bomb);

    this.load.spritesheet("dude", dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    const sky = this.add.image(400, 300, "sky");
    this.player = this.createPlayer();
    this.platforms = this.createPlatforms();
    this.cursors = this.input.keyboard.createCursorKeys();
    this.stars = this.createStars();
    this.scoreLabel = this.createScoreLabel(16, 16, 0);
    this.bombSpawner = new BombSpawner(this, "bomb");

    this.bombsGroup = this.bombSpawner.group;

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.collider(
      this.player,
      this.bombsGroup,
      this.hitBomb,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStars,
      null,
      this
    );
  }

  createPlatforms() {
    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, "platform").setScale(2).refreshBody();
    platforms.create(600, 400, "platform");
    platforms.create(50, 250, "platform");
    platforms.create(750, 220, "platform");

    return platforms;
  }

  createPlayer() {
    const player = this.physics.add.sprite(100, 450, "dude");
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    return player;
  }

  createStars() {
    const stars = this.physics.add.group({
      key: "star",
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    stars.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    return stars;
  }

  collectStars(player, stars) {
    stars.disableBody(true, true);
    this.scoreLabel.add(10);
    if (this.stars.countActive(true) === 0) {
      console.log(`running`);
      this.stars.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true);
      });
    }

    this.bombSpawner.spawn(player.x);
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: "32px", fill: "#000" };
    const label = new ScoreLabel(this, x, y, score, style);

    this.add.existing(label);
    return label;
  }

  update() {
    if (this.gameOver) {
      return;
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play("turn");
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  hitBomb(player, bomb) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play("turn");
    this.gameOver = true;
  }
}

export default playGame;
