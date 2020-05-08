// 変数ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let palet = document.getElementById('palet');
let img = document.createElement('img');
let arr =[];
let cardCara_box =[];
let c = 0;
let hitCount =document.querySelector('#hitCount');
let fin =0;
let allclic = document.querySelector('#allclic');
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

//スペード
for(i=1; i<14; i++){
img.className = `card spade spade${i} ${i}`;
img.id = '';
img.setAttribute('src','images/front.png');
img.onclick = clickFunc;
arr.push(img);
img =document.createElement('img');
}

//ハート
for(i=1; i<14; i++){
  img.className = `card heart heart${i} ${i}`;
  img.id = '';
  img.setAttribute('src','images/front.png');
  img.onclick = clickFunc;
  arr.push(img);
  img =document.createElement('img');
  }

  console.log(arr)

//配列をランダムに


for(i = arr.length - 1; i > 0; i--){
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = arr[i];
  arr[i] = arr[r];
  arr[r] = tmp;
  }



for(i=0; i<26; i++){
  palet.appendChild(arr[i]);

}


// グローバル関数
let judge =[];

// カードをクリックした時の関数
  function clickFunc(event){
    c++;
    let data = event.target.className;
    let cardData = data.split(' ');
    let esrc =event.srcElement;
    event.srcElement.src = `images/${cardData[1]}/${cardData[3]}.png`;
    console.log('data',cardData);
    // console.log(event);
    console.log(data);
    console.log(cardData[3]);
    let cardNo = cardData[3];
    judge.push(cardNo);
    let cardCara = cardData[2];
    console.log(cardCara);
    cardCara_box.push(cardCara);
    console.log(cardCara_box);

      // if(judge.length ==2){
      //   if(judge[1]==judge[2]){
      //     delayedAlert();  
      //   }else{
      //     delayedAlert2
      //   }      
      // }       
      if(judge.length ==2){
        if(judge[0]==judge[1]){
          delayedAlert();
          fin++;
          
          
          // judge =[];

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
              
        //  clicFirst.src = '/images/front.png';         
        //  clicSecond.src = '/images/front.png';
        // 関数ここまでーーーーーーーーーーーーーーーーーーーーーーーーーー
        
        // judge =[];
        }

        judge =[];
        
      }
    //  カードクリックの関数ここまで

    if(fin==13){
     
    let finalert = alert('お疲れ様でした');
    setTimeout(finalert,700);
    };

allclic.innerHTML =c;
hitCount.innerHTML = fin;
console.log(c);
console.log(judge);
console.log(judge[0]);
console.log(judge[1]);
console.log(fin);

};

