import type { Area, Coin, Entity, Player, PowerUp } from '../classes';

/** Returns a contrast color ('white' or 'black') for a given hex background. */
export function getContrastColor(hex: `#${string}`): 'black' | 'white';
export function getCurrentArea(): Area;
export function spawnFlyingObstacle(currentArea: Area): Entity;
export function spawnCoin(): Coin;
export function spawnPowerUp(): PowerUp;
export function checkCollision(rect1: CanvasRect | Entity, rect2: CanvasRect | Entity): boolean;
export function checkCoinCollision(coin: Coin, player: Player): boolean;
export function drawWeather(currentArea: Area): void;
export function restartGame(): void;