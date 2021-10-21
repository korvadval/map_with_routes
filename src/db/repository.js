import axios from 'axios';

import config from '../config'
const server = config.server

const GetServerPoints = async (user_config) => {
    let url = 'https://my-api43.herokuapp.com/api/points'
    if(!!user_config)
        url += "?user_config=" + user_config
    return await axios.get(url)
}

const GetGeocoderData = async (query) => {
    let key = "e4c820ba-37c0-4801-9bba-3b559cea39ab"
    let my_query = 'Красноярск, ' + query
    let geo_url = "https://graphhopper.com/api/1/geocode?q="+my_query+"&type=json&locale=ru&debug=true&key="+key
    console.log('GetGeocoderData geo_url', geo_url)
    return await axios.get(geo_url)
}

const GetRoute =  async (data) => {
    console.log('GetRoute', data)

    return await axios.post(
        server + "/get_route/", 
        data
    )
}

const GetCategories = async () => {
    let url = server + "/get_people_types"
    return await axios.get(url)
}

const GetCharts = async () => {
    let url = server + "/get_chars/"
    return await axios.get(url)
}


// const UploadImg =  async (data) => {
//     console.log('UpdateImg', data)

//     return await axios.post(
//         server + "/files/upload_img", 
//         data, 
//         {
//             headers: {
//                 "Content-type": "multipart/form-data"
//             },
//         }
//     )
// }

// const DownloadFiles =  (data) => {
//     console.log('DownloadFiles data', data)

//     const token = localStorage.token;

//     return PROFILE_POST({
//         server_url: '/files/download_files', 
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             'Auth': `${token}`
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => res.blob())  
//     .then((resp) => {
//         console.log('DownloadFiles resp', resp)

//         let filename = data.path.split('\\')
//         filename = filename[filename.length - 1]

//         // Create blob link to download
//         const url = window.URL.createObjectURL(
//             new Blob([resp]),
//         );
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute(
//             'download',
//             filename
//         );
    
//         // Append to html link element page
//         document.body.appendChild(link);
    
//         // Start download
//         link.click();
    
//         // Clean up and remove the link
//         link.parentNode.removeChild(link);
        
//     });
// }


export { 
    // === Server ===
    GetServerPoints,
    GetRoute,
    GetCategories,
    GetCharts,

    // === GraphHopper ===
    GetGeocoderData,
    
}
