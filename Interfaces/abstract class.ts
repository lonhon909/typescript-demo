// 抽象类 --- 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化
abstract class AnimalU {
  abstract makeSound(): void; // 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
  move(): void {
      console.log('roaming the earch...');
  }
}