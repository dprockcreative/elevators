export class InMemoryDataService {
  createDb() {
    let shafts = [
      { id: 1, stories: 7 },
      { id: 2, stories: 7 },
      { id: 3, stories: 7 },
      // { id: 4, stories: 10 },
      // { id: 5, stories: 10 },
    ];
    return { shafts };
  }
}
