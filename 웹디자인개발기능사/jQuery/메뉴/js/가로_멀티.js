$(function(){
    const mainMenu = $('.main-menu > .menu-item')

    // 방법 1 : mouseover/mouseout 사용 
    // mainMenu.on('mouseover', function(){
    //     $('.submenu').stop().slideDown()
    // })

    // mainMenu.on('mouseout', function(){
    //     $('.submenu').stop().slideUp()
    // })

    // 방법 2 : hover 사용 
    // hover( mouseEnterFunction, mouseLeaveFunction )
    // 마우스를 올렸을 때와 뗐을 때의 동작을 각각 지정할 수 있는 jQuery 메서드
    // 마우스가 요소 위로 올라가면 첫 번째 함수 실행
    // 마우스가 요소 밖으로 벗어나면 두 번째 함수 실행
    
    mainMenu.hover(
        function() {
            $('.submenu').stop().slideDown()
        }, 
        function() {
            $('.submenu').stop().slideUp()
        }
    )
})