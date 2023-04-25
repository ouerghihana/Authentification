import axios from 'axios'




 export const   postauthUser= async(value)=>{
 const addinguser= await axios.post('http://localhost:3000/auth/register',{...value})

 }


// Fonction asynchrone pour récupérer les données de l'utilisateur enregistré

 export const fetchAuthUser = async()=>{
    const token = localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:3000/auth/moncompte', {headers:{Authorization:token}})
    return data
}
 