import {About, Skills, Header} from '../index'; 

const Main = () => {
  return(
    <>
      <Header linkTitle='Portfolio' linkTo='/portfolio'/>
      <Skills />
      <About />
    </>
  )
}

export default Main;