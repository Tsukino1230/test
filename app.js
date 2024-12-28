// 苗字と名前のリスト
const surnames = ["田中", "佐藤", "鈴木", "高橋", "伊藤", "西園寺", "一条", "藤村", "神谷", "松本", "松岡", "氷室", "小鳥遊", "柊", "伊達", "花京院", "神宮寺", "早乙女", "綾小路", "有栖川", "大黒", "叢雲", "神名", "五十竹", "衣川", "枓木", "輝矢"];
const firstNames = ["太郎", "花子", "健一", "美咲", "陽菜", "杏樹", "凛", "真綾", "春樹", "和馬", "篤史", "翔", "隼人", "正樹", "亮", "さな", "柚月", "葵", "結衣", "愛", "七海", "ララ", "香菜", "紫", "凪", "梓", "宗氏", "潮", "光", "添"];

// 要素を取得
const nameDisplay = document.getElementById("nameDisplay");
const generateButton = document.getElementById("generateButton");

// ボタンクリック時の処理
generateButton.addEventListener("click", () => {
  // ランダムな苗字と名前を取得
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];

  // 表示を更新
  nameDisplay.textContent = `${randomSurname} ${randomFirstName}`;
});
