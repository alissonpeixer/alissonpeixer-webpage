import { ArrowCircleDownIcon } from '@heroicons/react/solid';

import {Button} from "../../utils/button/Button";

const center = "flex flex-row justify-center tracking-[0.1em] leading-[4rem] text-[4rem] lg:text-[10rem]  lg:p-12"

export function Banner(){
  return(
    <>
      <section id="banner" className="h-[80vh] flex flex-col justify-center bg-blur  bg-no-repeat " >
        
          <div className="flex flex-col h-96  space-y-32 lg:space-y-12">


              <div className="text-platinum  font-space ">

                <div className={center}>
                  <h1 className="font-light  text-lg  ">WELCOMED</h1>
                </div>

                <div className={center}>
                  <span className='text-blueMarine  font-bold'>&#60;</span>
                  World
                  <span className='text-blueMarine  font-bold'>&#62;</span>
                </div>

                
              </div>

              
              <div className="flex  justify-center pt-6">
                <Button/>
              
              </div>
              
          </div>

          <div className="absolute top-[80vh] lg:top-[90vh] w-full">
            <div className="flex flex-row justify-center">
                <a href="#abountme"><ArrowCircleDownIcon className="w-14  text-blueMarine opacity-70"/></a>
            </div>
          </div>
      </section>

    
    </>
  )
}