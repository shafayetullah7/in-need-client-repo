import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect, useState } from "react";

const useSectors = () =>{
    // const [sectors,setSectors] = useState([]);

    
    const result = useQuery({
        queryKey: ['sectors'],
        queryFn: async () =>
            axios.get('http://localhost:5000/sectors')
            .then(res=>res.data)
          
      })

    console.log(result);
    if(!result.data)return {...result,data:[]};
    return result;
}

export default useSectors;