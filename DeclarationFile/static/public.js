const version = 'v1.2.1';

function getVersion(name) {
  return name + version;
}

class AnimaltypePo {
  constructor(title) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
}

const globalData = {
  list: [],
  toString() {
    return this.list.length;
  }
}