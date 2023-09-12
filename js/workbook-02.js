//
// workbook-02.js
// 問題番号：10 ~ 14
// 各設問に対するプログラムを{}の中に実装しましょう。
//

const q10 = () => {
  // ----------------------------------------
  // 10. 0 or not 0
  // ----------------------------------------
  //console.log(`10. 整数を入力して、その値が 0 なら「 ZERO 」、0 でなければ「 not ZERO 」とコンソールに表示する`);

  let num1 = prompt(`Q10. 数値を入力`);
  if (num1 === 0) {
    console.log(`ZERO`);
  } else {
    console.log(`not ZERO`);
  }


}

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->


const q11 = () => {
  // ----------------------------------------
  // 11. 都道府県番号検索
  // ----------------------------------------
  //console.log(`11. 都道府県番号を入力し、その値に該当する都道府県名をコンソールに表示する`);

  let num1 = parseInt(prompt(`Q11. 都道府県番号を入力`));
  if (num1 >= 1) {
    console.log("都道府県番号：" + num1);
    if (num1 === 25) {
      console.log("滋賀県");
    } else if (num1 === 26) {
        console.log("京都府");
    } else if (num1 === 27) {
      console.log("大阪府");
    } else if (num1 === 28) {
      console.log("兵庫県");
    } else if (num1 === 29) {
      console.log("奈良県");
    } else if (num1 === 30) {
      console.log("和歌山県");
    } else {
      console.log("該当なし");
    }
  }

}

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->


const q12 = () => {
  // ----------------------------------------
  // 12. 奇数 or 偶数
  // ----------------------------------------
  //console.log(`12. 整数を入力し、その値が偶数なら「 even 」、奇数ならば「 odd 」とコンソールに表示する`);

  let num1 = prompt(`Q12. 整数を入力`);
  if (num1 % 2 === 0) {
    console.log("評価点：" + num1);
    console.log("event");
  } else {
    console.log("評価点：" + num1);
    console.log("odd");
  }



}

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->


const q13 = () => {
  // ----------------------------------------
  // 13. 入園料の計算
  // ----------------------------------------
  console.log(`13. 入園人数を入力して、その入園料金をコンソールに表示する\r\n入園料：１人８００円、５人以上のグループなら１人７６０円、２０人以上の団体なら１人５００円`);

  let num1 = prompt(`Q13. 入園者数を入力`);
  if (num1 >= 20) {
    console.log("入園料は：" + num1 * 500 + "円です");
  } else if (num1 >= 5) {
    console.log("入園料は：" + num1 * 760 + "円です");
  } else {
    console.log("入園料は：" + num1 * 800 + "円です");
  }




}

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->


const q14 = () => {
  // ----------------------------------------
  // 14. 成績評価判定
  // ----------------------------------------
  //console.log(`14. 出席率と評価点を入力し、A ~ Fの評価判定結果をコンソールに表示する\r\n評価判定は、出席率７５％以上 かつ \r\n評価点90~100：A\r\n評価点80~89：B\r\n評価点70~79：C\r\n評価点60~69：D\r\n評価点60未満：F\r\n出席率が75%未満の場合は、評価点に関わらず判定はF`);

  let num1 = prompt(`Q14. 出席率の入力`);
  let num2 = prompt(`Q14. 評価点の入力`);
  if (num1 >= 75) {
    console.log("出席率：" + num1);
    console.log("評価点：" + num2);
    console.log("判定　：F");
    if (num2 >= 90) {
      console.log("出席率：" + num1);
      console.log("評価点：" + num2);
      console.log("判定　：A");
    } else if (num2 >= 80) {
      console.log("出席率：" + num1);
      console.log("評価点：" + num2);
      console.log("判定　：B");
    } else if (num2 >= 70) {
      console.log("出席率：" + num1);
      console.log("評価点：" + num2);
      console.log("判定　：C");
    } else if (num2 >= 60) {
      console.log("出席率：" + num1);
      console.log("評価点：" + num2);
      console.log("判定　：D");
    } else {
      console.log("出席率：" + num1);
      console.log("評価点：" + num2);
      console.log("判定　：F");
    }
  } else {
    console.log("出席率：" + num1);
    console.log("評価点：" + num2);
    console.log("判定　：F");
  }
}
