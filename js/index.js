window.onload=function(){
	var pics=document.getElementById('pic').getElementsByTagName('li');
	var ans=document.getElementById('an').getElementsByTagName('li');
	ans[0].style.background='#0653b6';
	var c=0;

	function h_slide(){
		c++;
		if(c==pics.length){c=0;}
		for(var i=0; i<pics.length; i++){
			pics[i].style.display='none';
			ans[i].style.background='black';
		}
		pics[c].style.display='block';
		ans[c].style.background='#0653b6';	
	}

	var timer=setInterval(h_slide,3000);

	for(var j=0; j<pics.length; j++){
		ans[j].index=j;
		ans[j].onmouseover=function(){
			index=this.index;
			clearInterval(timer);
			for(var k=0; k<ans.length; k++){
				pics[k].style.display='none';
				ans[k].style.background='black';
			}
			pics[index].style.display='block';
			ans[index].style.background='#0653b6';
		}

		ans[j].onmouseout=function(){
			timer=setInterval(h_slide,3000);
		}
	}

	var playpause = function () {
		if (player.paused) {
		  player.play();
		} else {
		  player.pause();
		}
	  }
	  playbtn.addEventListener("click", playpause);
	  
	var aboutBtn=document.getElementById('aboutBtn');
	var contactBtn=document.getElementById('contactBtn');
	var priceBtn=document.getElementById('priceBtn');
	var usBtn=document.getElementById('usBtn');
	var fuelBtn=document.getElementById('fuelBtn');



	var showAbout=document.getElementById('showFuel');
	var closeAbout=document.getElementById('closeFuel');

	var showAbout=document.getElementById('showPrice');
	var closeAbout=document.getElementById('closePrice');
	  
	var showAbout=document.getElementById('showAbout');
	var closeAbout=document.getElementById('closeAbout');
	  
	var showContact=document.getElementById('showContact');
	var closeContact=document.getElementById('closeContact');
	  

	fuelBtn.onclick=function(){
		showFuel.style.display='block';
	};
	  
	closeFuel.onclick=function(){
		showFuel.style.display='none';
	};


	aboutBtn.onclick=function(){
		showAbout.style.display='block';
	};
	  
	closeAbout.onclick=function(){
		showAbout.style.display='none';
	};

	  
	contactBtn.onclick=function(){
		showContact.style.display='block';
	};
	  
	closeContact.onclick=function(){
		showContact.style.display='none';
	};

	

	priceBtn.onclick=function(){
		showPrice.style.display='block';
	};
	  
	closePrice.onclick=function(){
		showPrice.style.display='none';
	};
}
