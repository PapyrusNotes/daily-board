uploadFile = document.querySelector("#portrait-img-input");
uploadBtn = document.querySelector("#upload-portrait");
portraitImage = document.querySelector('#profile img');

uploadBtn.addEventListener('click', () => {

})

uploadFile.addEventListener('change', () => {
    
    const newFileReader = new FileReader();

    newFileReader.readAsDataURL(uploadFile.files[0]);
    newFileReader.addEventListener('load', () => {
        const url = newFileReader.result;

        const img = new Image();
        img.src = url;

        localStorage.setItem('my-portrait-img', url);
        portraitImage.src = url;
        
        
    });

})
