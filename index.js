let position = 0;


function prevPic(){
    const slide = document.getElementById('JSslider');
    if (position < 0){
        position += 400;
        console.log('Position is '+ position + 'px!');
    }
    slide.style.transform = `translateX(${position}px)`;
    setTimeout(prevPic,1500);
}

function nextPic(){
    const slide = document.getElementById('JSslider');
    if (position > -2000){
        position -= 400;
        console.log('Position is '+ position + 'px!');
    }
    slide.style.transform = `translateX(${position}px)`;
    setTimeout(nextPic,1500);
}


    













    

    

    

