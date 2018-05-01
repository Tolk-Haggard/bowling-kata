import { TestBed, inject } from '@angular/core/testing';

import { ScoreKeeperService } from './score-keeper.service';

let i: number;
let testObject: ScoreKeeperService;

describe('ScoreKeeperService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreKeeperService]
    });
  });

  beforeEach(inject([ScoreKeeperService], (service: ScoreKeeperService) => {
    testObject = service;
  }));

  it('should be created', () => {
    expect(testObject).toBeTruthy();
  });

  it('should score a gutter game', () => {
    for (i = 0; i < 20; i++) {
      testObject.rollBall(0);
    }

    expect(testObject.calculateScore()).toEqual(0);
  });
});
