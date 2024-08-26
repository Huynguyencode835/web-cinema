window.onload = function(){
    // fun control slide
    function control__next(movie,slide){
        let lits = document.querySelectorAll(movie);
        document.getElementById(slide).appendChild(lits[0]);
    }

    function control__prev(movie,slide){
        let lits = document.querySelectorAll(movie);
        document.getElementById(slide).prepend(lits[lits.length - 1]);
    }

    // HEADER
    //search__Movie
    const searchmovie_header = document.getElementById('search__movie');
    const listmoviesearch  = document.querySelector('.imput__searchmovie');
    document.getElementById('iconsearch__header').onclick = function(){
        searchmovie_header.classList.toggle("control__show")
        searchmovie_header.onclick=function(){
            listmoviesearch.classList.toggle("control__show")
        }
    }



    //slide header
    let enventchangeslide = setInterval(function(){
        control__prev('.item__slide','list__slide');
    },3000)

    document.getElementById('slide__next').onclick = function(){
        clearInterval(enventchangeslide)
        control__next('.item__slide','list__slide');
    }

    document.getElementById('slide__prev').onclick = function(){
        clearInterval(enventchangeslide)
        control__prev('.item__slide','list__slide');
    }

    // BODY
    //control movie_show

    const control_prevs = document.getElementById('movieshow__prev');

    document.getElementById('movieshow__next').onclick = function(){
        control__next('.movies__s','slide__movieshow');
        control_prevs.classList.add("control__show-flex")
    }

    document.getElementById('movieshow__prev').onclick = function(){
        control__prev('.movies__s','slide__movieshow');
    }

    //control Upcoming_movie
    const control_prevu = document.getElementById('upmovie__prev');
 
    document.getElementById('upmovie__next').onclick = function(){
        control__next('.movies__u','slide__upmovie');
        control_prevu.classList.add("control__show-flex")
    }

    document.getElementById('upmovie__prev').onclick = function(){
        control__prev('.movies__u','slide__upmovie');
    }

    //modal__chairmovie

    let moviechair = document.querySelector('.moviechair');
    let modal = document.querySelector('.modal');

    //show modal
    let boxtime = document.querySelectorAll('.box__time > div');
    let namemovie__molal = document.getElementById('namemovie__molal');
    let category__molal__modal = document.getElementById('category__molal__modal');
    let timemv = document.getElementById('time__modal');
    for(var i = 0;i<boxtime.length;i++){
        boxtime[i].onclick = function(){
            moviechair.classList.add("control__show")
            modal.classList.add("control__show-flex")
            namemovie__molal.innerText = this.parentElement.parentElement.previousElementSibling.querySelector('.name__mv').innerText;
            category__molal__modal.innerText = this.parentElement.parentElement.previousElementSibling.querySelector('.category__mv').innerText;
            timemv.innerHTML = this.innerHTML;
        }
    }
    
    let chair = document.querySelectorAll('.chair > div');
    let price = document.getElementById('price');
    

    var price__mv = 0;
    function deletechair(){
        document.querySelector("#choisechair").innerHTML = 
        `<ul id="choisechair" class="flex">
            <li></li>
        </ul>`
        price.innerHTML='<div id="price">0 đ</div>'
        price__mv = 0;
        for(var j = 0;j< chair.length;j++){
            chair[j].classList.remove("youchoise");
        }
    }
    for(var i =0; i<chair.length;i++){
        chair[i].onclick = function(){
            
            let contentchair = this.innerHTML
            h = `<li>
                    ${contentchair}
                </li>`
            let first = document.querySelector("#choisechair li");
            first.insertAdjacentHTML("beforebegin",h);
            this.classList.add("youchoise");
            let typechair = this.parentElement.parentElement.getAttribute("rel");
            if(typechair === "vip"){
                    price__mv+=120000;
            }
            else{
                    price__mv+=90000;        
            }
            price.innerText=price__mv+" đ";
        }
    }
    document.getElementById('delete_ticket').onclick = function(){
        deletechair();
    }


    // hiden modal
    document.getElementById('close__moviechair').onclick = function(){
        moviechair.classList.remove("control__show")
        modal.classList.remove("control__show-flex")
        deletechair();
    }

    document.querySelector('.modal__overlay').onclick = function(){
        moviechair.classList.remove("control__show")
        modal.classList.remove("control__show-flex")
        deletechair();
    }



    /* Hàm cắt độ dài của chuỗi (section: Bình luận nỗi bật)*/
    function truncateText(element, maxLength) {
        const text = element.textContent; // lấy nôị dung phần tử element gán cho text
        if (text.length > maxLength) {
            element.textContent = text.slice(0, maxLength) + '...';// đệ quy + nối chuỗi 
        }
    }
    
    const myText1 = document.getElementById('my-text-1');
    truncateText(myText1, 230); 

    const myText2 = document.getElementById('my-text-2');
    truncateText(myText2, 230); 

    const myText3 = document.getElementById('my-text-3');
    truncateText(myText3, 230); 

    const myText4 = document.getElementById('my-text-4');
    truncateText(myText4, 230);
};
