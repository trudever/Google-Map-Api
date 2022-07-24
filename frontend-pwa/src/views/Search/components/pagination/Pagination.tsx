import { useSelector } from 'react-redux'

import PageButton from './PageButton'
import FlexBox from '../../../../components/containers/flexbox/FlexBox'
import { numbersToShow } from '../../../../slices/pageSlice'
import { RootState } from '../../../../app/store'

const PaginationBar = () => {
	const numberScope = useSelector(
		(state: RootState) => state.pagedata.numberScope
	)
	var array = []
	for (let i = 0; i < numbersToShow; i++) {
		array[i] = numberScope.start + i
	}

	return (
		<FlexBox addClass='w-full justify-center mt-28'>
			<FlexBox addClass='gap-4'>
				<PageButton type='PREV' value={'<'} />
				{array.map((value, index) => (
					<PageButton key={'PGButton' + value} value={value} />
				))}
				<PageButton type='NEXT' value={'>'} />
			</FlexBox>
		</FlexBox>
	)
}

export default PaginationBar
