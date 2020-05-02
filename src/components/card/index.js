import React, { useRef, useContext } from 'react';
import { Container, Label } from './styles';
import { useDrag, useDrop } from "react-dnd";
import BoardContext from "../board/context";

export default function Card({ data, index, listIndex }) {
    const ref = useRef();
    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', index, listIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    
    const [, dropRef] = useDrop({
        accept: 'CARD', 
        hover(item, monitor) {
            const targetIndex = index;
            const draggedIndex = item.index;
            const targetListIndex = listIndex;
            const draggedListIndex = item.listIndex;

            if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;
            const draggedOffSet = monitor.getClientOffset();
            const draggedTop = draggedOffSet.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop > targetCenter) {
                return;
            }
            if (draggedIndex > targetIndex && draggedTop < targetCenter) {
                return;
            }

            move(
                draggedListIndex, /*index da lista que tem algum item sendo arrastado*/
                targetListIndex,
                draggedIndex,
                targetIndex
            )
            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    })
    /*define multiplas referencias*/
    dragRef(dropRef(ref));

    return (
        /*dragRef deixam os elementos arrastáveis*/
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {data.labels.map(label => <Label key={label} color={label} />)}
            </header>
            <p>{data.content}</p>
            {/* {data.user && <img src={data.user} alt="">} */}
            <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="" />
        </Container>
    );
}
