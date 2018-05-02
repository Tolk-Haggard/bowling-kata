import { Injectable } from '@angular/core';

@Injectable()
export class ScoreKeeperService {

  frame_started: boolean;
  previous_spare: boolean;

  total_score: number;
  roll1: number;
  current_frame: number;

  constructor() {
    this.total_score = 0;
    this.roll1 = 0;
    this.frame_started = false;
    this.previous_spare = false;
    this.current_frame = 1;
  }

  public rollBall(pins: number) {
    this.total_score += pins;

    if (this.frame_started) {
      if (pins + this.roll1 === 10) {
        this.previous_spare = true;
      }

      this.frame_started = false;
      this.current_frame++;
    } else { // This is the first roll of the frame

      this.frame_started = true;
      this.roll1 = pins;

      if ((this.previous_spare === true) &&
        (this.current_frame <= 10)) {
        this.total_score += pins;
        this.previous_spare = false;
      }
    }
  }

  public calculateScore(): number {
    return this.total_score;
  }

}
