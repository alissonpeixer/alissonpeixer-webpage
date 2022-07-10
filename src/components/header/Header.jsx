import { AtSymbolIcon } from '@heroicons/react/outline';


import  Logo from "../../public/logo-az.svg";


export function Header() {
  return(
    <>
      <header id="header" className="flex justify-center  border-none">
          
          
          <div class="container text-platinum h-20 flex ">

            <div className="flex   justify-start grow w-32 pl-">
     
                <span className="pl-10  flex flex-col  justify-center"><img src={Logo} className="lg:w-16" alt="Logo aqui" /></span>

            </div>


            <div className="w-60 flex flex-col justify-center ">
              <nav className="pr-2 font-space  font-medium">
                <ul className="space-x-3 flex justify-end">



                  <li className="rounded-lg border-white  p-4 active:border">
                    <a href="#" className="flex hover:text-blueMarine">
                      <AtSymbolIcon className="w-4 lg:w-7"/>
                      <span className="pl-3 lg:text-lg ">Contact</span>
                    </a>
                  </li>
                  
                </ul>
              </nav>
            </div>

          </div>

    
      </header>
      

    
    </>
  )
}