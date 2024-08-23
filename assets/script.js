window.onload = function(){
    // HEADER
    //search__Movie
    const searchmovie_header = document.getElementById('search__movie');
    document.getElementById('iconsearch__header').onclick = function(){
        searchmovie_header.classList.toggle("control__show")
    }

    //slide header
    let enventchangeslide = setInterval(function(){
        let lits = document.querySelectorAll('.item__slide');
        document.getElementById('list__slide').prepend(lits[lits.length - 1]);
    },3000)

    document.getElementById('slide__next').onclick = function(){
        clearInterval(enventchangeslide)
        let lits = document.querySelectorAll('.item__slide');
        document.getElementById('list__slide').appendChild(lits[0]);
    }

    document.getElementById('slide__prev').onclick = function(){
        clearInterval(enventchangeslide)
        let lits = document.querySelectorAll('.item__slide');
        document.getElementById('list__slide').prepend(lits[lits.length - 1]);

    }

    // BODY
    //control movie_show
    const control_prevs = document.getElementById('movieshow__prev');
    const control_nexts = document.getElementById('movieshow__next');

    document.getElementById('movieshow__next').onclick = function(){
        let lits = document.querySelectorAll('.movies__s');
        document.getElementById('slide__movieshow').appendChild(lits[0]);
        control_prevs.classList.add("control__show")
    }

    document.getElementById('movieshow__prev').onclick = function(){
        let lits = document.querySelectorAll('.movies__s');
        document.getElementById('slide__movieshow').prepend(lits[lits.length - 1]);
    }

    //control Upcoming_movie
    const control_prevu = document.getElementById('upmovie__prev');
    const control_nextu = document.getElementById('upmovie__next');

    document.getElementById('upmovie__next').onclick = function(){
        let lits = document.querySelectorAll('.movies__u');
        document.getElementById('slide__upmovie').appendChild(lits[0]);
        control_prevu.classList.add("control__show")
    }

    document.getElementById('upmovie__prev').onclick = function(){
        let lits = document.querySelectorAll('.movies__u');
        document.getElementById('slide__upmovie').prepend(lits[lits.length - 1]);
    }
<<<<<<< HEAD

    //modal__chairmovie

    let moviechair = document.querySelector('.moviechair');
    let modal = document.querySelector('.modal');

    let boxtime = document.querySelectorAll('.box__time > div');
    for(var i = 0;i<boxtime.length;i++){
        boxtime[i].onclick = function(){
            moviechair.classList.add("control__show")
            modal.classList.add("control__show-flex")
        }
    }
    
    document.getElementById('close__moviechair').onclick = function(){
        moviechair.classList.remove("control__show")
        modal.classList.remove("control__show-flex")
    }

    document.querySelector('.modal__overlay').onclick = function(){
        moviechair.classList.remove("control__show")
        modal.classList.remove("control__show-flex")
    }

    let chair = document.querySelectorAll('.chair > div');
    
    for(var i =0; i<chair.length;i++){
        chair[i].onclick = function(){
            chair = this.innerHTML
            h = `<li>
                    ${chair}
                </li>`
            let first = document.querySelector("#choisechair li");
            first.insertAdjacentHTML("beforebegin",h);
            this.classList.add("youchoise")
        }
    }
};


=======
   


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
>>>>>>> 6c0483e73b5b8cc4243d4f907083a5b19318db9d
