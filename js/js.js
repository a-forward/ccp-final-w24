const galleries = document.getElementsByClassName('gallery')
console.log(galleries)
for (let gallery of galleries) {
    const images = gallery.querySelectorAll('img, video')
    console.log(images)
    let currentImage = null
    for (let image of images) {
        image.addEventListener('click', function () {
            console.log('click')
            if (currentImage) {
                currentImage.classList.remove('active')
            }
            currentImage = image
            currentImage.classList.add('active')
        })
    }
    window.addEventListener('click', function (event) {
        if (currentImage && !gallery.contains(event.target)) {
            currentImage.classList.remove('active')
            currentImage = null
        }
    })
}