function showDiv(divId) {
    // Tüm divleri gizle
    var divs = document.querySelectorAll('.my-div');
    divs.forEach(function(div) {
      div.style.display = 'none';
    });
    // Seçilen divi göster
    document.getElementById(divId).style.display = 'block';
  }