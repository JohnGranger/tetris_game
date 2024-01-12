export function createHDCanvas(canvas, context, width = window.innerWidth, height = window.innerHeight / 1.5) {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = width * ratio; // 实际渲染像素
    canvas.height = height * ratio; // 实际渲染像素
    canvas.style.width = `${width}px`; // 控制显示大小
    canvas.style.height = `${height}px`; // 控制显示大小
    context.scale(ratio, ratio)
}