var isDoing = false;
function action(e) {
  // 실행체크
  if (isDoing) {
    return;
  }

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
    let name = prompt("이름을 입력하고 \'확인\' 을 눌러주세요!");
    if (name != null) {
      let count = prompt("참석 인원수를 입력하고 \'확인\' 을 눌러주세요.", "1");
      if (count != null) {
        save(name, count);
      }
    }
  } 

  // 도망가기
  if (p.x >= runRect.x && p.x <= runRect.x + runRect.w 
    && p.y >= runRect.y - textHeigh && p.y <= runRect.y + runRect.h - textHeigh
  ) {
    console.log("run");
    
    isDoing = true;
    messageBox();
    
    runAway()
      .then(timeout(3000))
      .then(drawWhatToDo)
      .then(() => {
        choiceBox();
        choiceText();
        isDoing = false;
      });
  } 
}

// 클릭 좌표 계산기
function getCursorPosition(event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
}

function save(name, count) {
  isDoing = true;
  showLoading("신랑 신부에게 이 사실을 알리고있어요!!");
  var visitorRef = firebase.database().ref('/visitor');
  visitorRef.push().set({
    name: name,
    count: count,
    dateCreated: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
  }, function(error) {
    timeout(2000)
    .then(() => {
      hideLoading();

        // 참석 감사 메시지
        messageBox();
        return drawThanks();
      })
    .then(drawWhatToDo)
    .then(() => {
      choiceBox();
      choiceText();
      isDoing = false;
    });
  });
}