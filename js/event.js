function action(e) {
  // 텍스트 기본 높이
  let textHeigh = 15;
  let p = getCursorPosition(e);
  console.log(p);

  // 내용 읽기
  if (p.x >= readRect.x && p.x <= readRect.x + readRect.w 
    && p.y >= readRect.y - textHeigh && p.y <= readRect.y + readRect.h - textHeigh
  ) {
    console.log("read");
    showRead();
  } 

  // 약도 보기
  if (p.x >= mapRect.x && p.x <= mapRect.x + mapRect.w 
    && p.y >= mapRect.y - textHeigh && p.y <= mapRect.y + mapRect.h - textHeigh
  ) {
    console.log("map");
    showMap();
  } 

  // 참석하기
  if (p.x >= attendRect.x && p.x <= attendRect.x + attendRect.w 
    && p.y >= attendRect.y - textHeigh && p.y <= attendRect.y + attendRect.h - textHeigh
  ) {
    console.log("attend");
  } 

  // 도망가기
  if (p.x >= runRect.x && p.x <= runRect.x + runRect.w 
    && p.y >= runRect.y - textHeigh && p.y <= runRect.y + runRect.h - textHeigh
  ) {
    console.log("run");
  } 
}

// 클릭 좌표 계산기
function getCursorPosition(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    return {
      x: x,
      y: y
    };
}