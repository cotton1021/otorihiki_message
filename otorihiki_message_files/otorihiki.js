'use strict';

function getValue() {

  //文字系読み込み
  var dearNameInput = document.getElementById('dear-name').value;
  var yabunInput = document.getElementById('yabun').value;

  //ラジオボタンの項目すべてのname値を指定
  var radioButton = ['time', 'thanks', 'continue'];
  //チェックボックスの項目すべてのname値を指定
  var checkBox = ['torihiki1', 'torihiki2', 'musubi'];

  //ラジオボタンの項目の数だけループ…i<xのxは項目の数を指定（以下のチェックボックスも同様）
  for (var i = 0; i < 3; i++) {
    var radios = document.getElementsByName(radioButton[i]);
    radioButton[i] = "";

    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        radioButton[i] = radios[j].value;
        break;
      }
    }
  }

  //チェックボックスの項目の数だけループ。チェックが複数あれば改行して追加
  for (var i = 0; i < 3; i++) {
    var boxes = document.getElementsByName(checkBox[i]);
    var result = ""

    for (var j = 0; j < boxes.length; j++) {
      if (boxes[j].checked) {
        if (result != "") {
          result = result + "\n";
        }
        result = result + boxes[j].value;
      }
      checkBox[i] = result;
    }
  }

  //格納した値に文章を加えながら１つの変数にまとめる
  var sentence;
  if (dearNameInput !== 0) {
    sentence = `${dearNameInput}様\n`;
    }
  if (radioButton[0] != "") {
    sentence += radioButton[0];
  }
  if (yabunInput !== 0) {
    sentence += `${yabunInput}\n`;
  }
  if (radioButton[1] != "") {
    sentence += radioButton[1] + '\n';
  }
  if (checkBox[0] != "") {
    sentence += checkBox[0] + '\n';
  }
  if (checkBox[1] != "") {
    sentence += checkBox[1] + '\n';
  }
  if (checkBox[2] != "") {
    sentence += checkBox[2] + '\n';
  }
  if (radioButton[2] != "") {
    sentence += radioButton[2] + 'よろしくお願いいたします。';
  }
  //まとめた文章をテキストエリアに表示
  document.getElementById("sentenceArea").value = sentence;
}

//クリップボードにコピー
function copyClipBoad() {
  var copyText = document.getElementById("sentenceArea");
  copyText.select();
  document.execCommand("copy");
}
