import { v4 as uuidv4 } from "uuid";

export interface TScore {
  id: string;
  player1_score: number;
  player2_score: number;
  player1_name: string;
  player2_name: string;
  current_winner: string;
  scoreDiff: () => void;
}

export class Score implements TScore {
  id: string;
  player1_score: number;
  player2_score: number;
  player1_name: string;
  player2_name: string;
  current_winner: string;

  constructor(score: TScore) {
    this.id = uuidv4();
    this.player1_name = score.player1_name;
    this.player2_name = score.player2_name;
    this.player1_score = score.player1_score;
    this.player2_score = score.player2_score;
    this.current_winner = score.current_winner;
  }

  scoreDiff() {
    return Math.abs(this.player1_score - this.player2_score);
  }
}
