import React from "react"
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../../utils/queries";
import SingleComicBook from '../../components/ListingCards/singleComicBook';

export default function ComicBooks() {
    const { loading, data } = useQuery(QUERY_LISTINGS)
    if (loading) {
      console.log(loading)
    }
    const comicbooks = data?.listings || {};
    
    if (loading) {
      return (<div>Loading...</div>)
    } 
    return(
        <div>
          {comicbooks &&
            comicbooks.map((comicbook) => (
              <SingleComicBook key={comicbook._id} comicbook={comicbook} />
            ))}
        </div>
      );
  }; 