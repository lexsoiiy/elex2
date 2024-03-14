

import { func1  } from "./info.js";
import { func2 } from "./image.js";


const wrapper = document.querySelector(".wrapper")

const data = {
    title: "This is Project",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    btn:"click here",
    img: "photo.jpg",

    title2:"PROJECT COMPLETE",
    img1:"photo.jpg",
    img2:"photo.jpg",
    img3:"photo.jpg",
    btn1:"Learn more",
    para1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",


}


const { title, para,  btn, img ,title2,img1,img2,img3, btn1, para1,para2,para3} = data

wrapper.append(func1(title,para,btn,btn1))
wrapper.append(func2(img))
