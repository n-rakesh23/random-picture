const  btnEl =document.querySelector(".btn");
const bodyEl=document.querySelector("body");

btnEl.addEventListener("click",(e)=>{
        let i =Math.floor(Math.random()*100)+1;

            const divEl=document.createElement("div");
            divEl.classList.add("image-container");
            const img1= document.createElement("img");
            const img2= document.createElement("img");
            const img3= document.createElement("img");
            const img4= document.createElement("img");
            const img5= document.createElement("img");
            const img6= document.createElement("img");

            img1.setAttribute("src",`https://picsum.photos/300?random=${i+10}`);
            img2.setAttribute("src",`https://picsum.photos/300?random=${i+11}`);
            img3.setAttribute("src",`https://picsum.photos/300?random=${i+12}`);
            img4.setAttribute("src",`https://picsum.photos/300?random=${i+13}`);
            img5.setAttribute("src",`https://picsum.photos/300?random=${i+14}`);
            img6.setAttribute("src",`https://picsum.photos/300?random=${i+15}`);

            divEl.appendChild(img1);
            divEl.appendChild(img2);
            divEl.appendChild(img3);
            divEl.appendChild(img4);
            divEl.appendChild(img5);
            divEl.appendChild(img6);

            bodyEl.appendChild(divEl);
            bodyEl.appendChild(btnEl);


});

