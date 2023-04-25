import {computePosition, autoUpdate, shift, flip, offset} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.2.5/+esm';
        // debugger
        const parents = document.querySelectorAll('.parent');
        const tooltips = document.querySelectorAll('.tooltip');

        parents.forEach((element, index) => {
            // console.log(parents[index])
        const thing = parents[index]
        const tooltip = tooltips[index]

        function updatePosition(a,b) {
            computePosition(a, b, {
                placement: 'left',
                middleware: [offset(12),shift(),flip()],
            }).then(({x, y}) => {
                    Object.assign(b.style, {
                        left: `${x}px`,
                        top: `${y}px`,
                    });
                });
            }

        computePosition(thing, tooltip, {
            placement: 'left',
            middleware: [offset(12),shift(),flip()],
        }).then(({x, y}) => {
                Object.assign(tooltip.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                });
            });
            // d.addEventListener('mouseleave', (e) =>{
            //     ft.className='tooltip'
            // })
        thing.addEventListener('mouseenter', (e) =>{
            updatePosition(thing, tooltip)
            tooltip.style.display='block'
        })
        thing.addEventListener('mouseleave', (e) =>{
            tooltip.style.display='none'
        })
        
        }); 
    
// const cleanup = autoUpdate(
//     thing,
//     tooltip,
//     updatePosition,
// );
