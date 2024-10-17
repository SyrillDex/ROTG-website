let sliderImage = document.querySelector('.image-content');
    let images = ['pic-2.webp','pic-1.jpg','pic-3.jpg','pic-4.jpg'];
    let i = 0;

    function prev(){
      if(i <= 0) i = images.length;
      i--;
      setImg();
    }
    function next(){
      if(i >= images.length-1) i = -1;
      i++;
      return setImg();
    }
    function setImg(){
      return sliderImage.setAttribute('src', 'images/' + images[i]);
    }