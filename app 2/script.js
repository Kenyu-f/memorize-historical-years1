const quizSections = {
  //古代
  ancient1: [
    { question: "ローマ帝国がキリスト教を公認したのは何年?", year: 313 },
    { question: "ローマ帝国が東西に分裂したのは何年?", year: 395 },
    { question: "西ローマ帝国が滅びたのは何年?", year: 476 },
    { question: "隋が中国を統一したのは何年?", year: 589 },
    { question: "ムハンマドがイスラム教を開いたのは何年?", year: 610 },
    { question: "唐が建国されたのは何年?", year: 618 },
    { question: "新羅が朝鮮半島を統一したのは何年?", year: 676 },
  ],
  ancient2:[
    { question: "唐が滅びたのは何年?", year: 907 },
    { question: "高麗が朝鮮半島を統一したのは何年?", year: 936 },
    { question: "宋が起こったのは何年?", year: 960 },
    { question: "十字軍の派遣が始まったのは何年?", year: 1096 },
    { question: "チンギス・ハンがモンゴルを統一したのは何年?", year: 1206 },
    { question: "マグナ・カルタが制定されたのは何年?", year: 1215 },
    { question: "マルコ・ポーロが元に着いたのは何年?", year: 1275 },
  ],
  //中世
  medieval1: [
    { question: "十字軍の派遣が始まったのは何年?", year: 1096 },
    { question: "チンギス・ハンがモンゴルを統一したのは何年?", year: 1206 },
    { question: "マグナ・カルタが制定されたのは何年?", year: 1215 },
    { question: "マルコ・ポーロが元に着いたのは何年?", year: 1275 }, 
    { question: "宋が滅びたのは何年?", year: 1279 },
    { question: "元が滅び、明がおこったのは何年?", year: 1368 },
    { question: "高麗が滅び、朝鮮国が起こったのは何年?", year: 1392},
  ],
  medieval2: [
    { question: "ビザンツ帝国が滅びたのは何年?", year: 1453 },
    { question: "コロンブスがアメリカに到着したのは何年?", year: 1492},
    { question: "バスコ・ダ・ガマがインドに到着したのは何年?", year: 1498},
    { question: "ルターが宗教改革を始めたのは何年?", year: 1517 },
    { question: "マゼランが世界周航に出発したのは何年?", year: 1519 },
    { question: "カルバンが宗教改革を始めたのは何年?", year: 1541 },
    { question: "オランダが東インド会社を設立したのは何年?", year: 1602 },
    { question: "イギリスでピューリタン革命が起こったのは何年?", year: 1640 }
  ],
  //近世
  earlyModern: [
    { question: "オランダが東インド会社を設立したのは何年?", year: 1602 },
    { question: "イギリスでピューリタン革命が起こったのは何年?", year: 1640 },
    { question: "フランスのルイ14世の絶対王政が始まったのは何年?", year: 1661 },
    { question: "イギリスで名誉革命が起こったのは何年?", year: 1688 },
    { question: "アメリカ独立戦争が起こったのは何年?", year: 1775 },
    { question: "アメリカ独立宣言が宣言されたのは何年?", year: 1776 },
    { question: "フランス革命、人権宣言が起こったのは何年?", year: 1789 },
  ],
  //近代
  modern: [
    { question: "アヘン戦争が起こったのは何年?", year: 1840 },
    { question: "太平天国の乱が起こったのは何年?", year: 1851 },
    { question: "インド大反乱が起こったのは何年?", year: 1857 },
    { question: "インドがイギリス領になったのは何年?", year: 1858 },
    { question: "アメリカ南北戦争が起こったのは何年?", year: 1861 },
    { question: "三国同盟*ドイツ・オーストリア・イタリア*が結ばれたのは何年?", year: 1882 },
    { question: "義和団事件が起こったのは何年?", year: 1900 },
    { question: "三国協商が結ばれたのは何年?", year: 1907 },
  ],
  //現代
  contemporary1: [
    { question: "辛亥革命が起こったのは何年?", year: 1911 },
    { question: "中華民国が成立し、清が滅びたのは何年?", year: 1912 },
    { question: "第一次世界大戦が起こったのは何年?", year: 1914 },
    { question: "ロシア革命が起こったのは何年?", year: 1917 },
    { question: "三・一独立運動、五・四運動が起こったのは何年?", year: 1919 },
    { question: "ベルサイユ条約、ワイマール憲法が制定されたのは何年?", year: 1919 },
    { question: "国際連盟が発足されたのは何年?", year: 1920 },
    { question: "ワシントン会議が行われたのは何年?", year: 1922 },
    
  ],
  contemporary2:[
    { question: "ソ連が成立したのは何年?", year: 1922 },
    { question: "世界恐慌が起こったのは何年?", year: 1929 },
    { question: "ドイツでナチス政権が成立したのは何年?", year: 1933 },
    { question: "ニューディール政策が行われたのは何年?", year: 1933 },
    { question: "中国国民党と共産党とが手を結んだのは何年?", year: 1937 },
    { question: "独ソ不可侵条約が結ばれたのは何年?", year: 1939 },
    { question: "第二次世界大戦が始まったのは何年?", year: 1939 },
    { question: "ヤルタ会談でドイツが降伏したのは何年?", year: 1945 },
    
  
  ],
  contemporary3:[
    { question: "国際連合が発足されたのは何年?", year: 1945 },
    { question: "インドが独立したのは何年?", year: 1947 },
    { question: "北大西洋条約機構（NATO）が成立したのは何年?", year: 1949 },
    { question: "中華人民共和国が成立したのは何年?", year: 1949  },
    { question: "朝鮮戦争が起こったのは何年?", year: 1950 },
    { question: "キューバ危機が起こったのは何年?", year: 1962  },
    { question: "ベトナム戦争が激化したのは何年?", year: 1965 },
    { question: "ECが発足したのは何年?", year: 1967  },
    
    
  ],
  contemporary4:[
    { question: "ASEANが発足したのは何年?", year: 1967 },
    { question: "第四次中東戦争が起こったのは何年?", year: 1973 },
    { question: "ベルリンの壁が崩壊したのは何年?", year: 1989  },
    { question: "APECが発足されたのは何年?", year: 1989  },
    { question: "ソ連が解体したのは何年?", year: 1991  },
    { question: "EUが発足したのは何年?", year: 1993  },
    { question: "地球温暖化防止京都会議が行われたのは何年?", year: 1997  },
    { question: "アメリカ同時多発テロが起こったのは何年?", year: 2001  },
    { question: "世界金融危機が起こったのは何年?", year: 2008  },
    
  ],
};

