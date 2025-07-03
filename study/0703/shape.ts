abstract class Shape {
  size: number;
  //   calculateArea(): number {
  //     return 1;
  //   }
  abstract getAreaRectangle(width: number, height: number): number;
  abstract getAreaCircle(radius: number): number;
}

class Rectangle extends Shape {
  getAreaRectangle(width: number, height: number): number {
    return width * height;
  }

  getAreaCircle(radius: number): number {
    throw Error("Unimplemented method");
  }
}

class Circle extends Shape {
  getAreaRectangle(width: number, height: number): number {
    throw Error("Unimplemented method");
  }

  getAreaCircle(radius: number): number {
    return radius * radius * Math.PI;
  }
}
