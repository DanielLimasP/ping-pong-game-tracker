import { TModel } from "../interfaces/model";
import { DB } from "../classes/db";

export interface TScore {
  id: string;
  player1_score: number;
  player2_score: number;
  player1_name: string;
  player2_name: string;
  currentWinner: string;
  scoreDiff: () => void;
}

export interface TScoreDTO {
  player1_score: number;
  player2_score: number;
  player1_name: string;
  player2_name: string;
  winner?: string;
  scoreDiff?: number;
}

export class Score extends DB implements TModel<TScore> {
  constructor() {
    super("./public/data/collections/scores.json");
  }

  public calcDiff(data: TScore | TScoreDTO) {
    return Math.abs(data.player1_score - data.player2_score);
  }

  public calcWinner(data: TScore | TScoreDTO) {
    if (data.player1_score < data.player2_score) {
      return data.player2_name;
    }
    return data.player1_name;
  }
}
