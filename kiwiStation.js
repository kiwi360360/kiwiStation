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
						目前用戶：<span pid="userNow"></span>
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
			KS_phpSend(\`http://kiwi.nssh.ntpc.edu.tw/2021_beta/QBase/[]_System/ScoreList.php?U=\$\{user\}\`, '', function(){
				if (this.readyState==4){
					eval('KS_PointScore = ' + this.responseText.split('<script>var score = ')[1].split('</script>')[0].split('score').join('KS_PointScore'));
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
				}
			});
		}
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
