$(document).ready(function(){
    
    // imitial filter - shows all images
    $('.image-container div').show();

    // click event handler for filter buttons
    $('.filter-buttons button').click(function(){
        const filter = $(this).data('filter');

        // show all images when all is clicked
        if(filter === 'all'){
            $('.image-container div').show();
        } else {
            // hide all images
            $('.image-container div').hide();
            // show all images with the selected filter class
            $(`.image-${filter}`).show();
        }
    })


})

