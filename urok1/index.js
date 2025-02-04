 const conteinert = document.querySelector('.conteinert ')
function draw(arr){
    for(let item of arr){
        const box = document.createElement('div')
        const image =document.createElement('img')
        const title = document.createElement('h3')
        const firtDesc = document.createElement('p')
        const secondDesc= document.createElement('p')
        
       box.classList.add('box')

       image.src = item.image;
        title.innerHTML = item.title;
        firtDesc.innerHTML = item.firtDesc;
        secondDesc.innerHTML = item.secondDesc;

        box.append(image,title,firtDesc, firtDesc,secondDesc)
        conteinert.append(box)

    }
} 

draw(posts)

 



