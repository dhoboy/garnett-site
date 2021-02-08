(this["webpackJsonpgarnett-client"]=this["webpackJsonpgarnett-client"]||[]).push([[0],{36:function(e,a,t){e.exports=t.p+"static/media/garnett.1a4f65bb.jpg"},40:function(e,a,t){e.exports=t(72)},45:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t.n(l),s=(t(45),t(5)),i=t(13),c=function(){var e=Object(n.useRef)(null),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){var t=window.innerWidth>768?110:90;window.pageYOffset>t?(e.current.style="opacity: 0",a.current.style="opacity: 1; display: block"):(e.current.style="opacity: 1",a.current.style="opacity: 0; display: none")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:a,className:"smallHeader"},r.a.createElement("h1",null,"Garnett Mellen")),r.a.createElement("div",{ref:e,className:"largeHeader"},r.a.createElement("h1",null,"Garnett Mellen"),r.a.createElement("h2",null,"Strength / Vigor / Health")))},m=function(e){var a=e.display,t=e.path;return r.a.createElement("li",{className:"menu-bar-item"},r.a.createElement(i.b,{activeClassName:"current",title:a,to:t},a))},d=function(){return r.a.createElement("ul",{className:"menu-bar"},r.a.createElement(m,{display:"News",path:"/news"}),r.a.createElement(m,{display:"Bio",path:"/bio"}),r.a.createElement(m,{display:"How I Work",path:"/how-i-teach"}),r.a.createElement(m,{display:"ACAC",path:"/acac"}),r.a.createElement(m,{display:"Testimonial",path:"/testimonials"}),r.a.createElement(m,{display:"Contact",path:"/contact"}))},u=t(33),h=t(34),p=t(39),f=t(38),g=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(h.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h2",{className:"error"},this.props.message||"Something went wrong! Please try again later!"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component),b=t(2),y=t(3),E=t(35),v=t.n(E).a.create({baseURL:"http://garnettmellen.com/wp-json/wp/v2"}),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.page,t=void 0===a?1:a;return function(e,a){var n=a().api.news,r=void 0===n?{}:n;return v.get("/posts?categories=".concat(r.id,"&_embed&page=").concat(t))}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.page,t=void 0===a?1:a;return function(e){e({type:"GET_NEWS_FETCHING",payload:{page:t}}),e(w({page:t})).then((function(a){console.log("resp: ",a),e({type:"GET_NEWS_SUCCESS",payload:{data:a.data,page:t}})})).catch((function(a){e({type:"GET_NEWS_ERROR",payload:{error:a}})}))}},I=function(e){var a,t,n,l,o,s,i,c,m=e.date,d=void 0===m?"":m,u=e.content,h=void 0===u?{}:u,p=e.title,f=void 0===p?{}:p,b=e._embedded,y=void 0===b?{}:b,E=(null===y||void 0===y||null===(a=y["wp:featuredmedia"])||void 0===a||null===(t=a[0])||void 0===t||null===(n=t.media_details)||void 0===n||null===(l=n.sizes)||void 0===l||null===(o=l.full)||void 0===o?void 0:o.source_url)||"",v=(null===(s=d.split("T"))||void 0===s||null===(i=s[0])||void 0===i?void 0:i.split("-"))||[],w=3===v.length?"".concat(v[1],"/").concat(v[2],"/").concat(v[0]):"";return r.a.createElement("div",{className:"news-card"},r.a.createElement(g,{message:"Unable to load News Card"},r.a.createElement("h2",{className:"title"},r.a.createElement("span",null,f.rendered||""),r.a.createElement("span",null,w)),E&&r.a.createElement("div",{className:"featured-image",style:{backgroundImage:"url(".concat(E,")")}}),r.a.createElement("div",{dangerouslySetInnerHTML:(c=h.rendered||"",{__html:c})})))},k=function(e){var a=e.loading,t=void 0!==a&&a,n=e.error,l=void 0!==n&&n,o=e.children;return t?r.a.createElement("div",{className:"loading"},r.a.createElement("i",{className:"fas fa-spinner"})):l?r.a.createElement("h2",{className:"error"},"Oh No! Can't load News right now. Please try again later!"):o},O=function(){var e=Object(s.c)(),a=Object(s.d)((function(e){return e.api.initialized})),t=Object(s.d)((function(e){return e.news.page})),l=Object(s.d)((function(e){var a;return(null===(a=e.api.news)||void 0===a?void 0:a.totalPages)||1})),o=Object(s.d)((function(e){return e.news.loading})),i=Object(s.d)((function(e){return e.news.error})),c=Object(s.d)((function(e){return e.news.data}),s.b),m=Object(s.d)((function(e){return e.news.loadMore}));Object(n.useEffect)((function(){a&&!c.length&&e(N())}),[e,a,c]);return r.a.createElement("div",{className:"news"},r.a.createElement(k,{loading:o,error:i},c.map((function(e){return r.a.createElement(I,Object.assign({key:e.id},e))})),t<l&&r.a.createElement(k,{loading:m},r.a.createElement("p",{className:"load-more"},r.a.createElement("span",{onClick:function(){e(N({page:t+1}))}},"Load More")))))},A=t(36),C=t.n(A),T=function(){return r.a.createElement("div",{className:"bio"},r.a.createElement("div",{className:"photo",style:{backgroundImage:"url(".concat(C.a,")")}}),r.a.createElement("h2",null,"Eleanor GARNETT Mellen"),r.a.createElement("p",{className:"blurb"},"Garnett is an ACE Personal Trainer and teaches Yoga, Pilates, Qigong and American Waltz. People who strive for vigor, strength and robust health find her training sessions both enlivening, while they quiet the nervous system. For those who have elevated blood sugar and who want to avoid developing Type II Diabetes, she draws upon her CDC Lifestyle Coach certification to safely guide weight loss. In her sessions Garnett emphasizes posture and balance drawing upon her extensive trainings in the Alexander Technique. Prior to moving into the fitness field, Garnett worked as a landscape designer/environmental planner. She has a Bachelors Degree from the University of Virginia and a Masters in Landscape Architecture from Virginia Tech. She can help you plan and cultivate your health."))},j=function(){return r.a.createElement("div",{className:"how-teach"},r.a.createElement("p",{className:"blurb"},r.a.createElement("span",null,"Intro"),"Do you strive to be more active physically and feel confident in your ability to move different parts of your body safely, smoothly and efficiently? If so, you will benefit from my work, which is a synthesis of multiple disciplines, including Alexander Technique, personal training, Pilates, Yoga, Qi Gong, and even waltz."),r.a.createElement("p",{className:"blurb"},"The Alexander practice is my foundation. I became an AmSAT certified Alexander Technique teacher at the Alexander Technique Training Center in Charlottesville in 2012. I blend in the other disciplines to suit individual client needs and desires to explore exercising safely and with confidence."),r.a.createElement("p",{className:"blurb"},"You can take a series Alexander Technique lessons, explore personal training, or both."),r.a.createElement("p",{className:"blurb"},"I teach online using one of the currently available meeting platforms, and also in-person, observing the appropriate COVID safety precautions."),r.a.createElement("p",{className:"blurb"},"Through an initial discussion, we will talk about which type of services would serve you best, what length sessions to schedule, and where to meet."),r.a.createElement("p",{className:"blurb"},r.a.createElement("span",null,"When you are ready to have this discussion:"),"Contact me at garnettmellen@gmail.com or call my work cell phone at 434-260-7794."),r.a.createElement("p",{className:"blurb"},r.a.createElement("span",null,"How long are lessons/sessions?"),"Alexander Technique lessons are usually 45 minutes. The personal training sessions through ACAC are either 30 or 60 minute."),r.a.createElement("p",{className:"blurb"},r.a.createElement("span",null,"Package rates?"),"The costs vary depending on how many times you would like to meet. I can send a rate sheet upon request."),r.a.createElement("p",{className:"blurb"},r.a.createElement("span",null,"A Brief Note"),"To begin working together, there is a very short questionnaire I will ask you to complete prior to our first meeting. I will also ask you about your current level of health so that I can customize the program to your needs."))},x=function(){return r.a.createElement("div",{className:"acac"},r.a.createElement("p",{className:"blurb"},"I work through ACAC Fitness and Wellness Centers of Charlottesville, but you don\u2019t have to be a member to work with me. I can either meet you online or in person at one of the local gyms."),r.a.createElement("p",{className:"blurb"},"Contact me and let\u2019s connect. Follow ",r.a.createElement("a",{href:"https://acac.com/eleanormellen/",target:"_blank",rel:"noopener noreferrer"},"this link")," to get to my ACAC page and send me a message!"))},G=function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-phone"}),"Phone: (434) 260-7794"),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-envelope"}),"Email: garnettmellen@gmail.com"),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{class:"fab fa-instagram"}),r.a.createElement("span",null,"Instagram: ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/strengthvigorvitality/"},"instagram.com/strengthvigorvitality/"))),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{class:"fas fa-walking"}),r.a.createElement("span",null,"ACAC: ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://acac.com/eleanormellen/"},"acac.com/eleanormellen/"))))},_=function(){return r.a.createElement("div",{className:"testimonials"},r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"Garnett is a treasure! Her wealth of knowledge, supportive & calm demeanor, and ability to cue the exercise or position/pose make her the perfect coach. I am constantly in awe of how Garnett can see and explain form and alignment, drawing upon her extensive training in Alexander Technique, yoga, Pilates, and more. Each session is just the right combination of challenge, stretching, and recovery. I wholeheartedly recommend Garnett!",r.a.createElement("span",null,"Molly B., High-level Administrative Assistant")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"Garnett Mellen has been my personal trainer for one year.  We started at ACAC and have recently been meeting online.  When we started, I was 68 years old, ache-y in lots of places, in pain from sciatica, and struggling with energy, strength and balance.  I did not like exercising, especially by myself, nor did I like many of the larger classes, where I felt anonymous.  I needed encouragement to engage in exercise and guidance to do what would help me the most.  Garnett's patience, warmth, kindness and gentle humor provided the safety and encouragement I needed. Her broad background in Alexander Technique, Yoga, Pilates, Qigong and the use of equipment, including my favorite, a balance ball, provided both variety and ways to integrate different practices that were enjoyable and specific for my needs and inclinations. Garnett has consistently been responsive, flexible, observant and intuitive in our work together.  She reminds me to \"find where the ease is.\"  Little by little, together, we discovered what works for me and it continues to evolve.  I'm 69 now and I feel younger than I did a year ago.  I am stronger, rarely achey, no longer suffering from sciatica, and my balance is much better.",r.a.createElement("span",null,"Heena R., Chaplain")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"As I have been Garnett\u2019s student in the past I was glad to reconnect with her recently to train online. I so appreciate her eclectic style of teaching and awareness of individual student needs as she adapt classes to those needs. Her quiet speech and calm demeanor are just what I need to center myself and gain more awareness of my body and connection to my internal and emotional state.",r.a.createElement("span",null,"Carol B., Retired nurse")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"I have worked with Garnett for personal training using the VHPO online platform for the past two months during the COVID crisis.   With remarkable patience and a soothing voice, she has taught me to use a routine using the Alexander Technique.  She cued me virtually, using a gentle approach to help me \u201cfind the ease\u201d.  As a result, my arthritis and posture have improved dramatically and my sanity intact.",r.a.createElement("span",null,"Archer C., Health Department Employee")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"Garnett has a lovely demeanor: she is centered, low-key, and gentle.  She seriously considered my body mechanics, yet her light heart and smiling eyes put me completely at ease.  My sessions with her were very comfortable and soothing.",r.a.createElement("span",null,"Beverly S., Choir Director")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"Garnett provided a safe, welcoming, and healing environment for my introduction to the Alexander Technique. She is a gifted and skilled practitioner with a gentle and confident touch that guides and relaxes. New to Alexander Technique, I was amazed that the subtle touch and suggestions could make such a difference, but consistently, during the week after each of my appointments, my limbs would feel looser, my neck freer, my back nimble and stronger, and overall, my body felt at ease.",r.a.createElement("span",null,"Marsha B., Business Consultant")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"When I can\u2019t land a new skateboard trick and need a boost of confidence, I use what I have come to understand about my body: I stop, think about my balance and poise, and then attempt the trick. Often I am able to better coordinate the new move.",r.a.createElement("span",null,"Oren H., Skateboarder and Pilot")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"I found Garnett to be calm, patient and very responsive to my questions. You helped me become more aware of my body throughout the day.",r.a.createElement("span",null,"Peter D., Grant Writer")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"My work with Garnett was unlike other Alexander Technique experiences I had had previously. Firstly, our sessions included an educational/instructive component, which I found most helpful for teaching specific techniques to undo old patterns of 'holding' my body, which would invariably cause stress on my neck and arms. Next, Garnett was gentle and thoughtfully considered each movement before asking me to engage it. Lastly, the 'table-time' flew by each session, after which, upon standing from the table, I found that I had been extremely relaxed, and nearly floated to my car! This last piece is my best barometer for gauging the success and benefit of any body/energy/healing work.",r.a.createElement("span",null,"Pie D., Certified Mediator and Author")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"The AT work with Garnett allowed me to observe, experience and reorient myself in mind, muscle and posture. I was impressed to discover through the gentle manipulations what mobility, extension and coordination my body offered through another's guiding touch.  I was able to immediately apply self-correction to find a more ease-ful manner of holding my body through the sometimes difficult physical work I was doing as well as during rest, meditation and everyday activities. I continue to experiment to find optimal positions, especially for my shoulders. One of the most important observations that Garnett helped me see was how I could use much less effort to accomplish any task. The mindful quality of her hands, voice and presence is an inspiration for more awareness and helped me and my body recall the lesson time together.",r.a.createElement("span",null,"Christine B., Professional Coach")),r.a.createElement("p",{className:"blurb"},r.a.createElement("i",{className:"fas fa-quote-left"}),"I highly recommend Garnett as a curious, attentive and relaxed practitioner of the Alexander Technique.The sessions felt great and what's more, I had plenty to work with on my own, between sessions. I enjoyed participating in my own process of coming into better balance.",r.a.createElement("span",null,"Pia A., UVA Assistant Professor")))},q=function(){return r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(b.a,Object.assign({},e,{to:"/news"}))}}),r.a.createElement(b.b,{path:"/news",render:function(e){return r.a.createElement(O,e)}}),r.a.createElement(b.b,{path:"/bio",render:function(e){return r.a.createElement(T,e)}}),r.a.createElement(b.b,{path:"/how-i-teach",render:function(e){return r.a.createElement(j,e)}}),r.a.createElement(b.b,{path:"/acac",render:function(e){return r.a.createElement(x,e)}}),r.a.createElement(b.b,{path:"/testimonials",render:function(e){return r.a.createElement(_,e)}}),r.a.createElement(b.b,{path:"/contact",render:function(e){return r.a.createElement(G,e)}}))},S=function(){return r.a.createElement("div",{className:"footer"},"Based in Charlottesville, VA")},P=function(){var e=Object(s.c)();return Object(n.useEffect)((function(){e((function(e){e({type:"INIT_API_LOADING"}),v.get("/categories").then((function(a){var t=a.data.reduce((function(e,a){var t=Math.ceil(a.count/10);return e[a.name.toLowerCase()]=Object(y.a)(Object(y.a)({},a),{},{totalPages:t}),e}),{});e({type:"INIT_API_SUCCESS",payload:t})})).catch((function(a){e({type:"INIT_API_ERROR",payload:{error:a}})}))}))}),[e]),r.a.createElement("div",{id:"garnett-site"},r.a.createElement("div",{className:"page-body"},r.a.createElement(c,null),r.a.createElement("div",{className:"main-content"},r.a.createElement(d,null),r.a.createElement(g,null,r.a.createElement(q,null)))),r.a.createElement(S,null))},M=(t(67),t(70),function(e){var a=e.store,t=void 0===a?{}:a;return r.a.createElement(s.a,{store:t},r.a.createElement(i.a,{hashType:"noslash",basename:"garnett"},r.a.createElement(P,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=t(12),W=t(37),H=(t(71),{loading:!1,error:!1,initialized:!1,bio:null,news:null,testimonial:null}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"INIT_API_LOADING":return Object(y.a)(Object(y.a)({},e),{},{loading:!0,error:!1});case"INIT_API_SUCCESS":return Object(y.a)(Object(y.a)(Object(y.a)({},e),n),{},{loading:!1,error:!1,initialized:!0});case"INIT_API_ERROR":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,error:!0});default:return e}},B=t(15),L={loading:!0,loadMore:!1,error:!1,data:[],page:1},z=function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"GET_NEWS_FETCHING":return Object(y.a)(Object(y.a)({},a),{},(e={},Object(B.a)(e,+r.page>1?"loadMore":"loading",!0),Object(B.a)(e,"error",!1),e));case"GET_NEWS_SUCCESS":return Object(y.a)(Object(y.a)({},a),{},{data:a.data.concat(r.data),page:r.page,loading:!1,loadMore:!1,error:!1});case"GET_NEWS_ERROR":return Object(y.a)(Object(y.a)({},a),{},{loading:!1,error:!0});default:return a}},F=[W.a];var U=Object(R.d)(Object(R.c)({news:z,api:D}),R.a.apply(void 0,F));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,{store:U})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.b0a59fb4.chunk.js.map