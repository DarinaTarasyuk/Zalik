import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('color:red', () => {
    let point = { x: 3, y: 4 }
    let color = service.getColorForPoint(point, 1)
    expect(color).toBe("red");
  });

  it('color:green', () => {
    let point = { x: 1, y: 1 }
    let color = service.getColorForPoint(point, 5)
    expect(color).toBe("green");
  });

});
