import React, { useState } from 'react';

import { ObjInpts } from '../interfaces/interfaces';
import Objects from './Objects';
import { GameObjects } from '../interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchObjs } from '../features/objs/objSlice';
import items from './layout/json/items.json'
import Modal from './layout/Modal';

const Home = () => {
    const [searchObjs, setObjsSearch] = useState<ObjInpts>({
        objA: '',
        objB: ''
      });

      const dispatch = useAppDispatch();
      const data: GameObjects = useAppSelector(state => state.objs);
      const showAll: boolean = useAppSelector(state => state.options.showAll)

      const [canClick, setClick] = useState<boolean>(true)
    
      const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setObjsSearch(prevObjs => ({...prevObjs, [e.target.name]: e.target.value}));

      };
    
      const handleBtn = (e: React.MouseEvent) => {
        e.preventDefault();
        const action: string = (e.target as HTMLButtonElement).getAttribute('data-action')!
    
        if(action === 'compare') {
          dispatch(fetchObjs({ 'objs': [searchObjs.objA, searchObjs.objB], 
          'showAll': showAll }));
        }
        
      };

    return (
    <main className="main-container">

        <div className="add-part">
            <input type="text" id='obj-inpt-1' name='objA' list='obj-list'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)} 
            value={searchObjs.objA} />

            <button className="fa btn add-btn round" 
            aria-label="Add Object" disabled={canClick ? false : true} onClick={(e: React.MouseEvent) => handleBtn(e)} 
            data-action='compare'>
              &#xf067;
            </button>

            <input type="text" id='obj-inpt-2' name='objB' list='obj-list'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)} 
            value={searchObjs.objB} />

            <datalist id='obj-list'>
              {
                items.map((item: string, key: number) => (
                  <option value={item} key={key}></option>
                ))
              }
            </datalist>
        </div>
        
        <Objects data={data} showAll={showAll} />

    <Modal />

    </main>
    )
}

export default Home
