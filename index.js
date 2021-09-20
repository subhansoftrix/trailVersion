let adsbtn = document.getElementById('ads-btn');
let inputimg = document.getElementById('inputimg')
let p_image = document.getElementById('p_image')
let icon = document.getElementById('previewImage_icon')
let previewImagetitle = document.getElementById('previewImage_title')
let previewImage_desc = document.getElementById('previewImage_desc')

let previewImage_icon = document.getElementById('previewImage_icon')
let uploadButton = document.getElementById('uploadButton')
inputimg.addEventListener('change', (e)=>{
    if(e.target.files){
        console.log(e.target.files)
        let urlimg = URL.createObjectURL(e.target.files[0])
        p_image.setAttribute("src", urlimg)
         p_image.style.display = 'block'
         icon.style.display='none'
         previewImagetitle.style.display='none'
         previewImage_desc.style.display='none'
         uploadButton.style.display='none'
        // previewImage_icon.setAttribute('display', none)

    }
})
