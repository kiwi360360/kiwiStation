console.log('%c 您已使用「kiwiStation」!','background:#ffeba0;color:#905000')
console.log('%c 「kiwiStation」是一款由貓虎皮開發，針對2021beta版的半自動網奇外掛。','background:#ffeba0;color:#905000')
//()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
if(location.href.search('2021_beta') > -1 && location.href.search('kiwi') > -1){
	const $_GET = {}, $_COOKIE = {};
	let url = location.href;
	if(url.indexOf('?') != -1){
		url.split('?')[1].split('&').forEach(function(kv){
			$_GET[kv.split('=')[0]] = kv.split('=')[1];
		});
	}
	let cookie = document.cookie;
	if(cookie != ''){
		cookie.split('; ').forEach(function(kv){
			$_COOKIE[kv.split('=')[0]] = kv.split('=')[1];
		});
	}
	function DomEval(st){
		let s = document.createElement('script');
		s.innerHTML = st;
		document.body.appendChild(s);
		document.body.removeChild(s);
	}
	function KS_sendPhp(kiwiPlugInPhpName,kiwiPlugInSendValue){
		var xmlhttp = new XMLHttpRequest();				
		xmlhttp.open("POST", kiwiPlugInPhpName,true);
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4) {
				window.console.log(xmlhttp.responseText);
			}
		}
		xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlhttp.send(kiwiPlugInSendValue);
	}
	const KS$ = (e, f = document) => {return(f.querySelector(e));};
	const KS$$ = (e, f = document) => {return(f.querySelectorAll(e));};
	const vw = () => {return(window.innerWidth/100);}
	const vh = () => {return(window.innerHeight/100);}
	const KSDiv = document.createElement('div');
	const KSMD = document.createElement('div');
	const KSMask = document.createElement('div');
	const KSBox = document.createElement('div');
	const KSScript = document.createElement('script');
	const KSStyle = document.createElement('style');
	const KSBtn = [];
	KSDiv.setAttribute('KWUN', '')
	KSDiv.setAttribute('KWUP', '')
	KSDiv.setAttribute('id', 'KSDiv');
	KSDiv.style.width = 1.7*vw()+'px';
	KSDiv.style.height = 3*vw()+'px';
	KSDiv.style.backgroundColor = '#b1fc92';
	KSDiv.style.userSelect = 'none';
	KSDiv.style.position = 'fixed';
	KSDiv.style.right = '0px';
	KSDiv.style.bottom = '0px';
	KSDiv.style.borderRadius = 0.5*vw()+'px';
	KSDiv.style.display = 'grid';
	KSDiv.style.gridAutoRows = 2.6*vw()+'px';
	KSDiv.style.gridGap = 0.2*vw()+'px';
	KSDiv.style.padding = 0.2*vw()+'px';
	KSDiv.style.boxSizing = 'border-box';
	KSDiv.style.gridAutoColumns = 1.3*vw()+'px';
	let KSGt = 'QMRU';
	for(let i = 0; i < KSGt.length; i++){
		KSDiv.setAttribute(KSGt[i], $_GET[KSGt[i]]);
	}
	let KSQt;
	if(KSDiv.getAttribute('M')[2] == 3){KSQt = 20;}
	else if(KSDiv.getAttribute('M')[2] == 2){KSQt = 10;}
	else if(KSDiv.getAttribute('M')[2] == 1){KSQt = 5;}
	KSDiv.setAttribute('qTotal', KSQt);
	KSDiv.setAttribute('aTotal', KSQt);
	KSMD.setAttribute('id', 'KSMD')
	KSMD.style.backgroundImage = 'url(\'https://kiwi360360.github.io/kiwiStation/img/md.png\')';
	KSMD.style.backgroundRepeat = 'no-repeat';
	KSMD.style.backgroundSize = 'cover';
	KSMD.style.zIndex = '999999999';
	KSMD.style.gridArea = '1/1/2/2';
	KSDiv.appendChild(KSMD);
	const KSNowUser = $_GET['U'] ? $_GET['U'] : '無法辨識';
	var KSBtnTitle = ['帳密填入', '帳號資訊', '題目資訊', '快速填答', '發送紀錄', '其它設定'];
	var KSBtnHide = {'login.php': [1, 2, 3, 4, 5], 'menu.php': [0, 2, 3, 4], 'index.php': [0]};
	for(let i = 0; i < 6; i++){
		KSBtn[i] = document.createElement('button');
		KSBtn[i].style.backgroundColor = '#00000000';
		KSBtn[i].style.borderRadius = 0.5*vw()+'px';
		KSBtn[i].style.border = 'none';
		KSBtn[i].style.margin = '0px';
		KSBtn[i].style.backgroundImage = `url('https://kiwi360360.github.io/kiwiStation/img/btn${i+1}.png')`;
		KSBtn[i].style.backgroundRepeat = 'no-repeat';
		KSBtn[i].style.backgroundSize = '100%';
		KSBtn[i].style.gridArea = `1/${i+2}/2/${i+3}`;
		KSBtn[i].setAttribute('btnId', `btn${i+1}`);
		KSBtn[i].setAttribute('title', KSBtnTitle[i]);
		KSBtn[i].setAttribute('kscc', 'true');
		KSBtn[i].addEventListener('mousedown', (e) => {
			e.stopPropagation();
		});
		KSBtn[i].onclick = function(e){
			e.stopPropagation();
			KS_reSize();
			if(this.getAttribute('btnId') == 'btn1'){
				KSBox.innerHTML = `
					<h1>帳密填入</h1>
					<hr>
					<article>
						<select selectid="users">
							<option value="auto" selected disabled>請選擇已新增的用戶</option>
						</select><br>
						<button onclick="KS_fillInUser()">帳密填入</button> 
						<button onclick="KS_killUser()">刪除選項</button> 
						<button onclick="KS_usersOutput()">匯出選單</button> 
						<button onclick="KS_usersInput()">匯入選單</button>
						<hr>
						帳號：<input type="text" userid="name"><br>
						密碼：<input type="password" userid="pwd"><br>
						<button onclick="KS_addUser()">新增選項</button>
					</article>
				`;
				DomEval('KS_reSet_usersSelect();');
			}
			if(this.getAttribute('btnId') == 'btn2'){
				KSBox.innerHTML = `
					<h1>帳號資訊</h1>
					<hr>
					<article>
						目前用戶：<span pid="userNow"></span><br>
						本月積分：數寶 <span pid="m數寶"></span>, 銜接 <span pid="m銜接"></span><br>
						學期積分：數寶 <span pid="y數寶"></span>, 銜接 <span pid="y銜接"></span></span>
						<hr>
						作答紀錄：
						<div pid="pGB" style="overflow: auto; display: grid; grid-gap: 0.5vw; grid-template-columns: auto auto auto auto auto auto;">
							<span>編號</span>	
							<span>名稱</span>
							<span>題數</span>
							<span>答對</span>
							<span>開始</span>
							<span>結束</span>
						</div>
					</article>
				`;
				DomEval('KS_getPoint();');
			}
			else if(this.getAttribute('btnId') == 'btn3'){
				KSBox.innerHTML = `
					<h1>題目資訊</h1>
					<hr>
					<article>
						<p>
							題號：<span pid="num"></span><br>
							答案：<span pid="ans"></span><br>
							直接在工具列顯示答案：<input type="checkbox" onchange="KS_btn3C(this.checked)">
						</p>
					</article>
				`;
				if(document.querySelector('[btnId="btn3"]').getAttribute('oa') == 'true'){
					document.querySelector("#KSBox > article > p > input[type=checkbox]").setAttribute('checked', '');
				}
			}
			else if(this.getAttribute('btnId') == 'btn4'){
				KSBox.innerHTML = `
					<h1>快速填答</h1>
					<hr>
					<article>
						<p>
							注意：請先將本次作答的所有題目載入過一輪再使用此功能！<br>
							<button onclick="KS_ansRobot()">快速填答</button>
						</p>
					</article>
				`;
			}
			else if(this.getAttribute('btnId') == 'btn5'){
				KSBox.innerHTML = `
					<h1>發送紀錄</h1>
					<hr>
					<article>
						<p>
							題目總數：<input type="text" value="${KSDiv.getAttribute('qTotal')}" onchange="KSDiv.setAttribute('qTotal', this.value)"><br>
							作答題數：<input type="text" value="${KSDiv.getAttribute('aTotal')}" onchange="KSDiv.setAttribute('aTotal', this.value)"><br>
							<button onclick="KS_sendA()">發送紀錄</button><br>
							發送次數：<span pid="sBv"></span><br>
							<button onclick="KS_sendB()">連發紀錄</button>
							<!-- <input type="checkbox" onchange="KS_XMLhttpRobotC(this.checked);"> -->
						</p>
					</article>
				`;
			}
			else if(this.getAttribute('btnId') == 'btn6'){
				KSBox.innerHTML = `
					<h1>其它設定</h1>
					<hr>
					<article>
						<p>
						剩餘時間：<span pid="timeLeft"></span><br>
						播放音效：<button onclick="KS_playSound('dot')">噔</button><button onclick="KS_playSound('ping')">咚叮</button>
						</p>
					</article>
				`;
			}
			KSMask.style.opacity = '1';
			KSMask.style.pointerEvents = 'auto';
		}
		for(let filename in KSBtnHide){
			if(location.href.search(filename) > -1 && KSBtnHide[filename].includes(i)){
				KSBtn[i].style.backgroundColor = '#00000044';
				KSBtn[i].setAttribute('kscc', 'false');
				KSBtn[i].onclick = function(e){
					e.stopPropagation();
					alert(`您無法在此頁面使用${KSBtnTitle[i]}功能！`);
				}
			}
		}
		KSDiv.appendChild(KSBtn[i]);
		KSDiv.style.width = (KSDiv.style.width.replace('px', '')-1+1+2.8*vw())+'px';
		KSDiv.style.gridAutoColumns += ` ${2.6*vw()}px`;
	}
	KSMask.style.position = 'fixed';
	KSMask.style.left = '0px';
	KSMask.style.top = '0px';
	KSMask.style.width = 100*vw()+'px';
	KSMask.style.height = 100*vh()+'px';
	KSMask.style.backgroundColor = '#00000088';
	KSMask.style.zIndex = '999999998';
	KSMask.style.opacity = '0';
	KSMask.style.pointerEvents = 'none';
	KSMask.style.transition = '0.5s';
	KSMask.addEventListener('mousedown', function(e){
		e.stopPropagation();
	})
	KSMask.addEventListener('click', function(e){
		e.stopPropagation();
		this.style.opacity = '0';
		this.style.pointerEvents = 'none';
	})
	KSBox.style.width = 80*vw()+'px';
	KSBox.style.height = 80*vh()+'px';
	KSBox.style.margin = 10*vh()+'px auto';
	KSBox.style.borderRadius = 1*vw()+'px';
	KSBox.style.overflow = 'auto';
	KSBox.style.backgroundColor = '#ffffff';
	KSBox.style.padding = 1*vw()+'px';
	KSBox.setAttribute('id', 'KSBox')
	KSBox.addEventListener('click', (e) => {e.stopPropagation();});
	KSBox.addEventListener('mousedown', (e) => {e.stopPropagation();});
	KSBox.addEventListener('keydown', function(e){
		e.stopPropagation();
	});
	KSScript.innerHTML = `
		LV = window.LV || {};
		let KS_sendB_times = 0, KS_PointScore = false;
		let KS_Users = ${$_COOKIE['KS_Users']} == undefined ? {} : JSON.parse(\`${$_COOKIE['KS_Users']}\`);
		function KS_sendA(){
			var xmlhttp = new XMLHttpRequest();				
			xmlhttp.open("POST", "writescore/writescore.php", true);
			xmlhttp.onreadystatechange=function() {
				if (xmlhttp.readyState==4) {
					if(xmlhttp.responseText.search('ERROR') == -1 && xmlhttp.responseText.search('WARNING') == -1 && xmlhttp.responseText.search('NOTICE') == -1){
						alert('送出成功！');
						KS_sendB_times++;
						document.querySelector('[btnId="btn5"]').style.backgroundImage = 'none';
						document.querySelector('[btnId="btn5"]').style.backgroundColor = '#ffffff';
						document.querySelector('[btnId="btn5"]').innerText = 'OK';
					};
				}
			}
			xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xmlhttp.send("Qname="+KSDiv.getAttribute('Q')+"&Qtotal="+KSDiv.getAttribute('qTotal')+"&CorrectNo="+KSDiv.getAttribute('aTotal')+"&LevelNum="+GV.userIOKey[0][1]+"&classnum="+KSDiv.getAttribute('M')+"&R="+KSDiv.getAttribute('R')+"&U="+KSDiv.getAttribute('U'));
		}
		function KS_sendB(){
			var xmlhttp = new XMLHttpRequest();				
			xmlhttp.open("POST", "writescore/writescore.php", true);
			xmlhttp.onreadystatechange=function() {
				if (xmlhttp.readyState==4) {
					if(xmlhttp.responseText.search('ERROR') == -1 && xmlhttp.responseText.search('WARNING') == -1 && xmlhttp.responseText.search('NOTICE') == -1){
						setTimeout(KS_sendB, 30);
						document.querySelector('[btnId="btn5"]').style.backgroundImage = 'none';
						document.querySelector('[btnId="btn5"]').style.backgroundColor = '#ffffff';
						KS_sendB_times++;
						document.querySelector('[btnId="btn5"]').innerText = 'OK';
					};
				}
			}
			xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xmlhttp.send("Qname="+KSDiv.getAttribute('Q')+"&Qtotal="+KSDiv.getAttribute('qTotal')+"&CorrectNo="+KSDiv.getAttribute('aTotal')+"&LevelNum="+GV.userIOKey[0][1]+"&classnum="+KSDiv.getAttribute('M')+"&R="+KSDiv.getAttribute('R')+"&U="+KSDiv.getAttribute('U'));
		}
		function KS_usersOutput(){
			let blob = new Blob([JSON.stringify(KS_Users)], {type : 'application/json'});
			let link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = '帳號選單.ksu';
			link.click();
			delete link;
		}
		function KS_usersInput(){
			let input = document.createElement('input');
			input.setAttribute('type', 'file');
			input.onchange = function(){
				if(this.files && this.files[0]){
					let reader = new FileReader;
					reader.onload = function(){
						let t = this.result;
						KS_Users = JSON.parse(t);
						KS_reSet_usersSelect();
						delete input;
					}
					reader.readAsText(this.files[0]);
				}
			}
			input.click();
		}
		function KS_phpSend(ksp, ksv, ksf){
			var xmlhttp = new XMLHttpRequest();				
			xmlhttp.open("POST", ksp, true);
			xmlhttp.onreadystatechange=ksf;
			xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xmlhttp.send(ksv);
		}
		function KS_getPoint(){
			let user = window.useraccount ? window.useraccount : ${KSNowUser};
			KS_phpSend(\`https://nssh.kiwi.com.tw/2021_beta/Score/ScoreList.php?U=\$\{user\}\`, '', function(){
				if (this.readyState==4){
					eval('KS_PointScore = ' + this.responseText.split('<script>var score = ')[1].split('</script>')[0].split('score').join('KS_PointScore') +';');
					KS_PointScore['point'] = {'m數寶':point, 'y數寶':T_point, 'm銜接':p_m, 'y銜接':p_t};
					if(document.querySelector('[pid="pGB"]')){
						let pGB = document.querySelector('[pid="pGB"]');
						let pA = ['name', 'qztno', 'correctno', 'qztime', 'posted'];
						for(let i = 0; i < KS_PointScore.name.length; i++){
							let nGridBox = document.createElement('span');
							nGridBox.innerText = i+1;
							pGB.appendChild(nGridBox);
							for(let j = 0; j < 5; j++){
								let sGridBox = document.createElement('span');
								sGridBox.innerText = KS_PointScore[pA[j]][i].split('  ').join(' ');
								pGB.appendChild(sGridBox);
							}
						}
					}
					['m數寶', 'y數寶', 'm銜接', 'y銜接'].forEach(pid => {
						if(document.querySelector(\`[pid=\$\{pid\}]\`)){
							document.querySelector(\`[pid=\$\{pid\}]\`).innerText = KS_PointScore['point'][pid];
						}
					});
				}
			});
		}
		KS_getPoint();
		function KS_ansRobot() {
			for (ansx = 1; ansx <= QV.Qtotal; ansx += 1) {
				QV.MyAns[ansx] = QV.OkAns[ansx]
			}
		}
		function KS_btn3C(tf){
			if(tf){
				document.querySelector('[btnId="btn3"]').setAttribute('oa', 'true');
			}
			else{
				document.querySelector('[btnId="btn3"]').setAttribute('oa', 'false')
			}
		}
		function KS_getAnser(){
			const dqic = function(name){
				if(document.querySelector('iframe') && name in document.querySelector('iframe').contentWindow){
					return document.querySelector('iframe').contentWindow[name];
				}
				else{
					return false;
				}
			}
			const btn3 = document.querySelector('[btnId="btn3"]');
			var kwa = "無法辨識";
			if (dqic('KW_QType') > 0) {
				if (dqic('KW_QType') < 6) {
					var t = "ABCD";
					for(let i = 0; i < 4; i++){
						if (dqic('KW_OkAns')[i+1] == "1") {kwa = t[i]}
					}
				}
				if (dqic('KW_QType') == 6) {
					kwa = [... dqic('KW_OkAns')]
					kwa.shift()
				}
				if (dqic('KW_QType') == 8) {
					kwa = [... dqic('KW_OkAns')]
					kwa.shift()
				}
			}
			if(btn3.getAttribute('kscc') == 'true'){
				if(btn3.getAttribute('oa') == 'true'){
					btn3.style.backgroundColor = '#ffffff';
					btn3.style.backgroundImage = 'none';
					btn3.innerText = kwa;
				}
				else{
					btn3.style.backgroundColor = '#00000000';
					btn3.style.backgroundImage = "url('https://kiwi360360.github.io/kiwiStation/img/btn3.png')";
					btn3.innerText = '';
				}
			}
			else{
				btn3.style.backgroundColor = '#00000044';
				btn3.style.backgroundImage = "url('https://kiwi360360.github.io/kiwiStation/img/btn3.png')";
				btn3.innerText = '';
			}
			if(document.querySelector('[pid="ans"]')){
				document.querySelector('[pid="ans"]').innerText = kwa;
			}
			if(document.querySelector('[pid="num"]')){
				document.querySelector('[pid="num"]').innerText = GV.QuizFileName;
				if(document.querySelector('[pid="num"]').innerText == 'ScoreList' || document.querySelector('[pid="num"]').innerText == ''){
					document.querySelector('[pid="num"]').innerText = '無法辨識';
				}
			}
			if(document.querySelector('[pid="userNow"]')){
				document.querySelector('[pid="userNow"]').innerText = window.useraccount ? window.useraccount : ${KSNowUser};
			}
			if(document.querySelector('[pid="timeLeft"]')){
				document.querySelector('[pid="timeLeft"]').innerText = (Math.floor(LV.TimeLeft/3600)+'時')+(Math.floor(LV.TimeLeft/60)-Math.floor(LV.TimeLeft/3600)*60+'分')+(LV.TimeLeft%60+'秒');
				if(document.querySelector('[pid="timeLeft"]').innerText == 'NaN時NaN分NaN秒'){
					document.querySelector('[pid="timeLeft"]').innerText = '無法辨識';
				}
			}
			if(document.querySelector('[pid="sBv"]')){
				document.querySelector('[pid="sBv"]').innerText = KS_sendB_times;
			}
			setTimeout(() => {KS_getAnser();}, 30);
		}
		KS_getAnser();
		function KS_XMLhttpRobotC(e){
			if(e){
				document.querySelector('[btnId="btn5"]').setAttribute('xmlRobot', 'true');
			}
			else{
				document.querySelector('[btnId="btn5"]').setAttribute('xmlRobot', 'false');
			}
		}
		KS_reSet_usersSelect();
		function KS_addUser(){
			if(document.querySelector('[userid="name"]') && document.querySelector('[userid="pwd"]')){
				if(document.querySelector('[userid="name"]').value.split(' ').join('') !== '' && document.querySelector('[userid="pwd"]').value.split(' ').join('') !== ''){
					KS_Users[document.querySelector('[userid="name"]').value] = document.querySelector('[userid="pwd"]').value;
					KS_reSet_usersSelect();
					alert('新增完成！');
				}
				else{
					if(document.querySelector('[userid="name"]').value.split(' ').join('') === ''){
						alert('新增失敗！\\n(帳號不得為空)');
					}
					if(document.querySelector('[userid="name"]').value.split(' ').join('') === ''){
						alert('新增失敗！\\n(帳號不得為空)');
					}
				}
			}
		}
		function KS_reSet_usersSelect(){
			if(document.querySelector('[selectid="users"]')){
				var usersSelect = document.querySelector('[selectid="users"]');
				usersSelect.innerHTML = '<option value="auto" selected disabled>請選擇已新增的用戶</option>';
				for(let k in KS_Users){
					let o = document.createElement('option');
					o.innerText = k;
					o.value = k;
					usersSelect.appendChild(o);
				}
			}
			KS_setCookie('KS_Users', JSON.stringify(KS_Users));
		}
		function KS_killUser(){
			if(document.querySelector('[selectid="users"]')){
				var usersSelect = document.querySelector('[selectid="users"]');
				if(usersSelect.value === 'auto'){
					alert('刪除失敗！\\n(尚未選擇用戶)');
				}
				else{
					delete KS_Users[document.querySelector('[selectid="users"]').value];
					KS_reSet_usersSelect();
					alert('刪除成功！');
				}
			}
		}
		function KS_fillInUser(){
			if(document.querySelector('[selectid="users"]')){
				var usersSelect = document.querySelector('[selectid="users"]');
				if(usersSelect.value === 'auto'){
					alert('填入失敗！\\n(尚未選擇用戶)');
				}
				else{
					if(document.querySelector('#useraccount')){
						document.querySelector('#useraccount').value = usersSelect.value;
					}
					if(document.querySelector('input[name="pwd"]')){
						document.querySelector('input[name="pwd"]').value = KS_Users[usersSelect.value];
					}
					alert('填入完成！');
				}
			}
		}
		function KS_playSound(type){
			if(type == 'ping'){
				if(LV.ping){LV.ping.play();}
				else{G4C.game.add.audio('ping').play();}
			}
			if(type == 'dot'){
				if(LV.dot){LV.dot.play();}
				else{G4C.game.add.audio('dot').play();}
			}
		}
		function KS_setCookie(k = 'KS_none', v = '', t = 1000*60*60*24*365*100, p = '/'){
			var d = new Date();
			var dgt = d.getTime();
			var et = dgt + t;
			d.setTime(et);
			document.cookie = \`\$\{k\}=\$\{v\};expires=\$\{d.toGMTString()\};path=\$\{p\}\`
		}
	`;
	KSStyle.innerHTML = `
		#KSBox * {
			outline: none;
			color: #000000;
		}
		#KSBox *::selection {
			color: #ffffff;
			background-color: #000000;
		}
		#KSBox input, #KSBox button, #KSBox select, #KSBox option {
			color: #000000;
			background-color: #ffffffff;
			border: 1px outset #222222;
			border-radius: 0.3vw;
		}
		#KSBox input:hover, #KSBox button:hover, #KSBox select:hover {
			color: #000000;
			box-shadow: 0px 0px 0.5vw 0px #000000;
		}
		#KSBox input:focus, #KSBox button:active, #KSBox select:focus, #KSBox option:hover {
			color: #000000;
			background-color: #dddddd;
		}
		#KSDivMM {
			position: fixed;
			top: 0px;
			left: 0px;
			width: 100vw;
			height: 100vh;
			background-color: transparent;
			z-index: 99999999999999;
			display: none;
		}
		#KSMD:active #KSDivMM {
			display: block;
		}
		#KSBox::-webkit-scrollbar {
			display: none;
		}
		#KSBox {
			-ms-overflow-style: none;
		}
		#KSBox {
			overflow: -moz-scrollbars-none;
		}
	`;
	KSMask.appendChild(KSBox);
	document.body.appendChild(KSMask);
	KSDiv.appendChild(KSScript);
	KSDiv.appendChild(KSStyle);
	const KSDivMM = document.createElement('div');
	KSDivMM.setAttribute('id', 'KSDivMM');
	KSMD.appendChild(KSDivMM);
	document.body.appendChild(KSDiv);
	document.body.addEventListener('mousemove', (e) => {
		KSDiv.MX = e.clientX;
		KSDiv.MY = e.clientY;
		if(KSDiv.Move){
			KSDiv.style.left = KSDiv.MX - 0.85*vw() + 'px';
			KSDiv.style.top = KSDiv.MY - 1.5*vw() + 'px';
		}
		if(KSDiv.style.left.replace('px', '') < 0){KSDiv.style.left = '0px'}
		else if(KSDiv.style.left.replace('px', '')-1+KSDiv.offsetWidth+1 > 100*vw()){KSDiv.style.left = 100*vw() - KSDiv.offsetWidth + 'px'}
		if(KSDiv.style.top.replace('px', '') < 0){KSDiv.style.top = '0px'}
		else if(KSDiv.style.top.replace('px', '')-1+KSDiv.offsetHeight+1 > 100*vh()){KSDiv.style.top = 100*vh() - KSDiv.offsetHeight + 'px'}
	});
	KS$$('iframe body').forEach(function(iframe){
		console.log(iframe)
		iframe.addEventListener('mousemove', (e) => {
			e.stopPropagation();
			KSDiv.MX = e.clientX;
			KSDiv.MY = e.clientY;
			if(KSDiv.Move){
				KSDiv.style.left = KSDiv.MX - 0.85*vw() + 'px';
				KSDiv.style.top = KSDiv.MY - 1.5*vw() + 'px';
			}
			if(KSDiv.style.left.replace('px', '') < 0){KSDiv.style.left = '0px'}
			else if(KSDiv.style.left.replace('px', '')-1+KSDiv.offsetWidth+1 > 100*vw()){KSDiv.style.left = 100*vw() - KSDiv.offsetWidth + 'px'}
			if(KSDiv.style.top.replace('px', '') < 0){KSDiv.style.top = '0px'}
			else if(KSDiv.style.top.replace('px', '')-1+KSDiv.offsetHeight+1 > 100*vh()){KSDiv.style.top = 100*vh() - KSDiv.offsetHeight + 'px'}
		});
	});
	KSDiv.addEventListener('mousedown', (e) => {
		e.stopPropagation();
		KSDiv.Move = true;
	});
	document.body.addEventListener('mouseup', (e) => {
		KSDiv.Move = false;
	});
	KSDiv.addEventListener('click', (e) => {
		e.stopPropagation();
	});
	if(KS$('input[name="useraccount"]')){
		KS$('input[name="useraccount"]').addEventListener('change', function(){
			KSDiv.setAttribute('KWUN', this.value)
		});
	}
	if(KS$('input[name="pwd"]')){
		KS$('input[name="pwd"]').addEventListener('change', function(){
			KSDiv.setAttribute('KWUP', this.value)
		});
	}
	function KS_reSize(){
		if(KSDiv){
			KSDiv.style.width = (1.7+2.8*KSBtn.length)*vw()+'px';
			KSDiv.style.height = 3*vw()+'px';
			KSDiv.style.borderRadius = 0.5*vw()+'px';
			KSDiv.style.gridAutoRows = 2.6*vw()+'px';
			KSDiv.style.gridGap = 0.2*vw()+'px';
			KSDiv.style.padding = 0.2*vw()+'px';
			KSDiv.style.gridAutoColumns = 1.3*vw()+'px';
			for(let i = 0; i < KSBtn.length; i++){
				KSDiv.style.gridAutoColumns += ` ${2.6*vw()}px`;
			}
		}
		if(KSMask){
			KSMask.style.width = 100*vw()+'px';
			KSMask.style.height = 100*vh()+'px';
		}
		if(KSBox){
			KSBox.style.width = 80*vw()+'px';
			KSBox.style.height = 80*vh()+'px';
			KSBox.style.margin = 10*vh()+'px auto';
			KSBox.style.borderRadius = 1*vw()+'px';
			KSBox.style.padding = 1*vw()+'px';
		}	
	}
	function reSizer(w, h){
		if(w != 100*vw() || h != 100*vh()){
			KS_reSize();
			w = 100*vw();
			h = 100*vh();
		}
		setTimeout((w, h) => {
			reSizer(w, h);
		}, 30);
	}
	reSizer(100*vw(), 100*vh());
}
//()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
/*
UPDATE score1 SET QuizName1='42m',QzTNo1='20',CorrectNo1='20',Qztime1='09/07/2021  17:03:17',posted1='09/07/2021  17:03:35',anstime1='',QuizName2='41m',QzTNo2='20',CorrectNo2='20',Qztime2='09/07/2021  16:56:14',posted2='09/07/2021  17:02:26',anstime2='',QuizName3='42h',QzTNo3='20',CorrectNo3='20',Qztime3='09/07/2021  16:51:04',posted3='09/07/2021  16:51:08',anstime3='',QuizName4='42h',QzTNo4='20',CorrectNo4='20',Qztime4='08/07/2021  22:23:13',posted4='08/07/2021  22:33:08',anstime4='08/07/2021  22:33:20',QuizName5='41',QzTNo5='20',CorrectNo5='20',Qztime5='08/07/2021  22:22:53',posted5='08/07/2021  22:22:56',anstime5='',QuizName6='41',QzTNo6='20',CorrectNo6='20',Qztime6='08/07/2021  22:22:53',posted6='08/07/2021  22:22:54',anstime6='',QuizName7='44h',QzTNo7='20',CorrectNo7='20',Qztime7='08/07/2021  22:22:01',posted7='08/07/2021  22:22:29',anstime7='',QuizName8='44h',QzTNo8='20',CorrectNo8='20',Qztime8='08/07/2021  22:22:01',posted8='08/07/2021  22:22:27',anstime8='',QuizName9='44h',QzTNo9='20',CorrectNo9='20',Qztime9='08/07/2021  22:22:01',posted9='08/07/2021  22:22:25',anstime9='',QuizName10='44h',QzTNo10='20',CorrectNo10='20',Qztime10='08/07/2021  22:22:01',posted10='08/07/2021  22:22:23',anstime10='',QuizName11='44h',QzTNo11='20',CorrectNo11='20',Qztime11='08/07/2021  22:22:01',posted11='08/07/2021  22:22:21',anstime11='',QuizName12='44h',QzTNo12='20',CorrectNo12='20',Qztime12='08/07/2021  22:22:01',posted12='08/07/2021  22:22:19',anstime12='',QuizName13='44h',QzTNo13='20',CorrectNo13='20',Qztime13='08/07/2021  22:22:01',posted13='08/07/2021  22:22:17',anstime13='',QuizName14='44h',QzTNo14='20',CorrectNo14='20',Qztime14='08/07/2021  22:22:01',posted14='08/07/2021  22:22:15',anstime14='',QuizName15='44h',QzTNo15='20',CorrectNo15='20',Qztime15='08/07/2021  22:22:01',posted15='08/07/2021  22:22:13',anstime15='',QuizName16='44h',QzTNo16='20',CorrectNo16='20',Qztime16='08/07/2021  22:22:01',posted16='08/07/2021  22:22:11',anstime16='',QuizName17='44h',QzTNo17='20',CorrectNo17='20',Qztime17='08/07/2021  22:22:01',posted17='08/07/2021  22:22:09',anstime17='',QuizName18='44h',QzTNo18='20',CorrectNo18='20',Qztime18='08/07/2021  22:22:01',posted18='08/07/2021  22:22:07',anstime18='',QuizName19='44h',QzTNo19='20',CorrectNo19='20',Qztime19='08/07/2021  22:22:01',posted19='08/07/2021  22:22:05',anstime19='',QuizName20='44h',QzTNo20='20',CorrectNo20='20',Qztime20='08/07/2021  22:22:01',posted20='08/07/2021  22:22:03',anstime20='',QuizName21='43h',QzTNo21='20',CorrectNo21='20',Qztime21='08/07/2021  22:20:01',posted21='08/07/2021  22:20:23',anstime21='',QuizName22='42h',QzTNo22='20',CorrectNo22='20',Qztime22='08/07/2021  22:18:30',posted22='08/07/2021  22:20:01',anstime22='',QuizName23='41h',QzTNo23='20',CorrectNo23='19',Qztime23='08/07/2021  22:12:52',posted23='08/07/2021  22:18:16',anstime23='08/07/2021  22:19:30',QuizName24='44h',QzTNo24='20',CorrectNo24='20',Qztime24='01/07/2021  07:53:33',posted24='01/07/2021  08:04:14',anstime24='',QuizName25='43h',QzTNo25='20',CorrectNo25='20',Qztime25='01/07/2021  07:53:30',posted25='01/07/2021  08:04:05',anstime25='',QuizName26='42h',QzTNo26='20',CorrectNo26='20',Qztime26='01/07/2021  07:25:41',posted26='01/07/2021  08:03:56',anstime26='',QuizName27='41h',QzTNo27='20',CorrectNo27='20',Qztime27='01/07/2021  07:32:43',posted27='01/07/2021  08:03:34',anstime27='',QuizName28='512h',QzTNo28='20',CorrectNo28='20',Qztime28='19/06/2021  15:11:40',posted28='19/06/2021  15:37:37',anstime28='',QuizName29='512h',QzTNo29='20',CorrectNo29='20',Qztime29='19/06/2021  15:20:51',posted29='19/06/2021  15:37:00',anstime29='',QuizName30='512h',QzTNo30='20',CorrectNo30='20',Qztime30='19/06/2021  14:58:17',posted30='19/06/2021  15:35:59',anstime30='',QuizName31='512h',QzTNo31='20',CorrectNo31='20',Qztime31='19/06/2021  14:52:57',posted31='19/06/2021  15:34:59',anstime31='',QuizName32='512h',QzTNo32='20',CorrectNo32='20',Qztime32='19/06/2021  15:15:22',posted32='19/06/2021  15:33:59',anstime32='',QuizName33='512h',QzTNo33='20',CorrectNo33='20',Qztime33='19/06/2021  14:50:20',posted33='19/06/2021  15:33:27',anstime33='',QuizName34='512h',QzTNo34='20',CorrectNo34='20',Qztime34='19/06/2021  15:14:32',posted34='19/06/2021  15:32:00',anstime34='',QuizName35='512h',QzTNo35='20',CorrectNo35='20',Qztime35='19/06/2021  14:49:25',posted35='19/06/2021  15:30:59',anstime35='',QuizName36='512h',QzTNo36='20',CorrectNo36='20',Qztime36='19/06/2021  15:06:57',posted36='19/06/2021  15:29:59',anstime36='',QuizName37='512h',QzTNo37='20',CorrectNo37='20',Qztime37='19/06/2021  14:53:11',posted37='19/06/2021  15:29:28',anstime37='',QuizName38='512h',QzTNo38='20',CorrectNo38='20',Qztime38='19/06/2021  15:05:51',posted38='19/06/2021  15:27:59',anstime38='',QuizName39='512h',QzTNo39='20',CorrectNo39='20',Qztime39='19/06/2021  15:01:25',posted39='19/06/2021  15:26:59',anstime39='',QuizName40='512h',QzTNo40='20',CorrectNo40='20',Qztime40='19/06/2021  14:50:30',posted40='19/06/2021  15:26:00',anstime40='' WHERE userID = (SELECT userID FROM user WHERE useraccount = '帳號');
*/