import { useAppSelector } from '../hooks';
import { GameObjects } from '../interfaces/interfaces';
import Steps from './layout/static/Steps';

import Item from './parts/Item';

const Objects = ({ data, showAll } : {data: GameObjects, showAll: boolean}) => {
    const showFilter = useAppSelector(state => state.options.isFilter);

    return(
        data.status === 'fulfilled' 
            ?

            <div className='objects' id='objects'>
                {
                    data.items.map((item: any, idx: number) => (
                        <Item key={idx} obj={item} diff={data.diffs[idx]} 
                            showAll={showAll} isFilter={showFilter} />
                    ))
                }
            </div> 

            : <Steps />
    )
}

export default Objects
