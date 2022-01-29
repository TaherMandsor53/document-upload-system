import axios from 'axios';

const baseURL = `http://localhost:3001`;

const getDocumentDetails = () => {
  const URL = `${baseURL}/documentList`;
  return axios.get(URL);
};

export default getDocumentDetails;
