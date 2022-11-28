import React, { useState } from "react";
import axios from "axios";

const useAxios = (URL) => {
    const [ response, setResponse] = useState();
    const responseData = async (formatter = data => data, remainingUrl = "") => {
        const res = await axios.get(`${URL}${remainingUrl}`);
        setResponse(data => [...data, formatter(res.data)]);
    };

    const clearResponses = () => setResponse([]);
    return [response, responseData, clearResponses];
}
//     const [ response, setResponse ] = useState(null);
//     const [error, setError] = useState(null);
//     const axiosData = async () => {
//         try {
//         const res = await axios.get(`${URL}`);
//         setResponse(res)
//         } catch(error){
//           setError(error);
//         }
//     axiosData();
//  }
//  return [response, error];


export default useAxios;