// 默认情况下，null并且undefined是所有其他类型的子类型

let x: number = null; // null并且undefined是所有其他类型的子类型
let b: boolean = undefined; // null并且undefined是所有其他类型的子类型


// 但是，当使用--strictNullChecks标志时
let xx: null = null;
let bb: undefined = undefined;