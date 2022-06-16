import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
export const postData = async(url,data,message = false,auth = false)=>{
    const response = await axios.post(`${url}`,data);
        // console.log(response);
    response.status === 201 ? displayMessage("Succesfully logged in") : displayMessage("Sorry!");
}
const displayMessage = (message)=>{
    MySwal.fire({
        icon: 'success',
        title: 'Great',
        text: `${message}`
      })
}
// const sendPostRequest = async(url,data,auth = false)=>{
//     try{
//         let response;
//         if(!auth){
//             response = await axios.post(`${url}`,data , {headers: {Authorization: `Bearer ${getAccessToken()}`}});
//         }else{
//             response = await axios.post(`${url}`,data);
//         }
//         if(auth) {
//             const {accessToken} = response.data;
//             localStorage.setItem('accessToken',accessToken);
//         }
//         return response;
//     }
//     catch(error){
//         return false;
//         // eslint-disable-next-line no-unreachable
//         displayMessage();
//     }
// }



