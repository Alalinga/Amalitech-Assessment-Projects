var main = function() {
  $('.more-btn').on('click', (event)=>{
       $(event.currentTarget).siblings().show()
  });

  $('.share').on('click', (event)=>{
    $(event.currentTarget).next().show()
  });

  $('.notification').on('click', (event)=>{
     $(event.currentTarget).toggleClass('active')
  }) 
};

$(document).ready(main);
