// 전투 진입
function drawEntryBattle() {
  return new Promise((resolve) => {
    var invationPosX = 0;
    var invationStatusPosX = -200;
    var friendGroundPosX = -200;
    var friendPosX = -200;
    var friendStatusPosX = window.innerWidth + 100;
  
    var interval = setInterval(() => {
      let time = new Date();
      let mil = time.getMilliseconds();
  
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // 캔버스를 비운다

      // ctx.save();
      // ctx.restore();  

      
      let d1 = background();
      let d2 = messageBox();
      let d3 = invation(invationPosX+=2, 90);
      let d4 = invationStatus(invationStatusPosX+=2, 50);
      let d5 = friendGround(friendGroundPosX+=2, 250);
      let d6 = friend(friendPosX+=2, 178);
      let d7 = friendStatus(friendStatusPosX-=2, 186);

      if (d1 && d2 && d3 && d4 && d5 && d6 && d7) {
        clearInterval(interval);
        resolve();
      }
    }, 1000/700);
  });
}

// 메시지 출력
function drawWhatToDo() {
  return new Promise((resolve) => {
    let messageSeq = [
      "하",
      "하객",
      "하객는",
      "하객는(은) ",
      "하객는(은) 무",
      "하객는(은) 무엇",
      "하객는(은) 무엇을 ",
      "하객는(은) 무엇을 할",
      "하객는(은) 무엇을 할까?"
    ];
  
    let seqIndex = 0;
    let textRect = {
      x: 30,
      y: 285,
      w: window.innerWidth - images.mb_1.img.width - images.mb_3.img.width - 100,
      h: 30
    };
  
    let textInterval = setInterval(() => {
      ctx.clearRect(textRect.x, textRect.y, textRect.w, textRect.h); // 문장 영역 삭제
      ctx.fillStyle = '#285068';
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.fillRect(
        textRect.x,
        textRect.y,
        textRect.w,
        textRect.h
      );
  
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowColor = "#685870";
      ctx.font = "16px 맑은고딕";
      ctx.fillStyle = 'white';
      ctx.fillText(messageSeq[seqIndex++], 30, 300);
  
      if (seqIndex === messageSeq.length) {
        clearInterval(textInterval);
        setTimeout(() => {
          resolve();
        }, 100);  // 종료 
      }
    }, 120);  // 메시지 출력 속도
  });
}
