let search = document.getElementById('button_box')
.addEventListener('click', onSearch);

function onSearch() {
  let content = document.getElementById(content);
  let input_box = document.getElementById('inout_box').value;

}

// Gets API data
fetch(
  http:'http://crossorigin.me/http://www.recipepuppy.com/api/?q=${search-term}'
)


.then(function(response) {
  if (response.status !==200){
    console.log(resoonse.status);
    return;
  }

  content.innerHTML = ''
  response.json().then(function(data){
    data.results.forEach(function(results) {

      if (results.thumbnail==='') {
        results.thumbnail = "http://via.placeholder.com/150x150";
      }

      let template = `<article class="recipe">
      <a href="${results.href}">
      <img src="${results.thumbnail}">
      <span>${results.title}</span>
      <a></article>`;

      content.innerHTML += template;
    });

  });
})
