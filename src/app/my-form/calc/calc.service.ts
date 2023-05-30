import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  getColorForPoint(point: { x: number; y: number }, radius: number): string {
    const distance = Math.sqrt(point.x ** 2 + point.y ** 2);
    return distance <= radius ? 'green' : 'red';
  }

  generatePointsArray(numPoints: number, radius: number): { point: { x: number; y: number }; color: string }[] {
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const x = Math.random()*10; 
      const y = Math.random()*10; 

      const point = { x, y };
      const color = this.getColorForPoint(point, radius);

      points.push({ point, color });
    }

    return points;
  }
}
