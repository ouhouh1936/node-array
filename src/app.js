import express from "express";

const PORT = 7777;

const app = express();

app.listen(PORT, () => {
  console.log(`${PORT}🍔 start`);

  // 배열 arr 을 초기화한다.
  const arr = new Array();
  //초기화 된 배열 arr 을출력한다

  arr.push("효진언니");
  //데이터가 추가 된 arr을 출력한다

  console.log(arr);
  //arr에 데이터를 출력한다.

  //arr에 데이터를 추가한다

  arr.push("예림언니");
  arr.push("오은하");
  arr.push("박여원");
  arr.push("민기오빠");
  arr.push("민형오빠");
  arr.push("태섭오빠");

  arr.push("예림언니");
  arr.push("오은하");
  arr.push("박여원");
  arr.push("민기오빠");
  arr.push("민형오빠");
  arr.push("태섭오빠");
  //데이터가 추가된 arr을 출력한다.
  console.log(arr);

  //4번 인덱스를 출력한다.
  console.log(arr[4]);

  // 배열의 갯수를 출력한다.
  console.log(arr.length);

  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}님, 당장 교육청으로 오지 않으면...아몰랑`);
  }
});
