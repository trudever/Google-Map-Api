import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../../../app/store'
import FlexBox from '../../../../components/containers/flexbox/FlexBox'

import getAxios from '../../../../helpers/wrappedAxios'
import { setPageData } from '../../../../slices/pageSlice'
import Card from '../card'
import PaginationBar from '../pagination'

var axios = getAxios()

const ResultPanel = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  const scope = useSelector((state: RootState) => state.pagedata.scope)
  const search = useSelector((state: RootState) => state.search)
  let results = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  const getDataFromServer = async () => {
    try {
      let result = await axios.post('/getplaces/', {
        start: scope.start,
        end: scope.end,
        search: search,
      })
      dispatch(setPageData(result.data))
    } catch (error) {}
  }

  useEffect(() => {
    setLoading(true)
    getDataFromServer()
  })

  return (
    <>
      <FlexBox addClass='w-full flex-col pb-32'>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[4rem] lg:gap-8'>
          {results.map((_one, index) => (
            <Card key={'card' + (index + scope.start)} index={index} />
          ))}
        </div>
        <PaginationBar />
      </FlexBox>
    </>
  )
}

export default ResultPanel
