export const tooltipVariants = {
    tooltipInitial: { scale: 0, opacity: 0 },
    tooltipAnimate: { scale: 1.00001, opacity: 1 },
}

export const buttonVariants = {
    buttonTap: { scale: .85 },
}

export const modalVariants = {
    modalInitial: {
        transformOrigin: 'left',
        transform: 'perspective(500px) rotateY(10deg)',
        opacity: 0,
        filter: 'blur(3px)'
    },
    modalAnimate: {
        transformOrigin: 'left',
        transform: 'perspective(500px)',
        opacity: 1,
        filter: 'blur(0px)'
    },
    modalExit: {
        transformOrigin: 'left',
        transform: 'perspective(500px) rotateY(10deg)',
        opacity: 0,
        filter: 'blur(3px)'
    }
}
