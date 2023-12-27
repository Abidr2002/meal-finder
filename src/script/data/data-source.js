import axios from 'axios';

class DataSource {
  static searchMeal(keyword) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.meals) {
          return Promise.resolve(data.meals);
        }
        return Promise.reject(`${keyword} is not found`);
      })
      .catch((error) => Promise.reject(error));
  }
}

export default DataSource;
