import axios from "axios";

export async function getRestaurants () {

//https://frozen-reef-84613.herokuapp.com/api/restaurants
// Requêter un utilisateur avec un ID donné.
const response = await axios.get('http://localhost:1337/api/restaurants')
    return response.data.data.flat();

}

export async function getRestaurant (id) {

  // Requêter un utilisateur avec un ID donné.
  const response = await axios.get('http://localhost:1337/api/restaurants/'+id)
      return response.data.data;
  
  }





export function getAll(){
  return new Promise((resolve, reject) => {
    const datas = axios.get('http://192.168.144.25:1337/api/restaurants?populate=*')

    datas.then((res) => {
      resolve(res.data.data.flat())
    })
    .catch((err) => {
      if(err) {
        reject(err)
      }
    })
  })
}