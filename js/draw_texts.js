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
      x: images.mb_1.img.width,
      y: 290,
      w: window.innerWidth - images.mb_1.img.width - images.mb_3.img.width,
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
      ctx.fillText(messageSeq[seqIndex++], 30, 305);
  
      if (seqIndex === messageSeq.length) {
        clearInterval(textInterval);
        timeout(100).then(resolve);
      }
    }, 120);  // 메시지 출력 속도
  });
}

// 참석 축하 메시지
function drawThanks() {
  return new Promise((resolve) => {
    let messageSeq = [
      "참",
      "참석",
      "참석해",
      "참석해주",
      "참석해주셔",
      "참석해주셔서 ",
      "참석해주셔서 감",
      "참석해주셔서 감사",
      "참석해주셔서 감사합다.",
      "참석해주셔서 감사합니다."
    ];
  
    let seqIndex = 0;
    let textRect = {
      x: images.mb_1.img.width,
      y: 290,
      w: window.innerWidth - images.mb_1.img.width - images.mb_3.img.width,
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
      ctx.fillText(messageSeq[seqIndex++], 30, 305);
  
      if (seqIndex === messageSeq.length) {
        clearInterval(textInterval);
        timeout(2000).then(resolve);
      }
    }, 120);  // 메시지 출력 속도
  });
}

// 도망치기
function runAway() {
  return new Promise((resolve) => {
    let messageSeq = [
      "청",
      "청첩",
      "청첩장",
      "청첩장에",
      "청첩장에게",
      "청첩장에게서 ",
      "청첩장에게서 도",
      "청첩장에게서 도망",
      "청첩장에게서 도망칠",
      "청첩장에게서 도망칠 수",
      "청첩장에게서 도망칠 수 없",
      "청첩장에게서 도망칠 수 없습",
      "청첩장에게서 도망칠 수 없습니",
      "청첩장에게서 도망칠 수 없습니다."
    ];
  
    let seqIndex = 0;
    let textRect = {
      x: images.mb_1.img.width,
      y: 290,
      w: window.innerWidth - images.mb_1.img.width - images.mb_3.img.width,
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
      ctx.fillText(messageSeq[seqIndex++], 30, 305);
  
      if (seqIndex === messageSeq.length) {
        clearInterval(textInterval);
        timeout(2000).then(resolve);
      }
    }, 120);  // 메시지 출력 속도
  });
}