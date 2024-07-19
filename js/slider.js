    let n=1, max=6;

    let links = ["https://www.google.com/", "https://yandex.by/", "https://mail.ru/", "https://www.youtube.com/", "https://www.facebook.com/", "https://www.instagram.com/"];

    let links1 = [];
for (index=0; index<links.length; index++)
links1[index] =  links[index].substring(links[index].indexOf("//")+2, links[index].length-1);
    // console.log(links);
    // console.log(links1);


    function timer() {
if (++n>max) n = 1; 
changeSlide()
timerId = setTimeout(timer, 2000);

    }

    function stop() {
clearTimeout(timerId);

    }

    function next() {
if (n>=max) n = 1;
else n++;
changeSlide();
    }

    function prev() {
if (n>1) n--;
else n=max;
changeSlide();
            }

    function changeSlide() {
link1.href = links[n-1];
img1.src = `images/img${n}b.jpg`;
title1.innerHTML = `Заголовок слайда ${n}`
title2.innerHTML = `<a href="link${n}.html">Подзаголовок слайда ${n}</a>`
    }
title3.innerHTML = `<a href="${links[n-1]}">${links1[n-1]}</a>`;
