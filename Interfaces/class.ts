// 类 -- class

interface PersonInterface {
  name: string
}

// 类实现接口
class Person implements PersonInterface {
  name: string = '';
  constructor(name: string) {
    this.name = name;
  }
}

// 公共，私有与受保护的修饰符

// 默认为 public
class Animal {
  public name: string;
  public constructor(theName: string) { this.name = theName; }
  public move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// 理解 private --- 私有的
class AnimalVally {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

new AnimalVally("Cat").name; // ⚠️Error: 'name' 是私有的.

// 理解 protected --- 受保护的
class PersonVally {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}