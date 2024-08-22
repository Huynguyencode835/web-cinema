window.onload = function(){
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