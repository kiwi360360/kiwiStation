// document.body.oncontextmenu = () => {self.event.returnValue=false};
// if(uKS === false){
//     document.body.innerHTML = `
//         <h1>登入kiwiStation</h1>
//         <hr>
//         <div id="gridDiv">
//             <p id="uIDP" class="inputP">帳號：</p>
//             <input type="text" id="uID">
//             <p id="uPWDP" class="inputP">密碼：</p>
//             <input type="password" id="uPWD">
//             <button id="oldKS" class="inputB">登入</button>
//             <button id="newKS" class="inputB">註冊</button>
//         </div>
//     `;
// }
// else{
//     document.body.innerHTML = `
//         <h1>kiwiStation</h1>
//         <hr>
//         <h4>${uKS['id']}您好！</h4>
//     `;
// }
document.body.innerHTML = `
    <h1>加入kiwiStation</h1>
    <hr>
    <form id="gridDiv" method="POST" action="https://maohupi.riarock.com/web/tool/kiwiStation/mail.php">
        <p id="uIDP" class="inputP">電郵：</p>
        <input type="text" id="uMAIL" name="mail">
        <button id="mailKS" class="inputB">接收通知</button>
        <p id="info">
            加入kiwiStation即可於第一時間接收到本外掛的相關異動通知與更新說明，此功能並非強制加入。<br>
            點擊「接收通知」按鈕送出電郵後，即表示您允許本外掛向您推播通知訊息。
        </p>
    </form>
`;