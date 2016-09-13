window.onload = function(){
	var list = [
                {
                    id: 1,
                    username: '吴大璇',
                    age: 24,
                    sex: '女'
                },
                {
                    id: 2,
                    username: '索丽',
                    age: 24,
                    sex: '女'
                },
                {
                    id: 3,
                    username: '满满',
                    age: 23,
                    sex: '女'
                },
                {
                    id: 4,
                    username: '显哥',
                    age: 25,
                    sex: '男'
                },
                {
                    id: 5,
                    username: '聂鑫',
                    age: 22,
                     sex: '男'
                },
                {
                    id: 6,
                    username: '杨智博',
                    age: 21,
                    sex: '男'
                },
                {
                    id: 7,
                    username: '张洁',
                    age: 24,
                    sex: '女'
                },
                {
                    id: 8,
                    username: '张晓楠',
                    age: 24,
                    sex: '男'
                },
                {
                    id: 9,
                    username: '薛素娟',
                    age: 24,
                    sex: '女'
                }
            ];
    //删除的二次确定框 遮罩层
    var tip = document.getElementById('tip');
    var bg = document.getElementById('bg');
    //遮罩层的宽 高
    bg.style.width=document.documentElement.clientWidth+'px';
    bg.style.height=document.documentElement.clientHeight+'px';
    //封装二次确认的函数
	function show(str,str2){
		var tip = document.getElementById('tip');
		tip.style.display='block';
		bg.style.display='block';
		var text = document.getElementById('text');
		var sure = document.getElementById('sure');
		var cancel = document.getElementById('cancel');
		var l = (document.documentElement.clientWidth-tip.getBoundingClientRect().width)/2;
		var t = (document.documentElement.clientHeight-tip.getBoundingClientRect().height)/2;
		tip.style.cssText = 'left:'+l+'px;top:'+t+'px';
		p.innerHTML=str;
		text.innerHTML=str2
	} 
    
    //获取元素
    var tab = document.getElementById('tab');
    var tbody = tab.tBodies[0];
    //获取所有input
   	var checkboxNum = tbody.getElementsByTagName('input');
   	//全选
    var chechAll = document.getElementById('checkAll');
    //记录checked状态的num值
    var num2=0;
    for( var i= 0;i<list.length;i++){
    	//建立 tr  td input
    	var tr = document.createElement('tr');
    	var td = document.createElement('td');
    	var checkBox = document.createElement('input');
    	checkBox.type = 'checkbox';
        td.appendChild(checkBox);
        tr.appendChild(td);
        for (var attr in list[i]) {
            var td = document.createElement('td');
            td.innerHTML = list[i][attr];
            tr.appendChild(td);
        }
        //选中事件 选中的数量  选中一个 num++  没有选中的话num--
		checkBox.onclick = function(){
			if(this.checked == true){
				this.parentNode.parentNode.style.backgroundColor='pink'
	    		num++;
	    	} else {
				this.parentNode.parentNode.style.backgroundColor=''
	    		num--;
	    	}
	    	//当num值=input的长度时 全选选中
	    	if(num == checkboxNum.length){
	    		checkAll.checked = true;
	    	} else{
	    		checkAll.checked = false;
	    	}
	    	//记录选中的num值
	    	num2=num
    	}
		//添加 上移 下移 和删除
        var td = document.createElement('td');
        var a = document.createElement('a');
        var prv = document.createElement('span');
        prv.innerHTML='上移';
        var next = document.createElement('span');
        next.innerHTML='下移';
        a.href = 'javascript:;';
        a.innerHTML = '删除';
        //删除事件
        a.onclick = function(){
        	//弹出删除的二次确定
        	show('警告','您确定将所选的文件删除吗');
        	var a = this;
        	//二次确认事件  确认后 删除选中
			sure.onclick = function(){
				tbody.removeChild(a.parentNode.parentNode);
//	        	num = tbody.rows.length;
				tip.style.display='none'
				//删除后 如果选中的num值等于input 的长度时 全选 选中
				if(num2 == checkboxNum.length){
					checkAll.checked = true;
				}
				//删除后 遮罩层去掉
				changeColor();
				bg.style.display='none'
			}
			//取消事件
			cancel.onclick = function(){
				tip.style.display='none';
				bg.style.display='none'
			}
        }
        //上移事件
        prv.onclick = function(){
			var curRow = this.parentNode.parentNode;
			if(curRow.previousElementSibling){
				tbody.insertBefore(curRow,curRow.previousElementSibling);
			}
			changeColor();
		}
        //下移事件
		next.onclick = function(){
			var curRow = this.parentNode.parentNode;
			if(curRow.nextElementSibling){
				tbody.insertBefore(curRow,curRow.nextElementSibling.nextElementSibling);
			}
			changeColor();
		}
        td.appendChild(a);
        td.appendChild(prv);
        td.appendChild(next);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    changeColor()
    //隔行换色函数
    function changeColor(){
    	for (var i = 0; i < tbody.rows.length; i++) {
    		if( i % 2 == 1){
    			tbody.rows[i].className= "color";
    		} else {
    			tbody.rows[i].className= "color2";
    		}
    	}
    }
    
	
	var form1 = document.getElementById("form1");
    var username = form1.username;
    var Age = form1.age;
    var sex = form1.sex;
    var userId = list.length;
    var num = 0;
    var dateSub = form1.dateSub;
    var numSub = form1.num_sub;
    var searchSub = form1.searchSub;
    var search = document.getElementById("search");
    dateSub.onclick = function(){
    	if(username.value==''||Age.value==''){
    		alert('请输入添加内容')
    		return
    	}
    	if(isNaN(Age.value)||Number(Age.value)<0){
    		alert('请输入正确年龄')
    		return
    	}
    	userId++;
    	var tr = document.createElement("tr");
    	var td = document.createElement("td");
    	var checkBox = document.createElement("input");
    	checkBox.setAttribute("type","checkbox");
    	checkBox.onclick = function(){
			if(this.checked == true){
				this.parentNode.parentNode.style.backgroundColor='pink'
	    		num++;
	    	} else {
	    		this.parentNode.parentNode.style.backgroundColor='';
	    		num--;
	    	}
	    	if(num == checkboxNum.length){
	    		checkAll.checked = true;
	    	} else{
	    		checkAll.checked = false;
	    	}
	    	num2=num
    	}
    	td.appendChild(checkBox);
    	tr.appendChild(td);	
    	
    	list.push({
    		id:userId,
    		username: username.value,
            age: Age.value,
            sex: sex.value,
    	})
    	var i = list.length - 1;
    	for (var keys in list[i]) {
            var td = document.createElement('td');
            td.innerHTML = list[i][keys];
            tr.appendChild(td);
        }
    	
    	var td = document.createElement("td");
        var a = document.createElement('a');
        var prv = document.createElement('span');
        prv.innerHTML='上移';
        var next = document.createElement('span');
        next.innerHTML='下移';
        a.href = 'javascript:;';
        a.innerHTML = '删除';
        a.onclick = function(){
			show('警告','您确定将所选的文件删除吗');
        	var a = this;
			sure.onclick = function(){
				tbody.removeChild(a.parentNode.parentNode);
	        	num = tbody.rows.length;
				tip.style.display='none'
				if(num2 == checkboxNum.length){
					checkAll.checked = true;
				}
				changeColor();
				bg.style.display='none'
			}
			cancel.onclick = function(){
				tip.style.display='none';
				bg.style.display='none'
			}
		}
        changeColor();
        prv.onclick = function(){
			var curRow = this.parentNode.parentNode;
			if(curRow.previousElementSibling){
				tbody.insertBefore(curRow,curRow.previousElementSibling);
			}
			changeColor();
			}
		next.onclick = function(){
			var curRow = this.parentNode.parentNode;
			if(curRow.nextElementSibling){
				tbody.insertBefore(curRow,curRow.nextElementSibling.nextElementSibling);
			}
			changeColor();
		}
		td.appendChild(a);
        td.appendChild(prv);
        td.appendChild(next);
        tr.appendChild(td);
        tbody.appendChild(tr);
        if(num2 == checkboxNum.length){
    		checkAll.checked = true;
    	} else{
    		checkAll.checked = false;
    	}
        changeColor();
    }
    //按照类别搜索的函数
    function fond(num){
     	for( var i=0;i<list.length;i++){
    			tbody.rows[i].style.backgroundColor = "";
    			tbody.rows[i].cells[0].children[0].checked=false
	    		for(var j=1;j<5;j++){
	    			if(tbody.rows[i].cells[num].innerHTML.indexOf(search.value)!=-1){
	    				tbody.rows[i].style.backgroundColor = "red";
	    				tbody.rows[i].cells[0].children[0].checked=true;
	     			}
	    		}
	    	}
     }
    searchSub.onclick = function(){
    	if(search.value==''){
			alert('请输入要搜索的内容')
			return
		}
    	if(form1.sou.value=='编号'){
			fond(1)
    	}
    	if(form1.sou.value=='姓名'){
			fond(2)
    	}
    	if(form1.sou.value=='年龄'){
			fond(3)
    	}
    	if(form1.sou.value=='性别'){
			fond(4)
    	}
    	
    }
    //排序事件
    numSub.onclick = function(){
    	if(form1.ID.value=='编号'){
    		for( var i=0;i<tbody.rows.length;i++){
    			for(var j=0;j<tbody.rows.length - 1 - i;j++){
    				if(form1.order.value=='降序'){
    					console.log(parseFloat(tbody.rows[j].cells[1].innerHTML),parseFloat(tbody.rows[j+1].cells[1].innerHTML))
   	    				if(parseFloat(tbody.rows[j].cells[1].innerHTML)<parseFloat(tbody.rows[j+1].cells[1].innerHTML)){
	    					tbody.insertBefore(tbody.rows[j+1],tbody.rows[j])
	    				}
	    			}
    				if(form1.order.value=='升序'){
   	    				if(parseFloat(tbody.rows[j].cells[1].innerHTML)>parseFloat(tbody.rows[j+1].cells[1].innerHTML)){
	    					tbody.insertBefore(tbody.rows[j+1],tbody.rows[j])
	    				}
	    			}
    			}
    		}
    	}
    	if(form1.ID.value=='年龄'){
    		for( var i=0;i<tbody.rows.length;i++){
    			for(var j=0;j<tbody.rows.length - 1 - i;j++){
    				if(form1.order.value=='降序'){
   	    				if(parseFloat(tbody.rows[j].cells[3].innerHTML)<parseFloat(tbody.rows[j+1].cells[3].innerHTML)){
	    					tbody.insertBefore(tbody.rows[j+1],tbody.rows[j])
	    				}
	    			}
    				if(form1.order.value=='升序'){
   	    				if(parseFloat(tbody.rows[j].cells[3].innerHTML)>parseFloat(tbody.rows[j+1].cells[3].innerHTML)){
	    					tbody.insertBefore(tbody.rows[j+1],tbody.rows[j])
	    				}
	    			}
    			}
    		}
    	}
    	changeColor();
    }
    //全选 事件
    checkAll.onclick = function(){
    	for (var i = 0; i < checkboxNum.length; i++) {
    		if(checkAll.checked){
    			checkboxNum[i].checked = true;
    			tbody.rows[i].style.backgroundColor = "pink";
    			num = checkboxNum.length;
    		} else {
    			checkboxNum[i].checked = false;
    			num = 0;
    			tbody.rows[i].style.backgroundColor = "";
    			changeColor();
    			
    		}
    	}
    }
}