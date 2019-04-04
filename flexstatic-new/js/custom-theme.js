(function ($) {

      //delete_resume_modal
    $('body').on('click', '.delete_resume', function(event) {
      
          $('#delete_resume_modal').modal('show');

      }); 
      
    $('body').on('click', '#delete_resume', function(event) {
     var resume_id=$(this).attr('delete_resume');

      if(resume_id!=''){
           $.ajax({
                              url:base_url+ "/biography/delete_resume",
                               dataType: 'script',
                               data:{resume_id:resume_id},
                               type: 'post',
                               success: function(data) {
                                   $('.resume_err,.resume_nm,.resume_del').text('');
                                   $('.resume_err,.resume_nm,.resume_del').html('');
                                   $('#delete_resume_modal').modal('hide');
                               }
                             });
      }

   }); 
   
   //general_libraries/
   $('body').on('click', '.delete_profile_image', function(event) {
      
          $('#delete_profile_image_modal').modal('show');

    }); 
      
    $('body').on('click', '#del_confirm_image', function(event) {
     var image_id=$('body').find('.image_id').val();
        $('body').find('.image_id').val('');
        $('.delete_profile_image').closest("div.file_list").prev().remove();
        $('.delete_profile_image').closest("div.file_list").remove();
        $('.profile_image').val('');
        $('div#profile_image_content').html('').html('<i class="fa fa-user pic_upload"></i>');
  $('#delete_profile_image_modal').modal('hide');
      if(image_id!=''){
                $.ajax({
                        url:base_url+ "/general_libraries/delete_profile_image",
                         dataType: 'script',
                         data:{image_id:image_id},
                         type: 'post',
                         success: function(data) {

                           
                         }
                });
      }

    }); 
    

    // Delete cover image
   $('body').on('click', '.delete_cover_image', function(event) {
      
          $('#delete_cover_image_modal').modal('show');

    }); 
      
    $('body').on('click', '#del_cover_image', function(event) {
     var image_id=$('body').find('.cover_image_id').val();
        $('body').find('.cover_image_id').val('');
        $('.delete_cover_image').closest("div.file_list").prev().remove();
        $('.delete_cover_image').closest("div.file_list").remove();
        $('.cover_image').val('');
        $('div#cover_image_content').html('').html('<i class="fa fa-user pic_upload"></i>');
  $('#delete_cover_image_modal').modal('hide');
      if(image_id!=''){
                $.ajax({
                        url:base_url+ "/general_libraries/delete_cover_image",
                         dataType: 'script',
                         data:{cover_image_id:image_id},
                         type: 'post',
                         success: function(data) {

                           
                         }
                });
      }

    });


    

    $('body').on('click', '.delete_video_image', function(event) {
      
          $('#delete_video_image_modal').modal('show');

    }); 
      
    $('body').on('click', '#del_confirm_video', function(event) {
     var video_id=$('body').find('.video_id').val();
     $('body').find('.video_id').val('');
     
        $('.delete_video_image').closest("div.file_list").remove();
        $('.video_name').val('');
        $('div#video_name_content').html('').html('<div class="pro-video"><button class="vid-upload vid_upload" ><i class="fa fa-video"></i> Upload Profile Video</button>');
$('#delete_video_image_modal').modal('hide');
      if(video_id!=''){
                $.ajax({
                        url:base_url+ "/general_libraries/delete_profile_video",
                         dataType: 'script',
                         data:{video_id:video_id},
                         type: 'post',
                         success: function(data) {

                             
                         }
                });
      }

    }); 
   
   
	

		







$(document).ready(function () {


  /* Login page start */

 $.ajax({
        type: 'POST',
        url: base_url + '/general_libraries/set_reg_role',
        data: {social_reg: '', reg_role_type: ''},

        success: function (data) {
 var social_reg=$(this).attr('id');
    var reg_role_type=$('#edit-select-roles').val();
     $.ajax({
        type: 'POST',
        url: base_url + '/general_libraries/set_reg_role',
        data: {social_reg: social_reg, reg_role_type: reg_role_type},
        async:false,
        success: function (data) {

        }
    });
        }
    });
   //user-login-form
   $('.signup-form').find('.google,.linkedin,.facebook').click(function(){
   //$(document).on('click','.google,.linkedin,.facebook',function (e) {
    $('body').find('#edit-select-roles').trigger('change');
    //e.preventDefault();
    // return false;
});
   $(document).on('change','#edit-select-roles',function () {
    

            var social_reg=$(this).attr('id');
                var reg_role_type=$(this).val();
               if($(this).attr('roles') !='' && $(this).attr('roles') !=null){
               
                   reg_role_type=$(this).attr('roles');
                }
                 else if(reg_role_type !=''){
                  
                  reg_role_type=reg_role_type;
                }
               $.ajax({
                            type: 'POST',
                            url: base_url+'/general_libraries/set_reg_role',
                            data: {social_reg:social_reg,reg_role_type:reg_role_type},
                            async:false,
                            success: function (data) {


                            }
                });

                var ajaxTime= new Date().getTime();


       });
 $('body').find('#edit-select-roles').trigger('change');
  
      $(document).on('click','.roles',function () {

            var social_reg=$(this).attr('id');
                var reg_role_type=$(this).val();
               if($(this).attr('roles') !='' && $(this).attr('roles') !=null){
               
                   reg_role_type=$(this).attr('roles');
                }
                 else if(reg_role_type !=''){
                  
                  reg_role_type=reg_role_type;
                }
                $.ajax({
                            type: 'POST',
                            url: base_url+'/general_libraries/set_reg_role',
                            data: {social_reg:social_reg,reg_role_type:reg_role_type},
                            async:false,
                            success: function (data) {


                            }
                });
       });



/* Login page end */
    /* Form Autocomplete Off*/
        $('input[type="text"]','input[type="password"]').attr('autocomplete', 'off');
$.trim($('input[type="text"]','input[type="password"]').val());
        $(window).on('shown.bs.modal', function () {
            $('input[type="text"]').attr('autocomplete', 'off');
        });
        
        /*All Dashboard*/
  
        
});

 $(".profile_visibility").on('click',function(){
    
     var column_name=$(this).attr('id');
           var column_value=$(this).attr('value');
           //alert(column_value);

     //       if(column_value==1)
     //       {
     //        column_value=0;
     //       }
     //       else
     //       {
     //        column_value=1;
     //       }
          $.ajax({
     url: "update", 
     method :'POST',
     data: {'column_name':column_name,'column_value':column_value}, 
     success: function(result){
      $( ".dyn_dd" ).html('');
       $( ".dyn_dd" ).html(result);
        
     }
    
     });
    
});

})(jQuery);



