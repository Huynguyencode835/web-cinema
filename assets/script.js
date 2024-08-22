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
   
};