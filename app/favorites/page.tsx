
'use client';
import React, { useEffect, useState } from 'react'
import CardMatch from "@/components/CardMatch"
import axios from 'axios';
import { useStoreFavorites } from '../store/useStore';
import { League, MatchInfoFetched } from '@/lib/types';


type Props = {}

export default function page({}: Props) {
  const favorites=useStoreFavorites((state)=>state.favorites)
  console.log(favorites)
  const [matches, setMatches] = useState([])
  const fetch_data = async () => {
    let response = await axios.post(`${process.env.BACKEND_URL}/soccer_matches/get_many/`, {
      favorites:favorites
    });
    setMatches(response.data.data)
    console.log(response.data.data)
  }
  function ConvertData(match_fetched_data: MatchInfoFetched): League {
    return {
      idEvent: match_fetched_data.id_sports_api,
      strHomeTeam: match_fetched_data.local_team,
      strAwayTeam: match_fetched_data.visitor_team,
      strHomeTeamBadge: match_fetched_data.local_team_img,
      strAwayTeamBadge: match_fetched_data.visitor_team_img,
      idVenue:"",
    } as League;
}
  useEffect(() => {
    if(favorites.length==0) return;
    fetch_data()
  }, [favorites])
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-[80vh]">
      <h2 className="text-4xl font-bold text-center mt-8 capitalize">Your Favorites</h2>
      {matches.length>0&&(
      <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid w-full justify-center place-items-center gap-16 mt-8">
        {matches.map((match:MatchInfoFetched,idx:number) => {
          return (
            <CardMatch key={idx} match={ConvertData(match)}/>
          );
        })}
        </div>)
    }</div>
  )
}

