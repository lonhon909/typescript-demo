// enum类型是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字

enum Color { // 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值
  Red,
  Blue,
  Green
}

/* 枚举ts会编译成一个对象
  var Color;
  (function (Color) {
      Color[Color["Red"] = 0] = "Red";
      Color[Color["Blue"] = 1] = "Blue";
      Color[Color["Green"] = 2] = "Green";
  })(Color || (Color = {}));
*/

let c: Color = Color.Green;

console.log(c)

enum promiseType {
  Pendding = 1,
  Resolved,
  Rejected
}
