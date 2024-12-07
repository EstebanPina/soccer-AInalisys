'use client'
import { League } from "@/lib/types";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios"; 
import ModalPrediction from "./ModalPrediction";
import { MatchInfoFetched } from "@/lib/types";
import { useSession } from "next-auth/react";
type Props = { match: League };

export default function CardMatch({ match }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [match_information, setMatchInformation] = useState<MatchInfoFetched | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession();
  const isLogged = session && session.user;
  const handleModal = () => {
    setIsOpen(true)
    handleFetchInformation()
    setIsLoading(true)
  }
  const handleAddFavorite = async () => {
    if (!isLogged) return;
    let response = await axios.get(`${process.env.BACKEND_URL}/user/add_favorite/${match.idEvent}`, {
        headers: {
          Authorization: `Bearer ${session?.backendTokens?.accessToken}`,
        },
      });
    console.log(response.data)
    }

  const handleFetchInformation = async () => {
    let response = await axios.post(`${process.env.BACKEND_URL}/soccer_matches/`, {
        id_sports_api: match.idEvent,
        local_team: match.strHomeTeam,
        visitor_team: match.strAwayTeam,
        local_team_img: match.strHomeTeamBadge,
        visitor_team_img: match.strAwayTeamBadge,
        finished: false,
        venueId: match?.idVenue?match.idVenue:'28361',
      });
    setMatchInformation(response.data);
    setIsLoading(false)
  };
  const onClose = () => {
    setIsOpen(false)
    setMatchInformation(null)
  }
  return (
    <>
      <div
        key={match.idEvent}
        className="grid grid-cols-3 place-items-center w-4/5 gap-2 bg-gradient-to-b from-white/5 to-indigo-500/50 p-8 rounded-3xl "
      >
        <div className="flex col-span-3 justify-end items-end w-full"><button type="button" onClick={handleAddFavorite}>add</button></div>
        <div className="flex gap-4 flex-col">
          <img
            className="w-fit aspect-auto"
            src={match.strHomeTeamBadge}
            alt="home team"
          />
          <p className="w-full text-nowrap text-center">{match.strHomeTeam}</p>
        </div>
        <div className="flex gap-4 flex-col">
          <h5>VS</h5>
        </div>
        <div className="flex gap-4 flex-col">
          <img
            className="w-fit aspect-auto"
            src={match.strAwayTeamBadge}
            alt="away team"
          />
          <p className="w-full text-nowrap text-center">{match.strAwayTeam}</p>
        </div>
        <button
          type="button"
          onClick={handleModal}
          className="bg-gradient-to-t from-white/5 to-lapis_lazuli/50 p-2 rounded-xl col-span-3"
        >
          View Prediction
        </button>
      </div>
      <ModalPrediction isOpen={isOpen} onClose={onClose} isLoading={isLoading} match_information={match_information} />
    </>
  );
}
