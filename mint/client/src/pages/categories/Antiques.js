import React from "react"
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../../utils/queries";
import SingleAntique from '../../components/ListingCards/singleAntique';


export default function Antiques() {
    const { loading, data } = useQuery(QUERY_LISTINGS)
    if (loading) {
      console.log(loading)
    }
    const antiques = data?.listings || {};
    
    if (loading) {
      return (<div>Loading...</div>)
    } else 
    return(
        <div>
          {antiques &&
            antiques.map((antique) => (
              <SingleAntique key={antique._id} antique={antique} />
            ))}
        </div>
      );
    
   
  }; 