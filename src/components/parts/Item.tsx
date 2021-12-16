import { ROOT_URL, STATS } from '../../constants/consts';
import { useAppSelector } from '../../hooks';

const Item = ({ obj, diff, showAll=false, isFilter } :
     { obj: any, diff:any, showAll: boolean, isFilter: boolean }) => {

    let stats = obj['obj']
    let urls = obj['images']
    let filters = useAppSelector(state => state.options.filters);

    const diffPart = (key: string, idx: number) => {
        let isCon = diff[key] < 0 ? true : false;
        let pct = isCon ? diff[key] + '%' : '+' + diff[key] + '%';

        return (
            <tr className='stat' key={idx}>
                <th><div className="td-th-wrap">{key}</div></th>
                <td><div className="td-th-wrap">{stats[key]}</div></td>
                <td className={`pct ${isCon ? 'con': null}`}
                >{diff[key] ? pct : null}</td>
            </tr>
        )
    }

    const createDiff = (key: string, idx: number) => {
        if(showAll && !isFilter) {
            return(diffPart(key, idx));
        }

        else if(isFilter) {
            if(filters.includes(key)) {
                return(diffPart(key, idx));
            }
        }

        else {
            if(STATS.includes(key)) {
                return(diffPart(key, idx))
            }
        }

    }

    return (
        <div className="object">

            <header className="obj-header">
                <p className="obj-title">{stats['DisplayName']}</p>
                <div className="obj-icon">
                    <img aria-label={stats['DisplayName']}
                    src={urls ? ROOT_URL + urls['icon']: ''} loading='lazy' />
                </div>
            </header>

            <table className="stats">
                <tbody>
                    {
                        Object.keys(stats).map((key, idx) => {
                            return (
                                createDiff(key, idx)
                            )
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default Item

