$(document).ready(function (){
    $.ajax({
        url: 'https://reqres.in/api/users?per_page=12',
        type: 'GET',
        success: function (result) {
            $('#container').html(createList(result.data));
        }
    });
})

function createList(arr){
    let content = '';
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        content += `
        <div class="media mb-3">
          <img src="${person.avatar}" class="mr-3 img-fluid img-thumbnail rounded" alt="${person.first_name + ' ' + person.last_name}">
          <div class="media-body">
            <h5 class="mt-0">${person.first_name + ' ' + person.last_name}</h5>
            ${person.email}
          </div>
        </div>
        `;
    }

    return content;
}