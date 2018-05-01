import { TestBed, inject } from '@angular/core/testing';

import { ScoreKeeperService } from './score-keeper.service';

let i: number;

describe('ScoreKeeperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreKeeperService]
    });
  });

  it('should be created', inject([ScoreKeeperService], (testObject: ScoreKeeperService) => {
    expect(testObject).toBeTruthy();
  }));

  it('should score a gutter game', inject([ScoreKeeperService], (testObject: ScoreKeeperService) => {
    for (i = 0; i < 20; i++) {
      testObject.rollBall(0);
    }

    expect(testObject.calculateScore()).toEqual(0);
  }));
});
