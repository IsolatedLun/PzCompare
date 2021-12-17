export const handleBar = (close: boolean=false) => {
    const bar: HTMLElement = document.getElementById('progress-bar')!;

    if(close) {
        bar.style.width = '0';
        bar.style.display = 'none';
    }

    else
        bar.style.width = '100%';
        bar.style.display = 'block';
}

export const showPopup = (text: string, _type: 'info' | 'err') => {
    const popup: HTMLElement = document.getElementById('popup')!;
    const popupTxt = popup.childNodes[0] as HTMLParagraphElement;

    popupTxt.textContent = text;
    popup.className = 'popup ' + _type;
    
    if(!popup.classList.contains('active')) {
        popup.classList.add('active');

        setTimeout(() => {
            popup.classList.remove('active')
        }, 2500);
    }
}

export const genPopup = (strs: string[], rarity: number) => {
    let num: number = genNum(strs.length * rarity);

    if (num < strs.length) {
        showPopup(strs[num], 'info');
    }
}

// Simply toggles a element's classname.
export const toggleEl = (elName: string, className: string) => {
    const modal = document.getElementById(elName)!;
    modal.classList.toggle(className);
}

// Extra utils
export const parseName = (text: string): string => {
    const arr = text.split(' ')

    arr.forEach((str: string, idx: number, arr) => {
        arr[idx] = str.charAt(0).toUpperCase() + str.substring(1);
    })

    return arr.join('_');
}

export const genNum = (max: number): number => {
    return Math.floor(Math.random() * max);
}