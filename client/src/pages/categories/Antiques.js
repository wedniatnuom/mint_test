import React from "react"
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../../utils/queries";
import { useParams } from 'react-router-dom';
import SingleAntique from '../../components/ListingCards/singleAntique';


// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

export default function Antiques() {
    const { loading, data } = useQuery(QUERY_LISTINGS)
    if (loading) {
      console.log(loading)
    }
    const antiques = data?.listings || {};
    
    if (loading) {
      return (<div>Loading...</div>)
    } 
    return(
        <div>
          {antiques &&
            antiques.map((antique) => (
              <SingleAntique key={antique._id} antique={antique} />
            ))}
        </div>
      );
   
  }; 