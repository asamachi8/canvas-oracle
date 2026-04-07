const frame = document.getElementById("fortuneFrame");
const image = document.getElementById("fortuneImage");

const nameEl = document.getElementById("fortuneName");
const captionEl = document.getElementById("fortuneCaption");
const bodyEl = document.getElementById("fortuneBody");
const pointsEl = document.getElementById("fortunePoints");
const noteEl = document.getElementById("fortuneNote");
const retry = document.getElementById("retryButton");

const cards = [
  {
    name: "歩むシカ",
    caption: "迷いの先の一歩",
    image: "images/via_deer_final.png",
    body: "考えすぎて、足が止まっていませんか。\n\nほんの小さな一歩でも、動き出せば景色は変わります。\n今日の一歩が、これからの道になります。",
    points: ["ひとつだけ決める","決めた後は振り返りすぎない","小さくても動くことを優先する"]
  },
  {
    name: "群れの羊",
    caption: "流れの時",
    image: "images/populus_sheep_final.png",
    body: "無理に答えを出さなくても、大丈夫です。\n\n今は流れに身を任せることで、自然と進む方向が見えてきます。\n焦らず、今の空気を感じてみてください。",
    points: ["判断を急がない","周囲の流れを観察する","休むことも選択に含める"]
  },
  {
    name: "玉座のライオン",
    caption: "力の象徴",
    image: "images/fortuna_major_lion_final.png",
    body: "あなたには、すでに十分な力があります。\n\n自信がなくても大丈夫。\n今日だけは、少しだけ前に出てみてください。",
    points: ["自分の力を疑わない","主導権を持つ","堂々と振る舞う"]
  },
  {
    name: "木の実を集めるリス",
    caption: "小さな積み重ね",
    image: "images/fortuna_minor_squirrel_final.png",
    body: "大きな変化がなくても、ちゃんと進んでいます。\n\n今やっていることは、あとでしっかり形になります。\n今日は目の前のことを、ひとつ丁寧に続けてみてください。",
    points: ["今できることを続ける","成果を急ぎすぎない","支えに感謝する"]
  },
  {
    name: "寄り添う小鳥たち",
    caption: "結びつく声",
    image: "images/conjunctio_birds_final.png",
    body: "人とのつながりの中に、今のあなたに必要な答えがあります。\n\nひとりで抱え込まず、少しだけ言葉にしてみてください。\nやさしいやり取りの中で、道が見えてきます。",
    points: ["誰かと話してみる","連絡してみる","言葉をやわらかくする"]
  },
  {
    name: "まゆの中の蚕",
    caption: "静かな内側",
    image: "images/carcer_silkworm_final.png",
    body: "思うように動けない日もあります。\n\n今は外に出るより、自分の内側を整える時間。\n焦らず、静かに力を育ててください。",
    points: ["無理に動かない","ひとり時間を整える","休むことを許す"]
  },
  {
    name: "甲羅を背負う亀",
    caption: "足元を固める時",
    image: "images/tristitia_tortoise_final.png",
    body: "少し心が重たいときは、立ち止まる合図です。\n\n今は勢いより、足元を整えることが大切。\nゆっくりでも、確かな一歩になります。",
    points: ["休みながら進む","無理に元気にならない","できる範囲を大切に"]
  },
  {
    name: "波間を跳ねるイルカ",
    caption: "喜びの気配",
    image: "images/laetitia_dolphin_final.png",
    body: "ふとした瞬間に、嬉しいことが訪れます。\n\n今日は少し力を抜いて、楽しい気持ちを受け取ってください。\nその軽やかさが流れを変えます。",
    points: ["楽しいことを優先する","嬉しさを素直に出す","流れに乗る"]
  },
  {
    name: "蜜を運ぶミツバチ",
    caption: "実りの気配",
    image: "images/acquisitio_bee_final.png",
    body: "これまでの積み重ねが、少しずつ形になります。\n\nまだ途中でも大丈夫。\n今は受け取る準備をしておくと、流れが整います。",
    points: ["努力を信じる","受け取る準備をする","分かち合う意識"]
  },
  {
    name: "羽化する蝶",
    caption: "手放しの先",
    image: "images/amissio_butterfly_final.png",
    body: "もう必要のないものを、手放すタイミングです。\n\n失うことは終わりではなく、始まり。\n空いた場所に新しいものが入ってきます。",
    points: ["執着に気づく","一度離れてみる","余白を怖がらない"]
  },
  {
    name: "気まぐれな猫",
    caption: "心地よさの方へ",
    image: "images/puella_cat_final.png",
    body: "今日は、自分が心地いいと思う方を選んで大丈夫です。\n\n無理をしないことが、結果的に良い流れにつながります。\nあなたの感覚を信じてください。",
    points: ["好きな方を選ぶ","頑張りすぎない","感覚を信じる"]
  },
  {
    name: "突進するイノシシの子",
    caption: "勢いは力になる",
    image: "images/puer_boar_piglet_final.png",
    body: "前に進みたい気持ちは、大切なエネルギーです。\n\nただし、少しだけ落ち着くともっと良くなります。\n勢いと冷静さのバランスを意識してみてください。",
    points: ["勢いを活かす","一呼吸おく","方向を確認する"]
  },
  {
    name: "地を踏み鳴らす雄牛",
    caption: "強い感情の扱い方",
    image: "images/rubeus_bull_final.png",
    body: "感情が強く出やすい時です。\n\nその力は悪いものではありません。\nただ、ぶつける前に少し整えることで、良い方向に使えます。",
    points: ["感情を否定しない","すぐ反応しない","力の使い方を選ぶ"]
  },
  {
    name: "夜を見渡すフクロウ",
    caption: "静けさの答え",
    image: "images/albus_owl_final.png",
    body: "静かな時間の中に、答えがあります。\n\n急がず、少し距離をとって考えてみてください。\n落ち着いた視点が、正しい判断につながります。",
    points: ["ひとり時間を作る","整理する","急がない"]
  },
  {
    name: "天へ昇る龍",
    caption: "始まりの兆し",
    image: "images/caput_draconis_dragon_final.png",
    body: "新しい流れが、静かに始まっています。\n\n不安があっても大丈夫。\n最初の一歩を受け入れることで、道が開いていきます。",
    points: ["始まりを受け入れる","流れに気づく","一歩踏み出す"]
  },
  {
    name: "殻を替えるヤドカリ",
    caption: "終わりは準備",
    image: "images/cauda_draconis_hermitcrab_final.png",
    body: "ひとつの流れが終わる時期です。\n\nそれは次のための準備でもあります。\n焦らず、新しい場所を待ってみてください。",
    points: ["終わりを受け入れる","整理する","次を急がない"]
  }
];

