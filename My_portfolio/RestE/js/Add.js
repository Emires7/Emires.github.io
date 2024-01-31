let btn = document .querySelectorAll('.btn')
let showcart= document.querySelector('.showcart')


for(let i = 0; i< btn.length; i++){
    btn[i].addEventListener('click',()=>{
        let parent = btn [i].parentNode;
        console.log(parent)
        let prodName = parent.querySelector('h3')
        let prodPrice = parent.querySelector('p')
        let prodimage = parent.querySelector('img')
        let prodDiv = document .createElement('div');
       
        console.log(prodName)
        console.log(prodPrice)

        

        let cartProdName = document.createElement('h3')
        cartProdName.innerHTML= prodName.innerHTML;
        let cartProdNameprice = document.createElement('p')
        cartProdNameprice.innerHTML = prodPrice.innerHTML
        let cartProdImage = document.createElement('img')
        cartProdImage.src = prodimage.src;




        showcart.appendChild(prodDiv);
        prodDiv.appendChild(cartProdImage)
        prodDiv.appendChild(cartProdName)
        prodDiv.appendChild(cartProdNameprice)

    });
}