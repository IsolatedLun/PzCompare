import React, { useState } from 'react';

import { ObjInpts } from '../interfaces/interfaces';
import Objects from '../components/Objects';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchObjs } from '../features/objs/objSlice';
import items from '../components/layout/json/items.json'
import Modal from './layout/Modal';

const Home = () => {
    const [searchObjs, setObjsSearch] = useState<ObjInpts>({
        objA: '',
        objB: ''
      });

      const dispatch = useAppDispatch();
      const data: any = useAppSelector(state => state.objs['data']);
      const showAll = useAppSelector(state => state.options.showAll)

      const [canClick, setClick] = useState<boolean>(false)
    
      const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setObjsSearch({...searchObjs, [e.target.name]: e.target.value});
    
        if(searchObjs.objA.length > 0 && searchObjs.objB.length > 0) {
          setClick(true);
        } 
        
        else 
          setClick(false);
      };
    
      const handleBtn = (e: any) => {
        e.preventDefault();
        const action: string = e.target.getAttribute('data-action')
    
        if(action === 'compare') {
          dispatch(fetchObjs({ 'objs': [searchObjs.objA, searchObjs.objB], 
          'showAll': showAll }));
        }
        
      };

    return (
    <main className="main-container">

        <div className="add-part">
            <input type="text" id='obj-inpt-1' name='objA' list='obj-list'
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)} />

            <button className="fa btn add-btn round" 
            aria-label="Add Object" disabled={canClick ? false : true} onClick={(e) => handleBtn(e)} 
            data-action='compare'>
              &#xf067;
            </button>

            <input type="text" id='obj-inpt-2' name='objB' list='obj-list'
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)} />

            <datalist id='obj-list'>
              {
                items.map((item: string, key: number) => (
                  <option value={item} key={key}></option>
                ))
              }
            </datalist>
        </div>
        
            {
              data['diffs']
              ?
              <Objects data={data} showAll={showAll} />
              : null
            }

    <Modal />

    </main>
    )
}

export default Home
