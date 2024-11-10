function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

let handleResize = debounce(() => console.log("Resized!"), 500);
window.addEventListener("resize", handleResize);
