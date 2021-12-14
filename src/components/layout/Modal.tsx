import React, { useEffect } from 'react'
import { addFilter, removeFilter } from '../../features/options/optionSlice.js';
import { useAppDispatch, useAppSelector } from '../../hooks.js';
import { toggleEl } from '../../utils/funcs.js';

const Modal = () => {
    const filters = useAppSelector(state => state.options.filters);
    const dispatch = useAppDispatch();

    const handleBtn = (e: React.ChangeEvent<HTMLButtonElement>) => {
        const action: string = e.target.value;

        if(action === 'add-filter') {
            let inpt = (document.getElementById('modal-inpt') as HTMLInputElement);
            
            if(inpt.value.length > 0) {
                dispatch(addFilter(inpt.value));
                inpt.textContent = '';
            }
        }
    }

    const handleFilter = (e: any) => {
        if(e.target.id === 'filter') {
            dispatch(removeFilter(e.target.getAttribute('data-idx')))
        } 
    }

    return (
        <div className="modal" id='modal'>

            <div className="flex-05">
                <input type="text" id='modal-inpt' className="main-inpt round" placeholder="Enter filters..." />
                <button className="fa btn round fs-sm" id='modal-btn' 
                value="add-filter" aria-label='Add Filter' 
                onClick={(e: any) => handleBtn(e)}>&#xf067;</button>
            </div>

            <div className="filters" id='modal-filters' onClick={(e) => handleFilter(e)}>
                {
                    filters.map((filter: string, idx: number) => (
                        <p className="filter round" id='filter' data-idx={idx}>{filter}</p>
                    ))
                }
            </div>

            <button className="btn exit-btn fs-sm round fw-n" id='modal-btn' 
            value='exit' aria-label='Close Modal' 
            onClick={() => toggleEl('modal', 'active')}>Close</button>

        </div>
    )
}

export default Modal
