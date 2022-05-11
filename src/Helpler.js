import axios from "axios"

export const config = {
    base_url : "https://nitc.cleverapps.io/",
    // base_url : "http://localhost:8080/",
    image_path : "",
    version : "",
    token : ""
}

export const fetchData = (url="",data={},method="GET") => {
    const token = localStorage.getItem("accessToken");
    return axios({
        method : method,
        url : config.base_url + url,
        data : data,
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(resopnse=>{
        return resopnse.data;
    })
}