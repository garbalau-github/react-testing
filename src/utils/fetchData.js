import axios from 'axios';

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log(results);
  return results;
};

fetchData(1);

export default fetchData;
