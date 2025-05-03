declare namespace Game {
  class Area {
    name: string;
    background: `#${string}`;
    gravity: number;
    enemy: Entity;

    constructor(
      name: Area['name'],
      background: Area['background'],
      gravity: Area['gravity'],
      enemy: Area['enemy']
    );
  }

  interface EntityOptions {
    color: Entity['color'];
    baseSpeed: Entity['baseSpeed'];
    width: Entity['width'];
    height: Entity['height'];
    posX: Entity['posX'];
    posY: Entity['posY'];
    posZ: Entity['posZ'];
  }

  class Entity {
    color: string;
    baseSpeed: number;
    speed: number;
    width: number;
    height: number;
    posX: number;
    posY: number;
    posZ: number;

    hasHit: boolean;

    constructor(options: EntityOptions);

    reset(): void;
  }

  class Player extends Entity {
    jumpStrength: number;
    gravity: number;
    maxHealth: number;
    health: number;

    immortalityTime: number;
    damageReduction: number;
    invulTimer: number;
    dashTime: number;
    dashCooldown: number;

    get onGround(): boolean;

    constructor(options: EntityOptions & {
      jumpStrength: Player['jumpStrength'];
      gravity: Player['gravity'];
      maxHealth: Player['maxHealth'];
    });
  }

  class Collectible {
    name: string;
    radius: number;
    posX: number;
    posY: number;

    constructor(
      name: Collectible['name'],
      radius: Collectible['radius'],
      posX: Collectible['posX'],
      posY: Collectible['posY']
    );
  }

  enum GameState {
    playing = 'playing',
    shop = 'shop',
    gameOver = 'gameOver'
  }

  /** Returns a contrast color ('white' or 'black') for a given hex background. */
  function getContrastColor(hex: `#${string}`): 'black' | 'white';
  function getCurrentArea(): Area;
  function spawnFlyingObstacle(currentArea: Area): Entity;
  function spawnCoin(): Collectible;
  function checkCollision(rect1: CanvasRect | Entity, rect2: CanvasRect | Entity): boolean;
  function checkCoinCollision(coin: Collectible, player: Player): boolean;
  function drawWeather(currentArea: Area): void;
  function restartGame(): void;
}