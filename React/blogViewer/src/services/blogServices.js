import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchBlogs = async() => {
  const res = await axios.get(API_URL);
  // console.log(res);
  return res.data.slice(0, 10);
}