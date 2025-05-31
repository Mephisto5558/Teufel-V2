import type { GameState, Area } from '../classes';

declare global {
  const canvas: HTMLCanvasElement;
  const ctx: CanvasRenderingContext2D;

  /** Array of areas (from easiest to hardest) */
  const areas: Area[];

  /** Endlevel: Black Hole when persistentScore >= 666 */
  const blackHole: Area;

  let testingMode: boolean;
  let score: number;
  let persistentScore: number;
  let level: number;
  let gameState: GameState;
}

export {};