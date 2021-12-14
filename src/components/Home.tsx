import React, { useState } from 'react';

import { ObjInpts } from '../interfaces/interfaces.js';
import Objects from './Objects.js';
import { GameObjects } from '../interfaces/interfaces.js';
import { useAppDispatch, useAppSelector } from '../hooks.js';
import { fetchObjs } from '../features/objs/objSlice.js';
import items from './layout/json/items.json'
import Modal from './layout/Modal.js';

const Home = () => {
    const [searchObjs, setObjsSearch] = useState<ObjInpts>({
        objA: '',
        objB: ''
      });

      const dispatch = useAppDispatch();
      const data: GameObjects = useAppSelector(state => state.objs);
      const showAll: boolean = useAppSelector(state => state.options.showAll)

      const [canClick, setClick] = useState<boolean>(false)
    
      const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setObjsSearch({...searchObjs, [e.target.name]: e.target.value});
    
        if(searchObjs.objA.length > 0 && searchObjs.objB.length > 0) {
          setClick(true);
        } 
        
        else 
          setClick(false);
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)} />

            <button className="fa btn add-btn round" 
            aria-label="Add Object" disabled={canClick ? false : true} onClick={(e: React.MouseEvent) => handleBtn(e)} 
            data-action='compare'>
              &#xf067;
            </button>

            <input type="text" id='obj-inpt-2' name='objB' list='obj-list'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)} />

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
