export function SectionAbountMe(){
  return(
    <>
      <section id="abountme" className="h-screen flex justify-center bg-platinum">
    

        <div className="flex flex-col justify-center  pt-20 w-4/5 space-y-4 lg:space-y-0">

              <div className="flex  font-space pl-2  font-next font-bold mb-2 max-w-2xl text-3xl md:text-4xl lg:text-5xl lg:pl-14 lg:justify-center">
                <h1 className="">Abount Me</h1>
              </div>

              <div className="flex w-full justify-center ">
                <div className="w-[120vh]">
                  <p className="container p-2 font-space text-onix lg:p-10">
                    lorem ipsum dolor sit amet, consectetur adip
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Nemo, nostrum magnam dignissimos in aspernatur debitis et 
                    dolore, architecto labore, repudiandae deleniti quas ex adipisci 
                    tempora molestias? Commodi ut deleniti eveniet!
                  </p>
                </div>
              </div>

              <div className="flex flex-col  items-center pt-20 font-bold  space-y-2  lg:flex-row lg:space-x-3 lg:justify-center">
                <button className="liner-gradiante p-3 rounded-full w-64"><a href="#home">Linkedin</a></button>
                <button className="liner-gradiante p-3 rounded-full w-64"><a href="#home">GitHub</a></button>
                <button className="liner-gradiante p-3 rounded-full w-64"><a href="#home">Discord</a></button>
                <button className="liner-gradiante p-3 rounded-full w-64"><a href="#home">Instagram</a></button>
              </div>

        </div>


      </section>
           
    </>
  )
}