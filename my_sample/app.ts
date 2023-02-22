// interface IChart {
//   width: number;
//   height: number;
//   title: Title;
// }

class Size {
  private _width: number;
  private _height: number;
  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}

class Item {
  private size: Size;
  private point: Point;
  constructor(size: Size, point: Point) {
    this.size = size;
    this.point = point;
  }
}

class Chart extends Item {
  private title: Title;
  constructor(size: Size, point: Point) {
    super(size, point);
    this.title = new Title("title");
  }
  toString(): string {
    return "I'm work";
  }
}

class Title {
  private title: string;
  constructor(title: string) {
    this.title = title;
  }
}

class YAxis {
  constructor() {}
}

class XAxis {
  constructor() {}
}

class Bar {
  constructor() {}
}

const chart = new Chart(new Size(0, 0), new Point(0, 0));
console.log(chart.toString());
