import Container from "../../components/containers"
import GoogleMap from "../../components/googlemap"
import ResultPanel from "./components/resultpanel"
import SelectPanel from "./components/selectpanel"

const SearchPage = () => {

  return (
    <div>
      <GoogleMap />
      <Container addClass="flex flex-col md:flex-row w-full gap-[20px] md:px-[4%] md:gap-[50px] lg:gap-[20px] mt-[20px] md:mt-[40px] lg:mt-[20px]">
        <SelectPanel />
        <ResultPanel />
      </Container>
    </div>
  )
}

export default SearchPage
