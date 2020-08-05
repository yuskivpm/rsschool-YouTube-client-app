import { FilterByKeyWordPipe } from './filter-by-key-word.pipe';

describe('FilterByKeyWordPipe', () => {
  it('create an instance', () => {
    const pipe: FilterByKeyWordPipe = new FilterByKeyWordPipe();
    expect(pipe).toBeTruthy();
  });
});
