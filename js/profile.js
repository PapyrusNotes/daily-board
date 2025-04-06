const uploadFile = document.querySelector("#portrait-img-input");
const portraitImage = document.querySelector('#profile img');
const profileName = document.querySelector('#profile .profile-name');
 
const savedName = localStorage.getItem(USERNAME_KEY);
const DEFAULT_PORTRAIT_URL = './imgs/default_portrait.jpg';

if (savedName === null){
    profileName.innerText = '<- Type your name';
}
else{
    profileName.innerText = savedName;
}


let portraitURL = localStorage.getItem('my-portrait-img');

if (portraitURL === null){
    portraitURL = DEFAULT_PORTRAIT_URL;
}
portraitImage.src = portraitURL;

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



