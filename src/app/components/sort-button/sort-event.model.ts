export class SortEvent {
  sortName: string;
  sortOrder: number;

  constructor(sortName: string, sortOrder: number) {
    this.sortName = sortName;
    this.sortOrder = sortOrder;
  }
}

