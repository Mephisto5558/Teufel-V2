export type AreaOptions = [
    name: Area['name'],
    background: Area['background'],
    gravity: Area['gravity'],
    enemy: Area['enemy']
];

export class Area {
  name: string;
  background: `#${string}`;
  gravity: number;
  enemy: Entity;

  constructor(...args: AreaOptions);
}

export interface EntityOptions {
  color: Entity['color'];
  baseSpeed: Entity['baseSpeed'];
  width: Entity['width'];
  height: Entity['height'];
  posX: Entity['posX'];
  posY: Entity['posY'];
  posZ: Entity['posZ'];
}

export class Entity {
  color: string;
  baseSpeed: number;
  speed: number;
  width: number;
  height: number;
  posX: number;
  posY: number;
  posZ: number;
  dy: number;

  hasHit: boolean;

  constructor(options: EntityOptions);

  reset(): void;

  isOnGround(): boolean;
}

export interface PlayerOptions {
  jumpStrength: Player['jumpStrength'];
  gravity: Player['gravity'];
  maxHealth: Player['maxHealth'];
}

export class Player extends Entity {
  jumpStrength: number;
  gravity: number;
  maxHealth: number;
  health: number;

  immortalityTime: number;
  damageReduction: number;
  invulTimer: number;
  dashTime: number;
  dashCooldown: number;

  constructor(options: EntityOptions & PlayerOptions);

  resetPosition(): void;
}

export interface CollectibleOptions {
  posX: Collectible['posX'];
  posY: Collectible['posY'];
}

export class Collectible {
  posX: number;
  posY: number;

  constructor(args: CollectibleOptions);
}

export class Coin extends Collectible {
  radius: number;

  constructor(options: CollectibleOptions & {
    radius: Coin['radius'];
  });
}

export class PowerUp extends Collectible {
  width: number;
  height: number;
  duration: number;
  timer: number;

  constructor(options: CollectibleOptions & {
    width: PowerUp['width'];
    height: PowerUp['height'];
    duration: PowerUp['duration'];
    timer: PowerUp['timer'];
  });
}

export enum GameState {
  playing = 'playing',
  shop = 'shop',
  gameOver = 'gameOver'
}