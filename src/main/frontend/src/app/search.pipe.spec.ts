import { SearchPipe } from './search.pipe';
import { Item } from './item';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return multiple results', () => {
    const pipe = new SearchPipe();
    const allItems = [
      new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1),
      new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1),
      new Item("New Choco Bar", "Much Noms", 0.85, false, "Food", "www.food.com", 1)
    ];
    const searchTerm = "New";

    const expectValues = [
      new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1),
      new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1),
      new Item("New Choco Bar", "Much Noms", 0.85, false, "Food", "www.food.com", 1)
    ];
    const actualValues = pipe.transform(allItems, searchTerm);

    expect(actualValues.length).toEqual(expectValues.length);
    expect(actualValues[0].name).toEqual(expectValues[0].name);
    expect(actualValues[0].description).toEqual(expectValues[0].description);
    expect(actualValues[1].name).toEqual(expectValues[1].name);
    expect(actualValues[1].description).toEqual(expectValues[1].description);
    expect(actualValues[2].name).toEqual(expectValues[2].name);
    expect(actualValues[2].description).toEqual(expectValues[2].description);
  });

  it('should return one result', () => {
    const pipe = new SearchPipe();
    const allItems = [
      new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1),
      new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1),
      new Item("New Choco Bar", "Much Noms", 0.85, false, "Food", "www.food.com", 1)
    ];
    const searchTerm = "Choco";

    const expectValues = [
      new Item("New Choco Bar", "Much Noms", 0.85, false, "Food", "www.food.com", 1)
    ];
    const actualValues = pipe.transform(allItems, searchTerm);

    expect(actualValues.length).toEqual(expectValues.length);
    expect(actualValues[0].name).toEqual(expectValues[0].name);
    expect(actualValues[0].description).toEqual(expectValues[0].description);
  });

  it('should return no results', () => {
    const pipe = new SearchPipe();
    const allItems = [
      new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1),
      new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1),
      new Item("New Choco Bar", "Much Noms", 0.85, false, "Food", "www.food.com", 1)
    ];
    const searchTerm = "eva";

    const actualValues = pipe.transform(allItems, searchTerm);

    expect(actualValues.length).toEqual(0);
  });
});
