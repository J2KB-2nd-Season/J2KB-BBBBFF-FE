import axios from 'axios'; // 액시오스

export default function customAxios(url, callback) {
  axios(
    {
      url: '/api' + url,
      method: 'post'
    }
  ).then(function (response) {
    callback(response.data);
  });
}