import { useAppSelector } from '../hooks';

import Item from './parts/Item';

const Objects = ({ data, showAll } : {data: any, showAll: boolean}) => {
    const showFilter = useAppSelector(state => state.options.isFilter);

    return(
        <div className='objects' id='objects'>
            <Item obj={data['0']} diff={data['diffs']['0']} 
            showAll={showAll}
            isFilter={showFilter} />

            <Item obj={data['1']} diff={data['diffs']['1']} 
            showAll={showAll}
            isFilter={showFilter} />
        </div>
    )
}

export default Objects
