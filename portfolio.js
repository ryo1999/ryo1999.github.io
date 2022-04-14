//クリックされた要素の位置までスクロール移動
window.addEventListener('DOMContentLoaded', () => {
    const getid = document.querySelectorAll('a[id$="link"]');//id名の最後がlinkで終わるようなidを取得
    const header = document.querySelector('.jump');
  
    getid.forEach(link => {
      link.addEventListener('click', e => {//クリックされたら
        e.preventDefault();//htmlのaタグの処理を停止
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);//ターゲットの要素を取得
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;//サイト上上部から現在地までの距離と現在地から目標位置までの距離を取得して足す
        const headerHeight = header.offsetHeight;//ヘッダーの高さ
        const totalScrollAmount = targetOffsetTop - headerHeight//どれだけスクロールするか
        window.scrollTo({
          top: totalScrollAmount,
          behavior: "smooth"
        });
      });
    });
  });

//詳細表示
const baseball = document.querySelectorAll('[id$="baseball"]');
const soccer = document.querySelectorAll('[id$="soccer"]');
const badminton = document.querySelectorAll('[id$="badminton"]');
// const open_baseball = document.getElementById("open-baseball");
// const close_baseball = document.getElementById("close-baseball");
// const detail_baseball = document.getElementById("detail-baseball");
// const open_soccer = document.getElementById("open-soccer");
// const close_soccer = document.getElementById("close-soccer");
// const detail_soccer = document.getElementById("detail-soccer");
// const open_badminton = document.getElementById("open-badminton");
// const close_badminton = document.getElementById("close-badminton");
// const detail_badminton = document.getElementById("detail-badminton");

function clickButton1(){
  console.log(baseball[0].style.display);
  if(baseball[0].style.display == ""){
    baseball[0].style.display = "none";
    baseball[1].style.display = "block";
    baseball[2].style.visibility = "visible";
  }else{
    baseball[0].style.display = "";
    baseball[1].style.display = "none";
    baseball[2].style.visibility = "hidden";
  }
}

function clickButton2(){
  if(soccer[0].style.display == ""){
    soccer[0].style.display = "none";
    soccer[1].style.display = "block";
    soccer[2].style.visibility = "visible";
  }else{
    soccer[0].style.display = "";
    soccer[1].style.display = "none";
    soccer[2].style.visibility = "hidden";
  }
}

function clickButton3(){
  if(badminton[0].style.display == ""){
    badminton[0].style.display = "none";
    badminton[1].style.display = "block";
    badminton[2].style.visibility = "visible";
  }else{
    badminton[0].style.display = "";
    badminton[1].style.display = "none";
    badminton[2].style.visibility = "hidden";
  }
}

// const list = document.getElementsByClassName("detail");
// for(i=0;i<list.length;i++){
//   list[i].style.visibility = "hidden";
// }

// function clickButton1(){
//   const baseball = document.getElementById("baseball");

//   if(baseball.style.visibility == "visible"){
//     baseball.style.visibility = "hidden";
//   }else{
//     baseball.style.visibility = "visible";
//   }
// }

// function clickButton2(){
//   const soccer = document.getElementById("soccer");

//   if(soccer.style.visibility == "hidden"){
//     soccer.style.visibility = "visible";
//   }else{
//     soccer.style.visibility = "hidden";
//   }
// }

// function clickButton3(){
//   const badminton = document.getElementById("badminton");

//   if(badminton.style.visibility == "hidden"){
//     badminton.style.visibility = "visible";
//   }else{
//     badminton.style.visibility = "hidden";
//   }
// }