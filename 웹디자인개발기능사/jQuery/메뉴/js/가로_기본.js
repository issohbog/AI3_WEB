$(function(){
    const mainMenu = $('.main-menu > .menu-item')

    // 방법 1 mouseover/mouseout 사용 
    // mainMenu.on('mouseover', function(){
    //     $(this).find('.submenu').stop().slideDown()
    // })
    // mainMenu.on('mouseout', function(){
    //     $(this).find('.submenu').stop().slideUp()
    // })

    
    // 방법 2 hover 사용 
    mainMenu.hover(
        function(){
            $(this).find('.submenu').stop().slideDown()
        },
    
        function(){
            $(this).find('.submenu').stop().slideUp()
        }
    )
})