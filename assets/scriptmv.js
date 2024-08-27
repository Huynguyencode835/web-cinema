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

    let type__list = document.querySelector('.nav__listmovies__type');
    let nation__list = document.querySelector('.nav__listmovies__nation');
    let year__list = document.querySelector('.nav__listmovies__year');

    document.getElementById('type__navlist').onclick=function(){
        type__list.classList.toggle("control__show-flex")
        nation__list.classList.remove("control__show-flex")
        year__list.classList.remove("control__show-flex")
    }
    
    document.getElementById('nation__navlist').onclick=function(){
        nation__list.classList.toggle("control__show-flex")
        year__list.classList.remove("control__show-flex")
        type__list.classList.remove("control__show-flex")
    }
    
    document.getElementById('year__navlist').onclick=function(){
        year__list.classList.toggle("control__show-flex")
        type__list.classList.remove("control__show-flex")
        nation__list.classList.remove("control__show-flex")
    }

    var searchinput = document.getElementById('listmovies__search');
    searchinput.addEventListener('input',function(e){
        let txtsearch = e.target.value.trim().toLowerCase();
        let listProduct = document.querySelectorAll('.listproduct .movies > .infor__movie');
        for(var i = 0;i<listProduct.length;i++){
            if(listProduct[i].innerText.toLowerCase().includes(txtsearch)){
                listProduct[i].parentElement.classList.remove("control__hiden");
            }else{
                listProduct[i].parentElement.classList.add("control__hiden");
            }
        }
    })
};
