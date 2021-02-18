
    const preview = document.querySelector('#preview');
    const files   = document.querySelector('input[type=file]').files;

function previewFiles() {

    function readAndPreview(file) {
  
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png)$/i.test(file.name) ) {
        const reader = new FileReader();
  
        reader.addEventListener("load", function () {
          let image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          preview.prepend( image );
        }, false);
  
        reader.readAsDataURL(file);
      } else {alert(`${file.name} is not supported format`)
    console.log(file.name)
    }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
  }