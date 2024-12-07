
import CardMatch from "@/components/CardMatch"
import { League } from "@/lib/types"
export default async function Page({params,}: {  params: Promise<{ league_id: string }>;}) {
  const league_id = (await params).league_id;
  let data = await fetch(`${process.env.BACKEND_URL}/sportsdb/league/${league_id}`)
  let matches = await data.json()
  let matches_data = matches.events || []
  console.log(matches)
  const slug = (await params).league_id;
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-[80vh]">
      <h2 className="text-4xl font-bold text-center mt-8 capitalize">League of {slug}</h2>
      {matches&&(
      <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid w-full justify-center place-items-center gap-16 mt-8">
        {matches_data.map((match:League,idx:number) => {
          return (
            <CardMatch key={idx} match={match}/>
          );
        })}
        </div>)
    }</div>
  );
}
