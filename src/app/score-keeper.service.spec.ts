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

  it('should score a game with a spare in every frame', () => {
    for (i = 0; i < 20; i++) {
      if (i % 2 === 0) {
        testObject.rollBall(6);
      } else {
        testObject.rollBall(4);
      }
    }
    testObject.rollBall(10);

    expect(testObject.calculateScore()).toEqual(164);
  });

  it('should score a game with a spare', () => {
    for (i = 0; i < 20; i++) {
      if (i === 7) {
        testObject.rollBall(6);
      } else if (i === 15) {
        testObject.rollBall(6);
      } else {
        testObject.rollBall(4);
      }
    }

    expect(testObject.calculateScore()).toEqual(92);
  });
});
