$(document).ready(() => {
   $('.menu').on('mouseover', ()=>{
     $('.nav-menu').show()
   }).on('mouseleave',()=>{
      $('.nav-menu').hide()
   });

   $('.btn').on('mouseenter', (event)=>{
     $(event.currentTarget).addClass('btn-hover')
   }).on('mouseleave', (event)=>{
     $(event.currentTarget).removeClass('btn-hover')
   })
   $('.postText').focus();
   $('.postText').on('keyup', (event)=>{
        var post = $(event.currentTarget).val();
        var remaining = 140 - post.length
        $('.characters').html(remaining);
        if(remaining<=0){
          $('.wordcount').addClass('red')
        }else{
          $('.wordcount').removeClass('red')
        }
   });

}); 

