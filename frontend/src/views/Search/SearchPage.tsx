import Container from '../../components/containers';
import GoogleMap from '../../components/googlemap';
import ResultPanel from './components/resultpanel';
import SelectPanel from './components/selectpanel';

const SearchPage = () => {
  return (
    <div>
      <GoogleMap />
      <Container addClass='flex w-full gap-[20px] mt-[20px]'>
        <SelectPanel />
        <ResultPanel />
      </Container>
    </div>
  );
};

export default SearchPage;
