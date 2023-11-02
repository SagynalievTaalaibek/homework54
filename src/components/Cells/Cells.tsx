import React from 'react';

interface Props {
    hasItem: boolean;
    clicked: boolean;
    changeBack: React.MouseEventHandler;
}

const Cells: React.FC<Props> = ({hasItem, clicked, changeBack}) => {
    const cellClass = ['cell'];


    if (clicked) {
        cellClass.push('click');
        if (hasItem) {
            cellClass.push('hasItem');
        }
    } else {
        cellClass.push('notClick');
    }

    return (
        <div className={cellClass.join(' ')} onClick={changeBack}></div>
    );
};

export default Cells;