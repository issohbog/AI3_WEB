$(function() {
    const mainMenu = $('.main-menu > .menu-item, #back')

    // 방법 1 
    mainMenu.on('mouseover', function(){
        $('.submenu, #back').stop().slideDown()
    })
    mainMenu.on('mouseout', function(){
        $('.submenu, #back').stop().slideUp()
    })

    // 방법 2
    // mainMenu.hover(
    //     function(){
    //         $('.submenu, #back').stop().slideDown()
    //     }, 
    //     function(){
    //         $('.submenu, #back').stop().slideUp()
    //     }
    // )
})