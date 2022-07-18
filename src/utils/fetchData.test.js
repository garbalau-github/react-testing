import fetchData from './fetchData';

describe('fetchData', () => {
  it('fetchData should return correct todo', async () => {
    const todo = await fetchData(1);
    expect(todo.data.id).toBe(1);
  });
});
