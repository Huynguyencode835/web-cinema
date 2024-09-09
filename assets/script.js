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
        listmoviesearch.classList.remove("control__show")
    }
   
    document.querySelector('.header__nav .nav-logo').onclick=function(){
        document.querySelector('.header__nav .nav__element:nth-child(2)').classList.toggle('control__show');
    }

    var searchinput__header = document.getElementById('search__movie');
    searchinput__header.addEventListener('input',function(e){
        let txtsearch = e.target.value.trim().toLowerCase();
        let listProduct = document.querySelectorAll('.list__moviesearch .movies > .infor__movie');
        for(var i = 0;i<listProduct.length;i++){
            if(listProduct[i].innerText.toLowerCase().includes(txtsearch)){
                listProduct[i].parentElement.classList.remove("control__hiden");
                listmoviesearch.classList.add("control__show")
            }
            else{
                listProduct[i].parentElement.classList.add("control__hiden");
            }
        }
    })

    let header__nav = document.querySelector('.header__nav');

    //phim đang chieu >508
    //phim sap chieu > 1032
    function coloradd(){
       let color = document.querySelectorAll('.header__nav .nav__element:nth-child(2) a');
       document.querySelector('.header__nav .nav__element:nth-child(2) ul').classList.add("color_black-br");
       document.querySelector('.nav-logo').classList.add("color_black");
       for(var i = 0 ;i<color.length;i++){
        color[i].classList.add("color_black");
       }
    }
    function colorre(){
        let color = document.querySelectorAll('.header__nav .nav__element:nth-child(2) a');
        document.querySelector('.header__nav .nav__element:nth-child(2) ul').classList.remove("color_black-br");
       document.querySelector('.nav-logo').classList.remove("color_black");
        for(var i = 0 ;i<color.length;i++){
         color[i].classList.remove("color_black");
        }
     }
    window.addEventListener('scroll', function() {
       if(document.documentElement.scrollTop>65){
            header__nav.style.background="#0b090d";
            if(document.documentElement.scrollTop>1133){
                header__nav.style.background="#ffffff";
                coloradd();
           }else{
                colorre();
           }
       }
       else{
            header__nav.style.background="transparent";
            colorre();
       }
    });

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
            movies__modal.classList.remove("control__show-flex")
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

    let trailer__modal = document.querySelector('.trailer__modal');

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

    //modal movies
    let movies__modal= document.querySelector('.movies__modal');
    let informovies = document.querySelectorAll('.infor__movie');
    for(var i =0;i<informovies.length;i++){
        informovies[i].onclick = function(){
            trailer__modal.classList.remove("control__show");
            modal.classList.add("control__show-flex")
            movies__modal.classList.add("control__show-flex")
            movies__modal.querySelector('.img__moviessearch img').src=this.querySelector('.img__movies img').src;
            movies__modal.querySelector('.rank').innerText = this.querySelector('.rank').innerText;
            movies__modal.querySelector('.infor__moviesearch > div:nth-child(2) h3').innerText = this.querySelector('h3').innerText;
            movies__modal.querySelector('.infor__moviesearch > div:nth-child(2) p').innerText = this.querySelector('p').innerText;
            movies__modal.querySelector('.infor__moviesearch > div:nth-child(2) .score >div').innerText = this.querySelector('.score div').innerText;
            let boxtimev1 = document.querySelectorAll('.box__timev1 > div');
    
            for(var i = 0;i<boxtimev1.length;i++){
                boxtimev1[i].onclick = function(){
                    modal.classList.remove("control__show-flex")
                    movies__modal.classList.remove("control__show-flex")
                    moviechair.classList.add("control__show")
                    modal.classList.add("control__show-flex")
                    namemovie__molal.innerText = movies__modal.querySelector('.infor__moviesearch > div:nth-child(2) h3').innerText;
                    category__molal__modal.innerText =movies__modal.querySelector('.infor__moviesearch > div:nth-child(2) p').innerText;
                    timemv.innerHTML = this.innerHTML;
                }
            }
            let trailer = this.querySelector('.trailer').innerHTML;
            document.querySelector('.movies__modal .movies__modal__btn > .btn__more:nth-child(1)').onclick=function(){
                movies__modal.classList.remove("control__show-flex")
                trailer__modal.classList.add("control__show");
                trailer__modal.innerHTML = trailer;
            }
        }
    }

     /* JS Tin tức - Khuyến mãi */
     const adImages = [
        'https://cdn-www.vinid.net/2020/06/020b6aec-12-06-2020_skydeal_bannerweb_1920x1080.jpg',
        'https://voucherbox.vn/wp-content/uploads/2022/05/Voucher-CGV-khuyen-mai-giam-gia.jpg',
        'https://sapuwa.com/img_data/images/1(6).PNG',
        'https://m.lottefinance.vn/images/resources/UploadImages/EVENT_MOBILE_PROD/2023/2/10/b733c124-f3d0-4964-94b3-0a5fda4387a6.png',
    ]; 
    /* next-button */
    let currentImg = 0;
    const imageNext = document.getElementById('img-content_right');
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', () => {
        currentImg = (currentImg + 1) % adImages.length;
        imageNext.src = adImages[currentImg];
    });
    /* back-button */
    const imageBack = document.getElementById('img-content_right');
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        currentImg = (currentImg + 1) % adImages.length;
        imageBack.src = adImages[Math.abs(currentImg-3)];
    })
    let currentImage = 0;
    function changeAdImage(){
        const adImageElement = document.getElementById('img-content_left');
        adImageElement.src=adImages[currentImage];// lấy thuộc tính src trong mảng adImages áp vào phần tử ảnh hiện tại   
        currentImage = (currentImage + 1) % adImages.length;
        // sau 3s thì chỉ số currentImage trong mảng adImages cập nhập tăng lên 1 
    } 
    setInterval(changeAdImage, 3000);
    //setInterval: chạy hàm function nhiều lần sau khoảng thời gian lặp
     /* JS nút button quay lại đầu trang*/
     const backToTop = document.getElementById('button--backToTop');
     window.addEventListener('scroll', () => {
         if (window.scrollY > 100) {
             backToTop.style.display = 'block';
         } else {
             backToTop.style.display = 'none';
         }
     });
     backToTop.addEventListener('click', () => {
         window.scrollTo({
             top: 0,
             behavior: 'smooth', // Chức năng cuộn mượt hơn đến đầu trang
         });
     });

     let seeMoreButtonComment = document.getElementById('button__see_more--comment');
     let seeMoreComment = document.getElementById('see_more--comment');
     let hideComment = document.getElementById('hide--comment');
     seeMoreButtonComment.addEventListener('click',() =>{
        seeMoreComment.style.display = 'block';
        seeMoreButtonComment.style.display = 'none';
        hideComment.style.display = 'block';
     })
     hideComment.addEventListener('click',() =>{
        seeMoreComment.style.display = 'none';
        seeMoreButtonComment.style.display = 'block';
        hideComment.style.display = 'none';
     })
     
     let seeMoreButtonPromotion = document.getElementById('button__see_mone--promotion');
     let seeMorePromotion = document.getElementById('see_more--promotion');
     let hidePromotion = document.getElementById('hide--promotion');
     seeMoreButtonPromotion.addEventListener('click',() =>{
        seeMorePromotion.style.display = 'block';
        seeMoreButtonPromotion.style.display = 'none';
        hidePromotion.style.display = 'block';
     })
     hidePromotion.addEventListener('click',() =>{
        seeMorePromotion.style.display = 'none';
        seeMoreButtonPromotion.style.display = 'block';
        hidePromotion.style.display = 'none';
     })
};
