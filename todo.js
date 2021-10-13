// in定的元素
    // 選put的文字作為代辦事項加入到下方區塊
function addTodo (event) {
    // 阻止事件預設行為
    event.preventDefault()   
    // 透過query Selector==>透過類似CSS與法找出特取輸入欄這個元素
    let todoInput=document.querySelector('#todo-field')
    // input元素 .value=>輸入欄位目前的值
    // input text預設資料型態是String
    // String.trim函數 可以刪除多餘的空格
    // e.g. '  1  ' => '1', '          2' => '2'
    let todoName=todoInput.value.trim()
    // 判斷輸入文字是否為空 
    if (!todoName){
        alert('待辦名稱不能為空')
        // break (if裡面不能使用)
        return //等於立刻結束函數回傳undefined
    }
    // 選取todo-list這個元素
    let todoList=document.querySelector('#todo-list')
    // 建立一個p元素
    let newTodo=document.createElement('p')
    // 建立代辦的標題元素
    let newTodoTitle = document.createElement('span')
    // 建立複選方塊的元素
    let newTodoCheckbox = document.createElement('input')
    // 將複選方塊的type改成checkbox讓她顯示為方塊
    newTodoCheckbox.type = "checkbox"
    // 把勾選方塊元素的onchange綁定到checkTodo 這個函數
    newTodoCheckbox.onchange = function(){checkTodo(newTodo)}
    // 將標題元素的文字內容設定為todoName(用戶輸入的內容)
    newTodoTitle.innerText=todoName
    // 把複選方塊加到newTodo這個 p 元素
    newTodo.appendChild(newTodoCheckbox)
    // 把標題元素(span)加到newTodo這個 p 元素
    newTodo.appendChild(newTodoTitle)
    todoList.appendChild(newTodo)
    //把輸入框的值設定為null(初始值)
    todoInput.value = null  //只要資料改變，畫面就跟著改變
    // input類元素.focus()-->將游標的焦點放在該元素(幫你點他)
    todoInput.focus()
}
// 將待辦改為完成狀態，參數: 待辦元素(DOM) p 元素
function checkTodo(todo){
    // DOM.classList.add(x) -->替特定元素增加名稱為X的class 
    todo.classList.add('completed-todo')
    // 將勾選方塊的disabled屬性設定為truE 以防止又被反勾
    todo.children[0].disabled =  true
}