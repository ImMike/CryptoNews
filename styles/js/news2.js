$(document).ready(function initialize() {
	//var cointelegraph = 	"https://cointelegraph.com/rss";
	var cointelegraph = 	"https://cointelegraph.com/feed";
	var coindesk= 		"https://www.coindesk.com/feed/";
	var bitcoinmagazine= 	"https://bitcoinmagazine.com/feed/";
	var themerkle = 		"http://themerkle.com/feed/";
	var newsbtc = 		"http://www.newsbtc.com/feed/";
	var livebitcoinnews = "http://www.livebitcoinnews.com/feed/";
	var allcoinsnews = 	"http://allcoinsnews.com/feed/";
	var btcmanager = 		"https://btcmanager.com/feed/";
	var theblockchain = 	"http://www.the-blockchain.com/feed/";
	var coinspeaker = 	"https://www.coinspeaker.com/feed/";
	var cryptocoinsnews = "https://www.cryptocoinsnews.com/feed/";
	var ethnews = 		"https://www.ethnews.com/rss.xml";

	var bitcoinreddit = 		"https://www.reddit.com/r/Bitcoin/.rss";
	var cryptoreddit = 		"https://www.reddit.com/r/cryptocurrency/.rss";
	var btcreddit = 		"https://www.reddit.com/r/btc/.rss";
	var etherreddit = 		"https://www.reddit.com/r/ethereum/.rss";
	var feedlength=10;

	

	/*
	//var feeds=[cointelegraph,coindesk,bitcoinmagazine,themerkle,newsbtc,livebitcoinnews,allcoinsnews,btcmanager,theblockchain,coinspeaker,cryptocoinsnews,ethnews];
	var feeds=[cointelegraph];
	//for(var count=0; count < feeds.length ; count++)
	//{
	var count = 0;
	while( count < feeds.length)
	{	
		
		//feednami.load(feeds[count],function(result)
		feednami.load(feeds[count],function(result) 
		{
			var containername="feed"+count;
			console.log(containername);
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById(containername);
		          //var container = document.querySelector('#containername');
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById(containername);
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            date.innerHTML="<br>"+entry.publishedDate;

		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);
          		}
          		console.log(container);
     		}
      	});
      	//while loop end
      	count++;
  	}
  	*/


		
		feednami.load(cointelegraph,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed1");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed1");
		        //CARD SHIT
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;

		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();

		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);

		            //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE




          		}
          		console.log(container);
     		}
      	});


      	feednami.load(coindesk,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed2");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed2");
		         var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');
		            console.log(entry);
		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);



		            //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/coindeskcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }


                   
                  


		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE




          		}
          		console.log(container);
     		}
      	});

      	feednami.load(bitcoinmagazine,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed3");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed3");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		           
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);


		            	 //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE


          		}
          		console.log(container);
     		}
      	});

      	feednami.load(themerkle,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed4");
		         
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed4");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();

		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);


		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE


          		}
          		console.log(container);
     		}
      	});

      	feednami.load(newsbtc,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed5");
		          
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed5");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();

		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);


		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE
          		}
          		console.log(container);
     		}
      	});

      	feednami.load(livebitcoinnews,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed6");
		        
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed6");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		           
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);



		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE
          		}
          		console.log(container);
     		}
      	});
      	
feednami.load(allcoinsnews,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed7");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed7");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);



		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE
          		}
          		console.log(container);
     		}
      	});

feednami.load(btcmanager,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed8");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed8");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);


		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE
          		}
          		console.log(container);
     		}
      	});

feednami.load(theblockchain,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed9");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed9");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);


		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE
          		}
          		console.log(container);
     		}
      	});  	

feednami.load(coinspeaker,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed10");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed10");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);

		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE
          		}
          		console.log(container);
     		}
      	});

feednami.load(cryptocoinsnews,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed11");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed11");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);


		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE
          		}
          		console.log(container);
     		}
      	});

feednami.load(ethnews,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed12");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed12");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);


		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE
          		}
          		console.log(container);
     		}
      	});

feednami.load(bitcoinreddit,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed13");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed13");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);


		             //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE //CARD SHIT BEGINS HERE
		            var information= entry.description;
		            var imglink="\"styles/css/img/cointelegraphcard.jpg";

		            if(entry.description.includes("<img")){

		            s = "src=";
                    ix = entry.description.indexOf(s)+s.length;
                    imglink=entry.description.substring(ix, entry.description.indexOf('\"', ix+1));
                    imgLink = entry.description.match(/<img[^>]*>/g);
                    information = entry.description.replace(/<img[^>]*>/g,"");
		            }

		            container2.innerHTML=container2.innerHTML+"<li style='background:url("+imglink+"\"); background-repeat: no-repeat; background-size: 336px 280px;' class=\"RSScard\"><div class=dsg34><p><h4>" 
                    + "<a href=\"" + entry.link + "\" target=\"_blank\">" + entry.title.substring(0,500) + "</a>" 
                    + "</h4></p>"
                    +"<a href=\"" + entry.link + "\" target=\"_blank\">" 
                    + "</a></p>"+ "<div class='time'>" +d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString() +"</div>"+information.substring(0,500)+""
                    
                    + ""+"</div></div></li>";
		            //CARD SHIT ENDS HERE
          		}
          		console.log(container);
     		}
      	});

feednami.load(cryptoreddit,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed14");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed14");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);
          		}
          		console.log(container);
     		}
      	});



feednami.load(btcreddit,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed15");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed15");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);
          		}
          		console.log(container);
     		}
      	});

feednami.load(etherreddit,function(result) 
		{
			if (result.error){
		          console.log(result.error);
		          console.log("bad");
		          var container = document.getElementById("feed16");
		          var title=document.getElementById("title1");
		          container.style.display = 'none';
		          title.style.display = 'none';
		        }

		    if (!result.error) 
		    {
		        var container = document.getElementById("feed16");
		        var container2 = document.getElementById("cards");
		        for (var i = 0; i < feedlength; i++)
		        {
		        	var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            var anchor=document.createElement("a");
		            var date=document.createElement("small");
		            var hzRule = document.createElement('hr');

		            anchor.innerHTML=entry.title;
		            anchor.href=entry.link;
		            
		            var d = new Date(entry.pubDate);
					

		            date.innerHTML="<br>"+d.toLocaleDateString().replace(/\//g,'-')+" "+d.toLocaleTimeString();
		            div.appendChild(anchor);
		            div.appendChild(date);   
		            div.append(hzRule);

		            container.appendChild(div);
          		}
          		console.log(container);
     		}
      	});

});


 

