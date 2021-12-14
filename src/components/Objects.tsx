import { useAppSelector } from '../hooks.js';
import { GameObjects } from '../interfaces/interfaces.js';

import Item from './parts/Item.js';

const Objects = ({ data, showAll } : {data: GameObjects, showAll: boolean}) => {
    const showFilter = useAppSelector(state => state.options.isFilter);

    return(
        <div className='objects' id='objects'>
            
            {

                data.status === 'fulfilled' 
                ?

                data.items.map((item: any, idx: number) => (
                    <Item obj={item} diff={data.diffs[idx]} 
                        showAll={showAll} isFilter={showFilter} />
                )) 

                : null

            }
            
        </div>
    )
}

export default Objects
