import {computePosition, shift, flip, offset} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.2.5/+esm';
        const parents = document.querySelectorAll('.parent');
        const tooltips = document.querySelectorAll('.tooltip');

        parents.forEach((element, index) => {
        const parent = parents[index]
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

        // computePosition(parent, tooltip, {
        //     placement: 'left',
        //     middleware: [offset(12),shift(),flip()],
        // }).then(({x, y}) => {
        //         Object.assign(tooltip.style, {
        //             left: `${x}px`,
        //             top: `${y}px`,
        //         });
        //     });

        parent.addEventListener('mouseenter', () =>{
            updatePosition(parent, tooltip)
            tooltip.style.display='block'
        })
        parent.addEventListener('mouseleave', () =>{
            tooltip.style.display='none'
        })
        
        }); 
    
// const cleanup = autoUpdate(
//     thing,
//     tooltip,
//     updatePosition,
// );
