const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview-img");
const previewText = previewContainer.querySelector(".image-preview-text")
const log = console.log

inpFile.addEventListener("change", function () {
    const allFiles = this.files
    const reader = new FileReader();

    if (allFiles.length > 0) {

        reader.readAsDataURL(allFiles[0])

        reader.onloadend = function () {
            console.log('DONE', reader.readyState); // readyState will be 2
        };
        log(allFiles)
        log(reader)
    }
})