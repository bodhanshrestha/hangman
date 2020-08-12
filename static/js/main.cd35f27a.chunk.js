(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{13:function(e,t,i){e.exports=i(30)},18:function(e,t,i){},19:function(e,t,i){},30:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i.n(r),a=i(11),o=i.n(a),s=(i(18),i(9)),l=i(2),c=function(e){var t=e.setVisible;return n.a.createElement("header",null,n.a.createElement("h1",null,"Hang Man Games"),n.a.createElement("p",null,"Play for fun"),n.a.createElement("button",{onClick:function(){return t(!0)}},"Rules"))},u=(i(19),function(e){var t=e.wrongLetters.length;return n.a.createElement("svg",{height:"250",width:"200",className:"figure-container"},n.a.createElement("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),n.a.createElement("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),n.a.createElement("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),n.a.createElement("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),t>0&&n.a.createElement("circle",{cx:"140",cy:"70",r:"20"}),t>1&&n.a.createElement("line",{x1:"140",y1:"90",x2:"140",y2:"150"}),t>2&&n.a.createElement("line",{x1:"140",y1:"120",x2:"120",y2:"100"}),t>3&&n.a.createElement("line",{x1:"140",y1:"120",x2:"160",y2:"100"}),t>4&&n.a.createElement("line",{x1:"140",y1:"150",x2:"120",y2:"180"}),t>5&&n.a.createElement("line",{x1:"140",y1:"150",x2:"160",y2:"180"}))}),d=function(e){var t=e.wrongLetters;return n.a.createElement("div",{className:"wrong-letters-container"},n.a.createElement("div",{id:"wrong-letters"},t.length>0&&n.a.createElement("p",null,"Wrong"),t.map((function(e,t){return n.a.createElement("span",{key:t},e)})).reduce((function(e,t){return null===e?[t]:[e,", ",t]}),null)))},p=function(e){var t=e.selectedWord,i=e.correctLetters;return n.a.createElement("div",{className:"word"},t.split("").map((function(e,t){return n.a.createElement("span",{className:"letter",key:t},i.includes(e)?e:"")})))};function m(e){e(!0),setTimeout((function(){e(!1)}),800)}function h(e,t,i){var r="win";return i.split("").forEach((function(t){e.includes(t)||(r="")})),6===t.length&&(r="lose"),r}var g=function(e){var t=e.showNotification;return n.a.createElement("div",{className:"notification-container ".concat(t?"show":"")},n.a.createElement("p",null,"You have already entered this letter"))},y=function(e){var t=e.correctLetters,i=e.wrongLetters,a=e.selectedWord,o=e.setPlayable,s=e.playAgain,l="",c="",u=!0,d=a.toUpperCase();return"win"===h(t,i,a)?(l=" Congratulation ! You Won",c="You successfully gussed word  ".concat(d),u=!1):"lose"===h(t,i,a)&&(l="Unfortunately you lost",c="..the word was ".concat(d),u=!1),Object(r.useEffect)((function(){return o(u)})),n.a.createElement("div",{className:"popup-container",style:""!==l?{display:"flex"}:{}},n.a.createElement("div",{className:"popup"},n.a.createElement("h2",null,l),n.a.createElement("h3",null,c),n.a.createElement("button",{id:"play-button",onClick:s},"Play Again")))},f=["application","programming","inter","wizard","abandon","ability","able","about","above","abroad","absence","absolute","absolutely","absorb","abuse","academic","accept","access","accident","accompany","accomplish","according","account","accurate","accuse","achieve","achievement","acid","acknowledge","acquire","across","act","active","activist","activity","actor","actress","actual","actually","adapt","addition","additional","address","adequate","adjust","adjustment","administration","administrator","admire","admission","admit","adolescent","adopt","adult","advance","advanced","advantage","adventure","advice","affair","affect","afford","afraid","after","afternoon","against","agency","agenda","agent","aggressive","agricultural","ahead","band","bank","bar","barely","barrel","barrier","base","baseball","basic","basically","basis","basket","basketball","bathroom","battery","battle","beach","bean","bear","beat","beautiful","beauty","become","bed","bedroom","beer","before","begin","beginning","behavior","behind","being","belief","believe","bell","belong","below","belt","bench","bend","beneath","benefit","beside","besides","best","bet","better","between","beyond","bible","big","bike","bill","billion","bind","biological","bird","birth","birthday","bit","bite","black","blade","blame","blanket","blind","block","blood","blow","blue","board","boat","body","bomb","bombing","bond","bone","book","boom","boot","border","born","borrow","boss","both","bother","bottle","bottom","boundary","bowl","box","boy","boyfriend","brain","branch","brand","bread","break","breakfast","breast","breath","breathe","brick","bridge","brief","briefly","bright","brilliant","bring","broken","brother","brown","brush","budget","buck","building","build","bunch","bullet","cancer","candidate","cap","capability","capable","capacity","capital","captain","capture","car","carbon","card","care","career","careful","carefully","carrier","carry","case","cash","cast","cat","catch","category","cause","ceiling","celebrate","celebration","celebrity","cell","center","central","century","ceremony","certain","certainly","chain","chair","chairman","challenge","chamber","champion","championship","chance","change","changing","channel","chapter","character","characteristic","characterize","charge","charity","chart","chase","cheap","check","cheek","cheese","chef","chemical","chest","chicken","chief","child","childhood","chip","chocolate","choice","cholesterol","choose","church","cigarette","circle","circumstance","cite","citizen","city","civil","civilian","claim","class","classic","classroom","clean","clear","clearly","client","climate","climb","clinic","clinical","clock","close","closely","closer","clothes","clothing","cloud","club","clue","cluster","coach","coal","coalition","coast","coat","code","coffee","cognitive","cold","collapse","colleague","collect","collection","collective","college","colonial","color","column","combination","combine","come","comedy","comfort","comfortable","command","commander","comment","commercial","commission","commit","commitment","committee","common","communicate","communication","community","company","compare","comparison","compete","competition","competitive","competitor","complain","complaint","complete","completely","complex","complicated","component","compose","composition","comprehensive","computer","concentrate","concentration","concept","concern","concerned","concert","conclude","conclusion","concrete","condition","conduct","conference","confidence","confident","confirm","conflict","confront","confusion","congressional","connect","connection","consciousness","consensus","consequence","conservative","consider","considerable","consideration","consist","consistent","constant","constantly","constitute","constitutional","construct","construction","consultant","consume","consumer","consumption","contact","contain","container","contemporary","content","daily","damage","dance","danger","dangerous","dare","dark","darkness","data","date","daughter","day","dead","deal","dealer","dear","death","debate","debt","decade","decide","decision","deck","declare","decline","decrease","deep","deeply","deer","defeat","defend","defendant","defense","defensive","deficit","define","definitely","definition","degree","delay","deliver","delivery","demand","democracy","demonstrate","demonstration","deny","department","depend","dependent","depending","depict","depression","depth","deputy","derive","describe","description","desert","deserve","design","designer","desire","desk","desperate","despite","destroy","destruction","detail","detailed","detect","determine","develop","developing","development","device","devote","dialogue","die","diet","differ","difference","different","differently","difficult","difficulty","dig","digital","dimension","dining","dinner","direct","direction","directly","director","dirt","dirty","disability","disagree","disappear","disaster","discipline","discourse","discover","discovery","discrimination","discuss","discussion","disease","dish","dismiss","disorder","display","dispute","distance","distant","distinct","distinction","distinguish","distribute","distribution","district","diverse","diversity","divide","division","divorce","do","doctor","document","dog","domestic","dominant","dominate","door","double","doubt","down","downtown","dozen","draft","drag","drama","dramatic","dramatically","draw","drawing","dream","dress","drink","drive","driver","drop","drug","dry","due","during","dust","duty","each","early","earn","earnings","earth","ease","easily","east","eastern","easy","eat","economic","economics","economist","economy","edge","edition","editor","educate","education","educational","educator","effect","effective","effectively","efficiency","efficient","effort","egg","eight","either","elderly","elect","election","electric","electricity","electronic","element","elementary","eliminate","elite","else","elsewhere","embrace","emerge","emergency","emission","emotion","emotional","emphasis","emphasize","employ","employee","employer","employment","empty","enable","encounter","encourage","end","enemy","energy","enforcement","engage","engine","engineer","engineering","english","enhance","enjoy","enormous","enough","ensure","enter","enterprise","entertainment","entire","entirely","entrance","entry","environment","environmental","episode","equal","equally","equipment","era","error","escape","especially","essay","essential","essentially","establish","establishment","estate","estimate","ethics","ethnic","European","evaluate","evaluation","even","evening","event","eventually","ever","every","everybody","everyday","everyone","everything","everywhere","evidence","evolution","evolve","exact","exactly","examination","examine","example","exceed","excellent","except","exception","exchange","exciting","executive","exercise","exhibit","exhibition","exist","existence","existing","expand","expansion","expect","expectation","expense","expensive","experience","experiment","expert","explain","explanation","explode","explore","explosion","expose","exposure","express","expression","extend","extension","extensive","extent","external","extra","extraordinary","extreme","extremely","face","facility","fact","factor","factory","faculty","fade","fail","failure","fair","fairly","faith","fall","false","familiar","family","famous","fan","fantasy","far","farm","farmer","fashion","fast","fat","fate","father","fault","favor","favorite","fear","feature","federal","fee","feed","feel","feeling","fellow","female","fence","few","fewer","fiber","fiction","field","fifteen","fifth","fifty","fight","fighter","fighting","figure","file","fill","film","final","finally","finance","financial","find","finding","fine","finger","finish","fire","firm","first","fish","fishing","fit","fitness","five","fix","flag","flame","flat","flavor","flee","flesh","flight","float","floor","flow","flower","fly","focus","folk","follow","following","food","foot","football","for","force","foreign","forest","forever","forget","form","formal","formation","former","formula","forth","fortune","forward","found","foundation","founder","four","fourth","frame","framework","free","freedom","freeze","French","frequency","frequent","frequently","fresh","friend","friendly","friendship","from","front","fruit","frustration","fuel","full","fully","fun","function","fund","fundamental","funding","funeral","funny","furniture","future","gain","galaxy","gallery","game","gang","gap","garage","garden","garlic","gas","gate","gather","gay","gaze","gear","gender","gene","general","generally","generate","generation","genetic","gentleman","gently","German","gesture","get","ghost","giant","gift","gifted","girl","girlfriend","give","given","glad","glance","glass","global","glove","go","goal","god","gold","golden","golf","good","government","governor","grab","grade","gradually","graduate","grain","grand","grandfather","grandmother","grant","grass","grave","gray","great","greatest","green","grocery","ground","group","grow","growing","growth","guarantee","guard","guess","guest","guide","guideline","guilty","gun","guy","habit","habitat","hair","half","hall","hand","handful","handle","hang","happen","happy","hard","hardly","hat","hate","have","head","headline","headquarters","health","healthy","hear","hearing","heart","heat","heaven","heavily","heavy","heel","height","helicopter","hell","hello","help","helpful","her","here","heritage","hero","herself","hey","hide","high","highlight","highly","highway","hill","himself","hip","hire","his","historian","historic","historical","history","hit","hold","hole","holiday","holy","home","homeless","honest","honey","honor","hope","horizon","horror","horse","hospital","host","hot","hotel","hour","house","household","housing","how","however","huge","human","humor","hundred","hungry","hunter","hunting","hurt","husband","hypothesis","ice","idea","ideal","identification","identify","identity","ignore","illegal","illness","illustrate","image","imagination","imagine","immediate","immediately","immigrant","immigration","impact","implement","implication","imply","importance","important","impose","impossible","impress","impression","impressive","improve","improvement","incentive","incident","include","including","income","incorporate","increase","increased","increasing","increasingly","incredible","indeed","independence","independent","index","indicate","indication","individual","industrial","industry","infant","infection","inflation","influence","inform","information","ingredient","initial","initially","initiative","injury","inner","innocent","inquiry","inside","insight","insist","inspire","install","instance","instead","institution","institutional","instruction","instructor","instrument","insurance","intellectual","intelligence","intend","intense","intensity","intention","interaction","interest","interested","interesting","internal","international","internet","interpret","interpretation","intervention","interview","into","introduce","introduction","invasion","invest","investigate","investigation","investigator","investment","investor","invite","involve","involved","involvement","iron","island","issue","item","itself","jacket","jail","job","join","joint","joke","journal","journalist","journey","joy","judge","judgment","juice","jump","junior","jury","just","justice","justify","keep","key","kick","kid","kill","killer","killing","kind","king","kiss","kitchen","knee","knife","knock","know","knowledge","lab","label","labor","laboratory","lack","lady","lake","land","landscape","language","lap","large","largely","last","late","later","latter","laugh","launch","law","lawn","lawsuit","lawyer","lay","layer","lead","leader","leadership","leading","leaf","league","lean","learn","learning","least","leather","leave","left","leg","legacy","legal","legend","legislation","legitimate","lemon","length","less","lesson","let","letter","level","liberal","library","license","lie","life","lifestyle","lifetime","lift","light","like","likely","limit","limitation","limited","line","link","lip","list","listen","literally","literary","literature","little","live","living","load","loan","local","locate","location","lock","long","look","loose","lose","loss","lost","lot","lots","loud","love","lovely","lover","lower","luck","lucky","lunch","lung","machine","mad","magazine","mail","main","mainly","maintain","maintenance","major","majority","make","maker","makeup","male","mall","man","manage","management","manager","manner","manufacturer","manufacturing","many","map","margin","mark","market","marketing","marriage","married","marry","mask","mass","massive","master","match","material","math","matter","maybe","meal","mean","meaning","meanwhile","measure","measurement","meat","mechanism","media","medical","medication","medicine","medium","meet","meeting","member","membership","memory","mental","mention","menu","mere","merely","mess","message","metal","meter","method","middle","might","military","milk","million","mind","mine","minister","minor","minority","minute","miracle","mirror","miss","missile","mission","mistake","mixture","mode","model","moderate","modern","modest","moment","money","monitor","month","mood","moon","moral","more","moreover","morning","mortgage","most","mostly","mother","motion","motivation","motor","mount","mountain","mouse","mouth","move","movement","movie","negative","negotiate","negotiation","neighbor","neighborhood","neither","nerve","nervous","network","never","nevertheless","new","newly","news","newspaper","next","nice","night","nine","nobody","nod","noise","nomination","none","nonetheless","normal","normally","north","northern","nose","note","nothing","notice","notion","novel","now","nowhere","nuclear","number","numerous","nurse","object","objective","obligation","observation","observe","observer","obtain","obvious","obviously","occasion","occasionally","occupation","occupy","occur","ocean","offense","offensive","offer","office","officer","official","often","Olympic","ongoing","online","opening","operate","operating","operation","operator","opinion","opponent","opportunity","oppose","opposite","opposition","option","orange","order","ordinary","organic","organization","organize","orientation","origin","original","originally","other","others","otherwise","ought","ourselves","outcome","outside","overall","overcome","overlook","owner","package","page","pain","painful","paint","painter","painting","pair","pale","Palestinian","palm","pan","panel","pant","paper","parent","park","parking","part","participant","participate","participation","particular","particularly","partly","partner","partnership","party","pass","passage","passenger","passion","past","patch","path","patient","pattern","pause","pay","payment","peace","peak","peer","penalty","people","pepper","perceive","percentage","perception","perfect","perfectly","perform","performance","perhaps","period","permanent","permission","permit","person","personal","personality","personally","personnel","perspective","persuade","phase","phenomenon","philosophy","phone","photo","photograph","photographer","phrase","physical","physically","physician","piano","pick","picture","pie","piece","pile","pilot","pine","pink","pipe","pitch","place","plan","plane","planet","planning","plant","plastic","plate","platform","play","player","please","pleasure","plenty","plot","plus","pocket","poem","poet","poetry","point","pole","police","policy","political","politically","politician","politics","poll","pollution","pool","poor","popular","population","porch","port","portion","portrait","portray","pose","position","positive","possess","possibility","possible","possibly","post","potato","potential","potentially","pound","pour","poverty","powder","power","powerful","practical","practice","pray","prayer","precisely","predict","prefer","preference","pregnancy","pregnant","preparation","prepare","prescription","presence","present","presentation","preserve","president","presidential","press","pressure","pretend","pretty","prevent","previous","previously","price","pride","priest","primarily","primary","prime","principal","principle","print","prior","priority","prison","prisoner","privacy","private","probably","problem","procedure","proceed","process","produce","producer","product","production","profession","professional","professor","profile","profit","program","progress","project","prominent","promise","promote","prompt","proof","proper","properly","property","proportion","proposal","propose","proposed","prosecutor","prospect","protect","protection","protein","protest","proud","prove","provide","provider","province","provision","psychological","psychologist","psychology","public","publication","publicly","publish","publisher","pull","punishment","purchase","pure","purpose","pursue","push","qualify","quality","quarter","quarterback","question","quick","quickly","quiet","quietly","quit","quite","quote","race","racial","radical","radio","rail","rain","raise","range","rank","rapid","rapidly","rare","rarely","rate","rather","rating","ratio","reach","react","reaction","read","reader","reading","ready","real","reality","realize","really","reason","reasonable","recall","receive","recent","recently","recipe","recognition","recognize","recommend","recommendation","record","recording","recover","recovery","recruit","reduce","reduction","refer","reference","reflect","reflection","reform","refugee","refuse","regard","regarding","regardless","regime","region","regional","register","regular","regularly","regulate","regulation","reinforce","reject","relate","relation","relationship","relative","relatively","relax","release","relevant","relief","religion","religious","rely","remain","remaining","remarkable","remember","remind","remote","remove","repeat","repeatedly","replace","reply","report","reporter","represent","representation","representative","Republican","reputation","request","require","requirement","research","researcher","resemble","reservation","resident","resist","resistance","resolution","resolve","resort","resource","respect","respond","respondent","response","responsibility","responsible","rest","restaurant","restore","restriction","result","retain","retire","retirement","return","reveal","revenue","review","revolution","rhythm","rice","rich","ride","rifle","right","ring","rise","risk","river","road","rock","role","roll","romantic","roof","room","root","rope","rose","rough","roughly","round","route","routine","row","rub","rule","run","running","rural","rush","Russian","sacred","sad","safe","safety","sake","salad","salary","sale","sales","salt","same","sample","sanction","sand","satellite","satisfaction","satisfy","sauce","save","saving","say","scale","scandal","scared","scenario","scene","schedule","scheme","scholar","scholarship","school","science","scientific","scientist","scope","score","scream","screen","script","sea","search","season","seat","second","secret","secretary","section","sector","secure","security","see","seed","seek","seem","segment","seize","select","selection","self","sell","Senate","senator","send","senior","sense","sensitive","sentence","separate","sequence","series","serious","seriously","serve","service","session","set","setting","settle","settlement","seven","several","severe","shade","shadow","shake","shall","shape","share","sharp","sheet","shelf","shell","shelter","shift","shine","ship","shirt","shit","shock","shoe","shoot","shooting","shop","shopping","shore","short","shortly","shot","should","shoulder","shout","show","shower","shrug","shut","sick","side","sigh","sight","sign","signal","significance","significant","significantly","silence","silent","silver","similar","similarly","simple","simply","since","sing","singer","single","sink","sir","sister","sit","site","situation","six","size","ski","skill","skin","sky","slave","sleep","slice","slide","slight","slightly","slip","slow","slowly","small","smart","smell","smile","smoke","smooth","snap","snow","soccer","social","society","soft","software","soil","solar","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometimes","somewhat","somewhere","song","soon","sophisticated","sorry","sort","soul","sound","soup","source","south","southern","Soviet","space","Spanish","speak","speaker","special","specialist","species","specific","specifically","speech","speed","spend","spending","spin","spirit","spiritual","split","spokesman","sport","spot","spread","spring","square","squeeze","stability","stable","staff","stage","stair","stake","stand","standard","standing","star","stare","start","state","statement","station","statistics","status","stay","steady","steal","steel","step","stick","still","stir","stock","stomach","stone","stop","storage","store","storm","story","straight","strange","stranger","strategic","strategy","stream","street","strength","strengthen","stress","stretch","strike","string","strip","stroke","strong","strongly","structure","struggle","student","studio","study","stuff","stupid","style","subject","submit","subsequent","substance","substantial","succeed","success","successful","successfully","such","sudden","suddenly","suffer","sufficient","sugar","suggest","suggestion","suicide","suit","summer","summit","sun","super","supply","support","supporter","suppose","supposed","Supreme","sure","surely","surface","surgery","surprise","surprised","surprising","surprisingly","surround","survey","survival","survive","survivor","suspect","sustain","swear","sweep","sweet","swim","swing","switch","symbol","symptom","system","table","tablespoon","tactic","tail","take","tale","talent","talk","tall","tank","tap","tape","target","task","taste","tax","taxpayer","tea","teach","teacher","teaching","team","tear","teaspoon","technical","technique","technology","teen","teenager","telephone","telescope","television","tell","temperature","temporary","ten","tend","tendency","tennis","tension","tent","term","terms","terrible","territory","terror","terrorism","terrorist","test","testify","testimony","testing","text","than","thank","thanks","that","theater","their","them","theme","themselves","then","theory","therapy","there","therefore","these","they","thick","thin","thing","think","thinking","third","thirty","this","those","though","thought","thousand","threat","threaten","three","throat","through","throughout","throw","thus","ticket","tie","tight","time","tiny","tip","tire","tired","tissue","title","tobacco","today","toe","together","tomato","tomorrow","tone","tongue","tonight","too","tool","tooth","top","topic","toss","total","totally","touch","tough","tour","tourist","tournament","toward","towards","tower","town","toy","trace","track","trade","tradition","traditional","traffic","tragedy","trail","train","training","transfer","transform","transformation","transition","translate","transportation","travel","treat","treatment","treaty","tree","tremendous","trend","trial","tribe","trick","trip","troop","trouble","truck","true","truly","trust","truth","try","tube","tunnel","turn","twelve","twenty","twice","twin","two","type","typical","typically","ugly","ultimate","ultimately","unable","uncle","under","undergo","understand","understanding","unfortunately","uniform","union","unique","unit","United","universal","universe","university","unknown","unless","unlike","unlikely","until","unusual","upon","upper","urban","urge","used","useful","user","usual","usually","utility","vacation","valley","valuable","value","variable","variation","variety","various","vary","vast","vegetable","vehicle","venture","version","versus","very","vessel","veteran","victim","victory","video","view","viewer","village","violate","violation","violence","violent","virtually","virtue","virus","visible","vision","visit","visitor","visual","vital","voice","volume","volunteer","vote","voter","vulnerable","wage","wait","wake","walk","wall","wander","want","war","warm","warn","warning","wash","waste","watch","water","wave","way","weak","wealth","wealthy","weapon","wear","weather","wedding","week","weekend","weekly","weigh","weight","welcome","welfare","well","west","western","wet","what","whatever","wheel","when","whenever","where","whereas","whether","which","while","whisper","white","who","whole","whom","whose","why","wide","widely","widespread","wife","wild","will","willing","win","wind","window","wine","wing","winner","winter","wipe","wire","wisdom","wise","wish","with","withdraw","within","without","witness","woman","wonder","wonderful","wood","wooden","word","work","worker","working","works","workshop","world","worried","worry","worth","would","wound","wrap","write","writer","writing","wrong","yard","yeah","year","yell","yellow","yes","yesterday","yet","yield","you","young","your","yours","yourself","youth","zone"],b=i(12),v=i.n(b),w=function(e){var t=e.visible,i=e.setVisible,r=function(){i(!1)};return n.a.createElement(v.a,{visible:t,width:"80%",height:"400",effect:"fadeInUp",onClickAway:function(){return r()}},n.a.createElement("div",{className:"rules"},n.a.createElement("div",{className:"objectives"},n.a.createElement("h1",null,"Objective"),n.a.createElement("p",null,"Guess the word/phrase before your man gets hung!")),n.a.createElement("ol",{type:"1"},n.a.createElement("li",null," First, select a letter of the alphabet "),n.a.createElement("li",null,"If the letter is contained in the word/phrase, the you can take another turn guessing a letter"),n.a.createElement("li",null,"If the letter is not contained in the word/phrase, a portion of the hangman is added."),n.a.createElement("li",null,"The game continues until:",n.a.createElement("ol",{type:"a"},n.a.createElement("li",null,"the word/phrase is guessed (all letters are revealed) \u2013 WINNER"),n.a.createElement("li",null,"all the parts of the hangman are displayed \u2013 LOSER")))),n.a.createElement("div",{onClick:function(){return r()}},n.a.createElement("button",{className:"rulesBtn"},"Close"))))},k=i(6),E=i(8),x=function(e){var t=e.setDesktop;return n.a.createElement("div",{className:"input-field"},n.a.createElement("div",{className:"ask"},n.a.createElement("p",null,"Are you in Desktop or in mobile"),n.a.createElement("button",{onClick:function(){return t(!0)}}," ",n.a.createElement(k.a,{icon:E.a})),n.a.createElement("button",{onClick:function(){return t(!1)}}," ",n.a.createElement(k.a,{icon:E.b}))),n.a.createElement("input",{type:"text",maxLength:"0",className:"input-letter",placeholder:"Click to open Key Board"}))},j=function(){return n.a.createElement("form",{action:""},n.a.createElement("input",{type:"text",maxLength:"0",className:"input-letter",placeholder:"Click to open Key Board"}))},q=function(e){var t=e.selectedWord,i=Object(r.useState)(!1),a=Object(l.a)(i,2),o=a[0],s=a[1];return n.a.createElement("div",{className:"hint"},n.a.createElement("button",{onClick:function(){return s(!o)}},"Hint :"),n.a.createElement("p",null,o?n.a.createElement(n.a.Fragment,null,"Words first letter starts with \xa0",t[0].toUpperCase()):""))},N=f[Math.floor(Math.random()*f.length)];var O=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),i=t[0],a=t[1],o=Object(r.useState)(!1),h=Object(l.a)(o,2),b=h[0],v=h[1],k=Object(r.useState)(!0),E=Object(l.a)(k,2),O=E[0],z=E[1],L=Object(r.useState)([]),C=Object(l.a)(L,2),S=C[0],W=C[1],A=Object(r.useState)([]),M=Object(l.a)(A,2),I=M[0],P=M[1],R=Object(r.useState)(!1),U=Object(l.a)(R,2),B=U[0],V=U[1];return Object(r.useEffect)((function(){var e=function(e){var t=e.key,r=e.keyCode;if(i&&r>=65&&r<=90){var n=t.toLowerCase();N.includes(n)?S.includes(n)?m(V):W((function(e){return[].concat(Object(s.a)(e),[n])})):I.includes(n)?m(V):P((function(e){return[].concat(Object(s.a)(e),[n])}))}};return window.addEventListener("keydown",e),window.innerWidth>768?z(!0):z(!1),function(){return window.removeEventListener("keydown",e)}}),[S,I,i]),n.a.createElement("div",{className:"App"},n.a.createElement(c,{setVisible:v}),n.a.createElement("div",{className:"game-container"},n.a.createElement("div",{className:"extra"},n.a.createElement("div",{className:"fig"},n.a.createElement(u,{wrongLetters:I})),n.a.createElement("div",{className:"field"},n.a.createElement(x,{setDesktop:z}),n.a.createElement(d,{wrongLetters:I}))),n.a.createElement(g,{showNotification:B}),n.a.createElement(q,{selectedWord:N}),(window.innerWidth,O?"Enter letters from your Keyboard":n.a.createElement(j,null)),n.a.createElement(p,{selectedWord:N,correctLetters:S})),n.a.createElement(y,{correctLetters:S,wrongLetters:I,selectedWord:N,setPlayable:a,playAgain:function(){a(!0),W([]),P([]);var e=Math.floor(Math.random()*f.length);N=f[e]}}),n.a.createElement(w,{visible:b,setVisible:v}))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.cd35f27a.chunk.js.map