let opened = false;

function hideText() {
  nameEl.classList.remove("visible");
  captionEl.classList.remove("visible");
  bodyEl.classList.remove("visible");
  pointsEl.classList.remove("visible");
  noteEl.classList.remove("visible");
  retry.classList.remove("visible");
}

function clearText() {
  nameEl.textContent = "";
  captionEl.textContent = "";
  bodyEl.textContent = "";
  pointsEl.innerHTML = "";
}

frame.addEventListener("click", () => {
  if (opened) return;

  opened = true;
  frame.classList.add("revealing");

  const card = cards[Math.floor(Math.random() * cards.length)];

  setTimeout(() => {
    image.src = card.image;
    image.alt = card.name;
  }, 500);

  setTimeout(() => {
    nameEl.textContent = card.name;
    nameEl.classList.add("visible");
  }, 1300);

  setTimeout(() => {
    captionEl.textContent = `～${card.caption}～`;
    captionEl.classList.add("visible");
  }, 1500);

  setTimeout(() => {
    bodyEl.textContent = card.body;
    bodyEl.classList.add("visible");
  }, 1700);

  setTimeout(() => {
    pointsEl.innerHTML = "";
    card.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      pointsEl.appendChild(li);
    });
    pointsEl.classList.add("visible");
  }, 1900);

  setTimeout(() => {
    noteEl.classList.add("visible");
  }, 2100);

  setTimeout(() => {
    retry.classList.add("visible");
  }, 2300);
});

retry.addEventListener("click", () => {
  opened = false;

  frame.classList.remove("revealing");
  hideText();

  setTimeout(() => {
    clearText();
    image.src = "images/placeholder_final.png";
  }, 200);
});