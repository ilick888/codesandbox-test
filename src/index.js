import "./styles.css";

const onClickAdd = (text = "") => {
  //textboxの値を取得
  const inputText = text ? text : document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //完了ボタン生成
  const complate = document.createElement("button");
  complate.innerText = "完了";
  complate.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "list-row";
    //li生成
    const li = document.createElement("li");
    li.innerText = complate.parentNode.firstChild.innerText;
    //戻すボタン生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      onClickAdd(backbutton.parentNode.firstChild.innerText);
      document
        .getElementById("complate-list")
        .removeChild(backbutton.parentElement);
    });
    //divに要素追加
    div.appendChild(li);
    div.appendChild(backbutton);
    //html生成
    document.getElementById("complate-list").appendChild(div);
    //削除
    deleteFromImcomplateList(complate.parentNode);
  });
  //削除ボタン生成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    //親タグをリストから削除
    const deleteTarget = deletebutton.parentNode;
    deleteFromImcomplateList(deleteTarget);
  });
  //divに要素追加
  div.appendChild(li);
  div.appendChild(complate);
  div.appendChild(deletebutton);
  //html生成
  document.getElementById("imcomplate-list").appendChild(div);
};

const deleteFromImcomplateList = (target) => {
  document.getElementById("imcomplate-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
