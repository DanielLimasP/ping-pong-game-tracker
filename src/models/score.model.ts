import { v4 as uuidv4 } from "uuid";
import { DB } from "../classes/db";
import { TModel } from "../interfaces/model";

export interface TScore {
  id: string;
  player1_score: number;
  player2_score: number;
  player1_name: string;
  player2_name: string;
  current_winner: string;
  scoreDiff: () => void;
}

export class Score extends DB implements TScore, TModel<TScore> {
  id: string;
  player1_score: number;
  player2_score: number;
  player1_name: string;
  player2_name: string;
  current_winner: string;

  constructor(score: TScore) {
    super();
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
