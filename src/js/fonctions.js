function carrousel() {
    let images = document.querySelectorAll('.image155');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        targets: '.imgalt',
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        delay: function(img, ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta +2*d
            if (ind == 3) return 4*delta + 3*d;
            if (ind == 4) return 5*delta + 4*d;
            if (ind == 5) return 6*delta +5*d
            if (ind == 6) return 7*delta + 6*d;
            if (ind == 7) return 8*delta + 7*d;
            return 8*delta + 7*d;
        }
    });
    anim15.add({
        translateX: [{value: 500, duration: d, easing: 'easeInOutSine'}, 
                     {value: 500, duration: 0, delay: delta}]
    });
}