// 元组类型允许表示一个已知元素数量和类型的数组 --- Tuple
let x: [string, number];

x = ['张三', 22];

x = ['lisi', '22']; // ⚠️Error

// 访问一组已知索引之外的元素失败，并显示以下错误
const m = x[2]; // ⚠️Error
x[3] = 1000; // ⚠️Error