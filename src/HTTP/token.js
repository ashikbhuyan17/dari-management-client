export const getAccessToken = ()=>{
    return localStorage.getItem("accessToken");
}
export const setAccessToken = (token)=>{
    return localStorage.setItem("accessToken",token);
}