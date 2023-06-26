import axios from 'axios';

const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  withCredentials: true,
});

export const get = async (path, options = {}) => axiosClient.get(path, options);

export const post = async (path, options = {}) => axiosClient.post(path, options);

export const put = async (path, options = {}) => axiosClient.put(path, options);

export const deleteAxios = async (path, options = {}) => axiosClient.delete(path, options);

export default axiosClient;