let quizData = 0;
let currentQuestion = 0;
let score = 0;

function generateQuizData(events) {
  return events.map((event) => {
    const correctAnswer = `${event.year}年`;
    const options = generateOptions(event.year);
    return { question: event.question, correctAnswer, options };
  });
}

function generateOptions(year) {
  const options = new Set([year]);
  while (options.size < 4) {
    const offset = Math.floor(Math.random() * 100) - 50;
    options.add(year + offset);
  }
  return shuffleArray([...options].map((y) => `${y}年`));
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz(section) {
  if (!quizSections[section]) return;
  quizData = shuffleArray(generateQuizData(quizSections[section]));
  currentQuestion = 0;
  score = 0;
  document.getElementById("quizMenu").style.display = "none";
  document.getElementById("returnButton").style.display = "inline-block";
  loadQuiz();
}

function loadQuiz() {
  const questionData = quizData[currentQuestion];
  document.getElementById("question").textContent = questionData.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(answer) {
  const questionData = quizData[currentQuestion];
  if (answer === questionData.correctAnswer) {
    score++;
    alert("正解！");
  } else {
    alert(`不正解！正しい答えは「${questionData.correctAnswer}」です。`);
  }
  currentQuestion++;
  currentQuestion < quizData.length ? loadQuiz() : showScore();
}

function showScore() {
  document.getElementById("question").textContent = "クイズ終了！";
  document.getElementById("options").innerHTML = "";
  document.getElementById("score").textContent = `あなたのスコア：${score} / ${quizData.length}`;
  document.getElementById("returnButton").style.display = "inline-block";
}

function returnToMenu() {
  quizData = [];
  currentQuestion = 0;
  score = 0;

  document.getElementById("question").textContent = "";
  document.getElementById("options").innerHTML = "";
  document.getElementById("score").textContent = "";
  
  document.getElementById("quizMenu").style.display = "block";
  document.getElementById("returnButton").style.display = "none";
}