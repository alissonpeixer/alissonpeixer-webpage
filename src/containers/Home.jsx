import {Header} from "../components/header/Header";
import {Banner} from "../components/banner/Banner";

export function Home(){
  return(
    <>
    <div className="pb-36">
      <Header />
      <Banner />
    </div>
    </>
  )
}