// Kav.js rights claimed Newtsoft
// Writer: Kavij© Softworks® Since 2016
var kav = {
		len:function (x){return x && x.length || 0;},
		$:function (x, y, z){
			var a = [];
			if(y)
				if(z)
					if(isNaN(z))
						return !1;
					else
					{
						var q = y.querySelectorAll(x);
						for(var i = z; i < kav.len(q); i++)
							a.push(q[i]);
						if(kav.len(a) < 2)
							return a[0];
					}
				else
				{
					a = y.querySelectorAll(x);
					return kav.len(a) > 1 ? a : a[0];
				}
			else
			{
				a = document.querySelectorAll(x);
				return kav.len(a) > 1 ? a : a[0];
			}
		}, isHE:function(x){return x instanceof Element;},
		createHE:function(x){return document.createElement(x);},
		isF:function(x){return x instanceof Function},
		rand:function(x, y){
			var r = Math.floor(Math.random() * y);
			if(r < x) r += x;
			return r;
		}, round:function(x, y){return Math.round(x*Math.pow(10, y||0))/Math.pow(10, y||0);},
		strsa:function(h, f){return h.substr(h.indexOf(f) + f.length);},
		time:function(){return new Date / 1000;},
		instr:function(h, f){return h.indexOf(f) > -1;},
		each:function(a, b){for(var i in a) !isNaN(i) && kav.isF(b) && b(a[i], i);},
		Each:function(a, b){for(var i in a) kav.isF(b) && b(i, a[i]);},
		strjson:function(x){try{return JSON.stringify(x);}catch(e){return null;}},
		jsonfy:function(x){try{return JSON.parse(x);}catch(e){return null;}},
		htmlfy:function(x){
			x = x.replace(/src/g, "xsrc").replace(/href/g, "xhref");
			var e = kav.createHE("html");
			e.innerHTML = x;
			return e;
		}, strlcr:function(h){return h.substr(0, h.length - 1);},
		ucase:function(x){return x.toUpperCase();},
		lcase:function(x){return x.toLowerCase();},
		in_array:function(x, y, z, q){
			function k(x){return (z?x.toLowerCase():x).trim();}
			for(var i in y)
				if(x && y[i] && k(x) == k(y[i]))
					return q?i:!0;
			return !1;
		}, array_rm:function(x, a){
			var r = [];
			for(var i in a)
				i != x && r.push(a[i]);
			return r;
		}, array_rv:function(x){
			var a = [];
			for(var i = x.length - 1; i >- 1; i--)
				a.push(x[i]);
			return a;
		}, array_mv:function(x, z, y){
			if(!len(y) || undefined == x || isNaN(z) || z > len(y)-1)
				return y;
			var t = y, b = kav.in_array(x, y, 1, 1), a = y[z];
			t[z] = x;
			t[b] = a;
			return t;
		}, array_2l: function(x, y){
			var a = [];
			for(var i = 0; i < x.length; i++)
				if(y !== i)
					a.push(x[i]);
			return a.push(x[y]), a;
		}, array_cut:function(arr, pos, len){
			var a = [];
			if(!len){ len = pos; pos = 0; }
			for(var i = pos; i < (arr.length < len ? arr.length : len); i++)
				a.push(arr[i]);
			return a;
		}, array_diff:function(x, y){
			var d = [];
			for(var i in x)
				if(!kav.in_array(x[i], y))
					d.push(x[i]);
			return d;
		}, array_sub:function(x, y){
			var a = [];
			for(var i in x)
				for(var z in y)
					if(x[i] === y[z])
						a.push(x[i]);
			return kav.len(a);
		}, array_merge:function(x, y){
			for(var i in y)
				x.push(y[i]);
			return x;
		}, is_array: function(x){
			return x instanceof Array;
		}, tformat:function (x){
			function F(x, y){y = Math.floor(x);return y < 10 ? "0" + y : y;}
			return F(x / 86400)+":"+F(x / 3600 % 24)+":"+F(x / 60 % 60)+":"+F(x % 60);
		}, Countdown:function(c){
			var tmr = 0, act = 0;
			this.stop = function(){clearInterval(tmr);};
			if(kav.isHE(c.HE2)) c.HE2.html(c.to);
			function loop(){
				if(c.to == act)
				{
					kav.isF(c.onend) && c.onend();
					clearInterval(tmr);
				}
				else act++;
				if(kav.isHE(c.HE1)) c.HE1.html(act);
			}
			tmr = setInterval(loop, 1000);
		}, keys: function(x){
			return Object.keys(x);
		}, gett: function(c){
			return Object.prototype.toString.call(c).replace(/\[(.+) (.+)\]/, "$2");
		}, aliven: function(){
			return navigator.onLine;
		}, bind:function(f, a){
			a = [];
			for(var i in b = arguments)
				!isNaN(i) && i > 0 && a.push(b[i]);
			return function(){
				return f.apply(a);
			};
		}, Version: function(a, b, c, d){
			var c = {major: a||0, minor: b||0, revision: c||0, build: d||Math.floor((new Date() - new Date("11/2/2016 10:38 PM")) / 3600)};
			this.toString = function(){
				return c.major +"."+ c.minor +"."+ c.revision + "." + c.build;
			};
		}, Http:function(c){
			var $ = c.method && "get" !== kav.lcase(c.method), pd = c.upload ? new FormData : "", r = 0, h = new XMLHttpRequest;
			h.open(c.method||"GET", c.url, !0);
			kav.Each(c.headers, function(n, v){
				h.setRequestHeader(n, v);
			});
			function R(x){return c.ri?x.replace(/\[(\d+)\]/g,"[]"):x;}
			if($ && c.upload) kav.Each(c.fields, function(n, v){
				pd.append(R(n), v);
			});
			else if($ && !c.upload)
			{
				kav.Each(c.fields, function(n, v){
					pd += R(n)+"="+escape(v)+"&";
				});
				pd = kav.strlcr(pd);
			}
			$ && !c.upload && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			h.onerror = c.error;
			h.onabort = c.abort;
			h.onprogress = c.progress;
			h.onreadystatechange = function(){
				if(200 !== h.status && kav.isF(c.bad) && !r)
					++r, c.bad(h.status);
				if(c.rs||2 === h.readyState && kav.isF(c.break) && !r)
					++r, c.break(h.status), h.abort();
				else if(200 === h.status && 4 === h.readyState && kav.isF(c.ok) && !r)
					++r, kav.isF(c.ok), c.ok(h.responseText);
			};
			h.send(pd);
		},
		ls: {
			save: function(x, y){
				localStorage[x] = kav.strjson(y);
			},
			get: function(x){
				return kav.jsonfy(localStorage[x])||localStorage[x];
			}
		},
		cookie: {
			set: function(name, value, expires, d){
				d = new Date();
				!isNaN(expires) && d.setTime(d.getTime()+(expires*1e3));
				document.cookie=name+"="+escape(value)+(expires?";expires="+d:"");
			},
			get: function(n, r){
				r = {}, f = document.cookie.split(";");
				for(var i in f)
					if((s = f[i].trim().split("=")).length > 1)
						r[s[0]]=s[1];
				return n?r[n]:r;
			}
		}
};
