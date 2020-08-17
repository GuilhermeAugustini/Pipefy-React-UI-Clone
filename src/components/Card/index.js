import React from 'react';

import { useDrag} from 'react-dnd';

import { Container, Label } from './style';

export default function Card({ data }) {
    const [{ isDragging} , dragRef] = useDrag({
        item : { type: 'CARD'},
        collect: monitor =>({
            isDragging: monitor.isDragging(),
        }),
    });
    const [, dropRef ] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex === targetIndex){
                return;
            }

            const targetSize = ref.current.getBoundingClientRect()
            const targertCenter = (targetSize.bottom - targetSize.top) /2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggefOffset.y - targetSize.top;

            if(draggedIndex < targetIndex && draggedTop < targetcenter) {
                return;
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
            }
        }
    })


    return (
        <Container ref={dragRef} isDragging={isDragging}>
           <header>
                {data.labels.map(label => <Label key={label} color={label} />)}
            </header>
            <p>{ data.content }</p>

            {data.user && <img src={data.user} alt=""/>}
        </Container>
    )
}
