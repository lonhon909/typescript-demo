// 全局变量
declare const version: string;
// 全局函数
declare function getVersion(name: string): string;
// 全局类
declare class AnimaltypePo {
  constructor(title: string);
  getTitle(): string
}
// 全局对象（含有子属性的
declare namespace globalData {
  const list: Array<string>;
  function toString(): number;
}

// 除了全局变量之外，可能有一些类型我们也希望能暴露出来
interface Options {
  name: string
  age: number
  weight?: number
}