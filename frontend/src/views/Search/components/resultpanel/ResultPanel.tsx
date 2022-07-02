import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../../app/store';
import FlexBox from '../../../../components/containers/flexbox/FlexBox';

import getAxios from '../../../../helpers/wrappedAxios';
import { setPageData } from '../../../../slices/pageSlice';
import Card from '../card';
import PaginationBar from '../pagination';

var axios = getAxios();

const ResultPanel = () => {
  const dispatch = useDispatch();
  const scope = useSelector((state: RootState) => state.pagedata.scope);

  let results = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  const getDataFromServer = async () => {
    let result = await axios('/getplaces/' + scope.start + '/' + scope.end);
    dispatch(setPageData(result.data));
  };

  useEffect(() => {
    getDataFromServer();
  });

  return (
    <FlexBox addClass='w-full flex-col pb-32'>
      <div className='w-full grid grid-cols-3 gap-8'>
        {results.map((one, index) => (
          <Card key={'card' + index} index={index} />
        ))}
      </div>
      <PaginationBar />
    </FlexBox>
  );
};

export default ResultPanel;
