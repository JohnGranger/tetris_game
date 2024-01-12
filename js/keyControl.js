export function keyControl(event, p) {
    switch (event.key) {
        case 'a':
        case 'A':
        case 'ArrowLeft':
            p.moveLeft();
            break
        case 'w':
        case 'W':
        case 'ArrowUp':
            p.rotate();
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            p.moveRight();
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            p.moveDown();
            break;
        default:
            p.moveDown();

    }
}