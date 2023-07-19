const todo = document.getElementById("todo");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// 할 일 추가
function addTodo() {
  if (todo.value !== "") {
    const item = document.createElement("li"); // 할 일 리스트 생성
    const checkbox = document.createElement("input"); // 체크박스 생성
    checkbox.type = "checkbox"; // checkbox type 설정
    const textArea = document.createElement("span"); // 텍스트 영역 생성
    const delBtn = document.createElement("button"); // 삭제 버튼 생성

    textArea.innerHTML = todo.value; // input에 입력된 값 textArea에 할당
    todoList.appendChild(item); // item을 todoList의 (마지막)자식으로 삽입
    item.appendChild(checkbox); // checkbox를 item의 (마지막)자식으로 삽입
    item.appendChild(textArea); //textArea를 item의 (마지막)자식으로 삽입
    item.appendChild(delBtn); // delBtn을 item의 (마지막)자식으로 삽입
    delBtn.innerText = "삭제";
    todo.value = ""; // input 값 초기화

    // 할 일 완료 → 중간선 추가
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        textArea.style.textDecoration = "line-through";
      } else {
        textArea.style.textDecoration = "none";
      }
    });

    // 삭제 버튼 클릭 → 해당 아이템 삭제
    delBtn.addEventListener("click", delItem);
  } else {
    alert("할 일이 입력되지 않았습니다!");
  }
}

addBtn.addEventListener("click", addTodo);

function delItem(e) {
  e.target.parentElement.remove();
}
