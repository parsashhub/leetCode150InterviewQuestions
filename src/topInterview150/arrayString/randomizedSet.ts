export class RandomizedSet {
  private list: number[];
  private map: Map<number, number>;

  constructor() {
    this.list = [];
    this.map = new Map();
  }

  private search(val: number): boolean {
    return this.map.has(val);
  }

  insert(val: number): boolean {
    if (this.search(val)) return false;

    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.search(val)) return false;

    const index = this.map.get(val)!;
    const lastElement = this.list[this.list.length - 1];

    this.list[index] = lastElement;
    this.map.set(lastElement, index); // update the index of the moved element
    this.list.pop(); // remove the last element
    this.map.delete(val); // remove the value from the map
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
}
