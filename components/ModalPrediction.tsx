import { AnimatePresence,motion } from 'framer-motion'
import { modalVariants } from '@/constants/animation';
import { RiCloseCircleFill } from 'react-icons/ri';
import React from 'react'
import { MatchInfoFetched } from '@/lib/types';
import { CircleLoader } from 'react-spinners';

type Props = {isOpen: boolean, isLoading:boolean, onClose: () => void, match_information:  MatchInfoFetched | null}

export default function ModalPrediction({isOpen,isLoading,onClose,match_information}: Props) {
  return (
    <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed top-0 duration-200 left-0 w-full h-full bg-black z-50 safari-z bg-opacity-30 backdrop-blur-sm flex justify-center items-center xl:bg-opacity-60 cursor-pointer"
        onClick={onClose}
        variants={modalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
      <button className="md:flex h-fit absolute top-4 right-4 hidden">
            <RiCloseCircleFill
              className="text-white"
            />
          </button>
          
        <motion.div
          className="bg-gradient-to-t from-rich_black from-30% via-lapis_lazuli/80 to-rich_black w-full md:w-11/12 flex flex-col justify-start items-center text-center p-6 gap-4 md:rounded-xl overflow-y-scroll cursor-default md:max-h-[90vh] h-full"
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="flex h-fit absolute top-4 right-4 md:hidden">
          <RiCloseCircleFill
              className="text-white"
            />
          </button>
          {isLoading || match_information===null? <div className='flex flex-col h-72 justify-center items-center'><CircleLoader color='#fff' size={500} />Generating Prediction</div>:<>
          <h1 className="text-2xl font-bold">Match Prediction</h1>
          <div className="flex flex-col gap-4 w-3/4 ">
            <div className="grid grid-cols-3 place-items-center gap-2">
              <div className='flex flex-col gap-2 justify-center items-center'>
              <img className="w-1/2 aspect-auto" src={match_information.local_team_img} alt="home team"/>
              <h2 className="text-xl font-bold">{match_information.local_team}</h2>
              </div>
              <div>
                <h2 className="text-xl font-bold">VS</h2>
              </div>
              <div className='flex flex-col gap-2 justify-center items-center'>
              <img className='w-1/2 aspect-auto' src={match_information.visitor_team_img} alt="away team"/>
              <h2 className="text-xl font-bold">{match_information.visitor_team}</h2>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-lg p-8 text-justify bg-gradient-to-t from-black/20 to-black/50 rounded-3xl">{match_information.prediction_ai} <br/><span className='flex text-xs mt-4 font-bold'>Prediction created with Gpt-4o-turbo model</span></h2>
              <h2 className="text-xl font-bold">Prediction views: {match_information.view_count}</h2>
            </div>
          </div>
          </>}
        </motion.div>
        </motion.div>)}
    </AnimatePresence>
  )
}