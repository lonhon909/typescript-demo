// 只读属性 -- readonly

interface Point {
  readonly x: number
  readonly y: number
}

const position: Point = {
  x: 100,
  y: 100
}

position.x = 200; // ⚠️ 能在对象刚刚创建的时候修改其值

// TypeScript具有ReadonlyArray<T>类型 --- 只读数组
let ro: ReadonlyArray<number> = [1, 2, 3];
ro.push(4); // ⚠️
ro.length // 3
