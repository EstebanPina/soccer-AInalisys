export type User = {
  id: string;
  name: string;
  email: string;
};

export interface League {
  idEvent: string
  strHomeTeam: string
  strAwayTeam: string
  strHomeTeamBadge: string
  strAwayTeamBadge: string
  idVenue: string
}
export interface MatchInfoFetched {
  local_team: string
  local_team_img: string
  visitor_team: string
  visitor_team_img: string
  prediction_ai: string
  view_count: number
}