// 문서 준비 이벤트 
$(function() {

    // 스타일 변경하기 
    // $(선택자).css('스타일 속성', '속성값')
    $('#item1').css('color', 'hotpink')
    $('#item2').css('transform', 'rotate(45deg)')
    $('#item3').css('opacity', '0.5')


/* 여러 개의 스타일 속성 지정 하기 */
/* -> 객체 형태로 지정해준다. */

/*
    {
        '스타일1' : '속성값1', 
        '스타일2' : '속성값2', 
        '스타일3' : '속성값3'
    }

*/ 

// 따옴표를 붙이면 , 케밥 케이스 ('-')
$('#item4 .inner').css({
    'color'             :'coral', 
    'font-size'         :'72px', 
    'border'            :'10px solid hotpink', 
    'width'             :'800px', 
    'height'            :'auto', 
    'background-color'  :'black'
})


// 따옴표를 안붙이면 , 카멜 케이스 ('-')
$('#item5 .inner').css({
    color             :'coral', 
    fontSize          :'72px', 
    border            :'10px solid hotpink', 
    width             :'800px', 
    height            :'auto', 
    backgroundColor   :'black'
})

})