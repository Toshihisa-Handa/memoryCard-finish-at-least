// 変数ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let palet = document.getElementById('palet'); //カードフィールド
let img = document.createElement('img');//カード要素
let arr =[];//カード要素をappemdChildするための格納用
let cardCara_box =[];//1枚目と2枚目のカード識別のための配列
let c = 0;//クリックした数をカウント
let hitCount =document.querySelector('#hitCount');//2枚揃った数をカウントする変数
let fin =0;//2枚揃ったとき++をして13になるとアラートするときに使う
let allclic = document.querySelector('#allclic');//クリックした回数を表示するための変数
let judge =[];//クリックでカード＋数字のクラス（spade13など）を取得する変数

// 関数ーーーーーーーーーーーーーーーーーーーーーーーーーーー

// クリックしたカードが2枚になりかつ目が揃った時アラートさせる関数
function delayedAlert() {
  window.setTimeout(hitAlert, 500);
}
function hitAlert() {
  alert('あたり');
}

// クリックしたカードが2枚になりかつ目が揃わなかった時アラートさせる関数

function delayedAlert2() {
  window.setTimeout(missAlert, 500);
}
function missAlert() {
  alert('外れ');
}



// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

//スペードのカード要素生成
for(i=1; i<14; i++){
img.className = `card spade spade${i} ${i}`;
img.id = '';
img.disabled;
img.setAttribute('src','images/front.png');
img.onclick = clickFunc;
arr.push(img);
img =document.createElement('img');
}

//ハート（スペードと同じ内容）
for(i=1; i<14; i++){
  img.className = `card heart heart${i} ${i}`;
  img.id = '';
  img.disabled;
  img.setAttribute('src','images/front.png');
  img.onclick = clickFunc;
  arr.push(img);
  img =document.createElement('img');
  }

  console.log(arr)

//配列をランダムに
//フィッシャーイャーツコピー
for(i = arr.length - 1; i > 0; i--){
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = arr[i];
  arr[i] = arr[r];
  arr[r] = tmp;
  }


//アペンドチャイルドでimgを生成
for(i=0; i<26; i++){
  palet.appendChild(arr[i]);

}



// カードをクリックした時の関数
  function clickFunc(event){
    c++;//クリック回数を取得    
    let data = event.target.className;//クリックしたカードのクラスを取得
    let cardData = data.split(' ');//取得したクラスを配列に変換
    event.srcElement.src = `images/${cardData[1]}/${cardData[3]}.png`;
    let cardNo = cardData[3];//クリックしたimgのカードの数字のクラスを取得（例:13）
    judge.push(cardNo);//配列judgeへクリックしたカードの数字を格納（これを1枚目と2枚目で照らして照合する）
    let cardCara = cardData[2];//各img唯一のクラスである種類＋数字のクラスを定義(裏返にするときに使用する）
    cardCara_box.push(cardCara);//(クリックしたcardCaraを配列に格納し裏返処理に使う）

//コンソールたちーーーーーーーーーーーーーーーーーーーーーーーー
    console.log('data',cardData);
    console.log(data);
    console.log(cardData[3]);
    console.log(cardCara);
    console.log(cardCara_box);
 //---------------------------------------------------  

//?????????ここの記述でクリックしたカードを2回目でクリックできない様にしているのだが、機能しない？？？？？？？？

    //  if(judge.length ==1){       
    //     let clic1 = document.querySelector(`.${cardCara_box[c-1]}`);
    //     clic1.disabled = true;
    //     console.log(clic1);
    //     console.log(`${cardCara_box[c-1]}`);
    //  }
    //  if(judge.length ==2){
    //   let clic2 = document.querySelector(`.${cardCara_box[c]}`);
    //   clic1.disabled = true;
    //  }
     
//???????????????????????????????????????????????????????????????????????????????????????????????


      if(judge.length ==2){
        if(judge[0]==judge[1]){
          delayedAlert();
          fin++;
       }else{
          delayedAlert2();          
          let clicFirst = document.querySelector(`.${cardCara_box[c-2]}`);
          let clicSecond = document.querySelector(`.${cardCara_box[c-1]}`);
              
          // 2枚クリックしたときにカードNoが揃わなかったとき二枚目をゆっくり裏にする関数
            function delayedCard() {
              setTimeout(missCard, 500);
            }
            function missCard() {
            clicFirst.src = '/images/front.png';         
            clicSecond.src = '/images/front.png';
            }
            delayedCard();
              

        // 関数ここまでーーーーーーーーーーーーーーーーーーーーーーーーー
        }
//ジャッジを初期化している
        judge =[];
      }
//カードクリックの関数ここまで------------------------------------------------

//終了判定
    if(fin==13){     
    let finalert = alert('お疲れ様でした');
    setTimeout(finalert,700);
    };
//--------------------------------------------------

//当たった回数とめくった回数の記述
allclic.innerHTML =c;
hitCount.innerHTML = fin;

//コンソールたち
console.log(c);
console.log(judge);
console.log(judge[0]);
console.log(judge[1]);
console.log(fin);

};




// let btn = document.querySelector('#btn');
// btn.disabled = true;

// let test =document.querySelector('#test');
// test.onclick =function(){
//   test.disabled= true;
// }