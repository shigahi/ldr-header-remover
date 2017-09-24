function(){
  var ldrHeader = document.getElementsByTagName("div");  // ページから divタグの配列を取得して変数に定義。
  ldrHeader[0].style = "";  // 配列の先頭が該当するお知らせヘッダーなので 0 で指定し、そのstyleプロパティを空にする。
  ldrHeader[0].innerHTML = ""  // 同様に<div></div>に囲まれた部分を innerHTML プロパティで取得して空にする。
};
