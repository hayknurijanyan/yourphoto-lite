const uploadBtn = document.querySelector(".upload-btn")
const quantity = document.querySelector('.main-quantity')


uploadBtn.addEventListener("click", previewFiles)

function previewFiles() {
    const preview = document.querySelector('#preview');
    const files = document.querySelector('input[type=file]').files;

    function readAndPreview(file) {

        // Make sure `file.name` matches our extensions criteria
        if (/\.(jpe?g|png)$/i.test(file.name)) {
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                let image = new Image();
                image.height = 140;
                image.title = `${Date.now()}${file.name}`;
                console.log(image.title)
                image.src = this.result;
                preview.prepend(image);
                quantity.innerHTML = `Quantity: ${preview.children.length}`

            }, false);

            reader.readAsDataURL(file);
        } else {
            alert(`${file.name} is not supported format`)
        }

    }

    if (files) {
        [].forEach.call(files, readAndPreview);
    }

}