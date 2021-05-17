// (function(){
	var detla = 0;
	var detlaX = 0;
	var eTarget = null;
	var pageX = 0;
	var pageY = 0;
	
	var clientHeight;
	var arrowTimeout;
	
	document.addEventListener('readystatechange',function(e){
		
		if(document.cookie == 'true')
			document.getElementById('p2').style.display = 'block';
		document.getElementById('p2').style.animationPlayState = "running";
	})
	window.onload = function(){
		
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}
		document.cookie = 'false';
		document.getElementById('titleText').style.animationPlayState = "running";
		clientHeight = document.getElementById('context').clientHeight;
		//document.getElementById('context').style.transform = "translate(0px,"+1000+"px)";
		
		clearTimeout(arrowTimeout);
		arrowTimeout = setTimeout(function(){
			document.getElementById('arrow_box').style.display = "block";
		},3000);
	}
	
	//滚路事件。	
	document.addEventListener('mousewheel',function(e){
		detla+=(e.wheelDelta/3);
		if(detla>0)
			detla = 0;
		if(detla<=-clientHeight+500)
			detla = -clientHeight+500;
			
		document.getElementById('arrow_box').style.display = "none";
		clearTimeout(arrowTimeout);
		arrowTimeout = setTimeout(function(){
			document.getElementById('arrow_box').style.display = "block";
		},3000);
		if(e.wheelDelta>0 && detla<=-600)
			document.getElementsByClassName('nav')[0].style.transform = "translate(0px,"+-100+"%)";
		else
			document.getElementsByClassName('nav')[0].style.transform = "translate(0px,"+0+"%)";
		
		console.log(detla);
		
		if(detla<=-1550){
			showEle(5);
		}else if(detla <= -1000){
			showEle(4);
		}else if(detla <= -480){
			showEle(3);
		}else if(detla <= -300){
			showEle(2);
		}else if(detla <= -120){
			showEle(1);
		}
		
		if(detla<=-4800){
			document.getElementsByClassName('copy1')[0].style.bottom = 0;
		}else{
			document.getElementsByClassName('copy1')[0].style.bottom = -100+'%';
		}
	})
	
	function showEle(index){
		if(index == 1){
			document.getElementsByClassName('main1-1')[0].style.animationPlayState = "running";	
			document.getElementsByClassName('main1-2')[0].style.animationPlayState = "running";
		}else if(index == 2){
			document.getElementsByClassName('main1-3')[0].style.animationPlayState = "running";
			document.getElementsByClassName('main1-4')[0].style.animationPlayState = "running";
		}else if(index == 3){
			document.getElementsByClassName('main1-4a')[0].style.animationPlayState = "running";
			document.getElementsByClassName('main1-4b')[0].style.animationPlayState = "running";
		}else if(index == 4){
			document.getElementsByClassName('fgx1')[0].style.animationPlayState = 'running';
		}else if(index == 5){
			document.getElementsByClassName('main3a')[0].style.animationPlayState = 'running';
			document.getElementsByClassName('main3b')[0].style.animationPlayState = 'running';
		}
		
	}
	
	//标题按钮点击事件，控制页面下滑到下一版块.
	document.getElementById('tittleBtn').addEventListener('click',function(e){
		// document.getElementById('context').style.transform = "translateY("+1000+"px)";
		// console.log(document.getElementById('context').style.transform);
		// detla += -770;
		setTimeout(function(){
			detla+=-20;
			if(detla>=-700)
			setTimeout(arguments.callee,30);
			else{
				detla = -700;
				showEle(1);
				showEle(2);
				showEle(3);
			}
		})
		
	});
	
	//下滑提示div，控制页面下滑至下一版块。
	document.getElementById('arrow_box').addEventListener('click',function(e){
		// var selid = 0;	//可滑动到底部时点击回到顶部。
		var selid;
		if(detla> -700){
			selid = -700;
			// detla = -700;
			setTimeout(function(){
				showEle(1);
				showEle(2);
				showEle(3);
			},200);
			
		}else if(detla>-1412){
			selid = -1412;
			// detla = -1412;
			setTimeout(function(){
				showEle(4);
			},300);
		}else if(detla > -2340){
			// detla = -2340;
			selid = -2340
			setTimeout(function(){
				showEle(5);
			},300);
		}else if(detla > -3760){
			// detla = -3760;
			selid = -3760;
		}else if(detla > -4600){
			// detla = -4600;
			selid = -4600;
		}
		setTimeout(function(){
			detla+=-20;
			if(detla>=selid)
			setTimeout(arguments.callee,30);
			else{
				detla = selid;
			}
		})
	});
	
	//点击导航栏左上角回到顶部。
	document.getElementsByClassName('nav-1')[0].addEventListener('click',function(e){
		detla = 0;
// 		setTimeout(function(){
// 			detla+=20;
// 			if(detla<=0)
// 			setTimeout(arguments.callee,30);
// 			else{
// 				detla = 0;
// 			}
// 		})
		
	});
	
	//对文字与图片翻转的控制。
	document.getElementsByClassName('main2')[0].addEventListener('click',function(e){
		if(e.target.className == 's2')
			e.target.parentElement.style.transform = "rotateY(0deg)";
		else if(e.target.className == 'backImg_a')
			e.target.parentElement.parentElement.style.transform = "rotateY(180deg)";
	});
	
	//对横向页面滑动的控制。
	var interval;
	document.getElementsByClassName('main4-2a')[0].addEventListener('click',function(e){
		if(e.target.className == 'main4_img' || e.target.className == 'main4-2c'){
			// document.getElementsByClassName('main4-2a')[0].style.left = e.target.dataset.left+'px';
			document.getElementsByClassName('main4-2a')[0].style.transform = "translateX("+e.target.dataset.left+"px)";
			document.getElementsByClassName('main4-3a')[0].style.width = e.target.dataset.index*15+"%";
			document.getElementsByClassName('hond')[0].style.transform = "rotate("+e.target.dataset.index*50+"deg)";
			if(interval)
				clearInterval(interval);
			interval = 	setInterval(function(){
				if(parseInt(document.getElementsByClassName('bar_num')[0].innerHTML) < e.target.dataset.index*20){
					document.getElementsByClassName('bar_num')[0].innerHTML = (parseInt(document.getElementsByClassName('bar_num')[0].innerHTML)+1)+"%";
				}else if(parseInt(document.getElementsByClassName('bar_num')[0].innerHTML) > e.target.dataset.index*20){
					document.getElementsByClassName('bar_num')[0].innerHTML = (parseInt(document.getElementsByClassName('bar_num')[0].innerHTML)-1)+"%";
				}else{
					clearInterval(interval);
				}
			},25);
			document.getElementsByClassName('main4_container')[e.target.dataset.index-1].style.transform = "scale(1.0,1.0)";
			// console.log(document.getElementsByClassName('main4_container')[e.target.dataset.index-1]);
			// e.target.style.transform = "scale(1.05,1.05)";
			
			// eTarget = e.target;
			if(eTarget && e.target.dataset.index == eTarget.firstChild.firstChild.dataset.index){
				// window.location.href = 
			 }else{
				e.preventDefault(); 
			 }
				
			//此处保存点击图片元素的父对象，用以进行缩放。
			eTarget = document.getElementsByClassName('main4_container')[e.target.dataset.index-1];
		}else{
			if(interval)
				clearInterval(interval);
			interval = 	setInterval(function(){
				if(parseInt(document.getElementsByClassName('bar_num')[0].innerHTML) > 0){
					document.getElementsByClassName('bar_num')[0].innerHTML = (parseInt(document.getElementsByClassName('bar_num')[0].innerHTML)-1)+"%";
					document.getElementsByClassName('main4-3a')[0].style.width = 0+"%";
				}else{
					clearInterval(interval);
				}
				
			},500/parseInt(document.getElementsByClassName('bar_num')[0].innerHTML));
		}
	})
	document.getElementsByClassName('main4-2a')[0].addEventListener('mouseup',function(e){
		if(eTarget)
			eTarget.style.transform = "scale(0.9,0.9)";
	});
	
	//对左侧div点击滑动控制.
	document.getElementById('login').addEventListener('mouseover',function(e){
		detlaX = 400;
		document.getElementById('user').style.left = 0+"%";
		e.target.style.transform = "translate(400px,0px)";
	})
	document.getElementById('user').addEventListener('mouseleave',function(e){
		detlaX = 0;
		document.getElementById('user').style.left = -30+"%";
		document.getElementById('login').style.transform = "translate(0px,0px)";
	})
	document.getElementsByClassName('container')[0].addEventListener('mouseleave',function(e){
			if(pageX>360){
				detlaX = 0;
				document.getElementById('user').style.left = -30+"%";
				document.getElementById('login').style.transform = "translate(0px,0px)";			
			}
	})
	
	document.getElementById('exitLogin').addEventListener('click',function(e){
		document.getElementsByClassName('container')[0].style.display = "block";
		document.getElementById('menuContainer').style.display = "none";
	})
	document.getElementById('dl').addEventListener('click',function(e){
		document.getElementsByClassName('container')[0].style.display = "none";
		document.getElementById('menuContainer').style.display = "block";
	})
	//对导航栏点击切换页面动画控制。
	document.getElementsByClassName('nav')[0].addEventListener('click',function(e){
		e.preventDefault();
		if(e.target.className == 'nav_a'){
			document.getElementById('p').style.animationPlayState = "running";
			setTimeout(function(){
				window.location.href = e.target.parentElement.href;
			},400);
		}
	})
	
	//获取鼠标相对页面的位置信息
	document.onmousemove = function(e){
		pageX = e.pageX;
		pageY = e.pageY;
	}
	
	//js动画：跟随鼠标指针移动及下滑动画效果。
	function move(){
		document.getElementById('cursor2').style.transform = "translate("+(pageX-23)+"px,"+(pageY-242)+"px)";
		document.getElementById('context').style.transform = "translate("+detlaX+"px,"+detla+"px)";
		window.requestAnimationFrame(move);
	}
	window.requestAnimationFrame(move);
	// })();
	