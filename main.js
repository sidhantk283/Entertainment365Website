var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " w3-white";
    }

function searchMovie() {
  let filter = document.getElementById("searchmovie").value.toUpperCase();
  let movie = document.getElementsByClassName("movie-grid");

  if (movie.length!=0) {
    for (var i = 0; i < movie.length; i++) {
      let movie_div = movie[i].getElementsByTagName("p")[0].innerHTML;
      if (movie_div.toUpperCase().indexOf(filter) > -1) {
        console.log(filter, movie_div);
        movie[i].style.display = "";
      }else movie[i].style.display = "none";
    }
  }else alert("empty");
}

function displayDrama() {
  let movie = document.getElementsByClassName("movie-grid");
}