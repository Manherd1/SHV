$(document).ready(function(){
/* code carousel / slick.js */
      $('.your-class').slick({

  prevArrow: '<span class="slick-prev">Back</span>',
  nextArrow: '<span class="slick-next">Next</span>',

		  centerMode: true,
		  centerPadding: '0vh',
		  slidesToShow: 1,
  		  slidesToScroll: 1,
  	      autoplay: true,
  		  autoplaySpeed: 3500,
  		  speed: 1618,
    	  vertical: true,
    	  verticalSwiping: true,
    	  swipe: true,
    	  swipeToSlide: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});
    });


$(document).ready(function() {
	/*code magnificPopup (zoom for mobile)*/
	if (window.matchMedia("(max-width: 48em)").matches) {
  /* La largeur maximum de l'affichage est 48 em inclus */
	  $(".popup").magnificPopup({
    type: "image",
     // autres options
 		 });
} else {
}
});


$(document).ready(function() {
// code for magnificPopup in Exposition
$('.popup2').magnificPopup({
    items: [
      {src: 'img/expo/vision/0.jpg'},
      {src: 'img/expo/vision/1.jpg'},
      {src: 'img/expo/vision/2.jpg'},
      {src: 'img/expo/vision/3.jpg'},
      {src: 'img/expo/vision/4.jpg'},
      {src: 'img/expo/vision/5.jpg'},
      {src: 'img/expo/vision/6.jpg'},
      {src: 'img/expo/vision/7.jpg'},
      {src: 'img/expo/vision/8.jpg'},
      {src: 'img/expo/vision/9.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup3').magnificPopup({
    items: [
      {src: 'img/expo/02-sentence01.jpg'},
      {src: 'img/expo/02-sentence02.jpg'},
      {src: 'img/expo/02-sentence03.jpg'},
      {src: 'img/expo/02-sentence04.jpg'},
      {src: 'img/expo/02-sentence05.jpg'},
      {src: 'img/expo/02-sentence06.jpg'},
      {src: 'img/expo/02-sentence07.jpg'},
      {src: 'img/expo/02-sentence08.jpg'},
      {src: 'img/expo/02-sentence09.jpg'},
      {src: 'img/expo/02-sentence10.jpg'},
      {src: 'img/expo/02-sentence11.jpg'},
      {src: 'img/expo/02-sentence12.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup4').magnificPopup({
    items: [
      {src: 'img/expo/04-B.jpg'},/*
      {src: 'img/expo/04.jpg'},*/
      {src: 'img/expo/04-E.jpg'},
      {src: 'img/expo/04-D.jpg'},
      {src: 'img/expo/04-C.jpg'},/*
      {src: 'img/expo/04-F.jpg'},*/    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup5').magnificPopup({
    items: [
      {src: 'img/expo/06.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup6').magnificPopup({
    items: [
      {src: 'img/expo/07-B.jpg'},
      {src: 'img/expo/dvd01/08.jpg'},
      {src: 'img/expo/dvd01/10.jpg'},
      {src: 'img/expo/dvd01/11.jpg'},
      {src: 'img/expo/dvd01/12.jpg'},
      {src: 'img/expo/dvd01/13.jpg'},
      {src: 'img/expo/dvd01/14.jpg'},
      {src: 'img/expo/dvd01/15.jpg'},
      {src: 'img/expo/07-A.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup22').magnificPopup({
    items: [
      {src: 'img/expo/31-D.jpg'},
      {src: 'img/expo/31-B.jpg'},
      {src: 'img/expo/31-C.jpg'},
      {src: 'img/expo/31-A.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
  });

$('.popup7').magnificPopup({
    items: [
      {src: 'img/expo/08.jpg'},
      {src: 'img/expo/09.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup8').magnificPopup({
    items: [
      {src: 'img/expo/10-A.jpg'},
      {src: 'img/expo/10-B.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup9').magnificPopup({
    items: [
      {src: 'img/expo/11.jpg'},
      {src: 'img/expo/12.jpg'},
      {src: 'img/expo/13.jpg'},
      {src: 'img/expo/14.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup10').magnificPopup({
    items: [
      {src: 'img/expo/15-A.jpg'},
      {src: 'img/expo/11.jpg'},
      {src: 'img/expo/15-D.jpg'},
      {src: 'img/expo/15-E.jpg'},
      {src: 'img/expo/15-F.jpg'},
      {src: 'img/expo/15-H.jpg'},
      {src: 'img/expo/15-K.jpg'},
      {src: 'img/expo/15-G.jpg'},
      {src: 'img/expo/15-I.jpg'},
      {src: 'img/expo/15-J.jpg'},
      {src: 'img/expo/15-L.jpg'},
      {src: 'img/expo/15-C.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup11').magnificPopup({
    items: [
      {src: 'img/expo/16-A.jpg'},
      {src: 'img/expo/16-B.jpg'},
      {src: 'img/expo/16-C.jpg'},
      {src: 'img/expo/16-D.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup12').magnificPopup({
    items: [
      /*{src: 'img/expo/25-A.jpg'},*/
      {src: 'img/expo/dvd02/01-A.jpg'},      
      {src: 'img/expo/dvd02/01-B.jpg'},
      {src: 'img/expo/dvd02/02.jpg'},
      {src: 'img/expo/dvd02/03.jpg'},
      {src: 'img/expo/dvd02/04.jpg'},
      {src: 'img/expo/dvd02/05.jpg'},
      {src: 'img/expo/dvd02/06.jpg'},
      {src: 'img/expo/dvd02/07.jpg'},
      {src: 'img/expo/25-B.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup13').magnificPopup({
    items: [
      {src: 'img/expo/17-B.jpg'},
      {src: 'img/expo/17-A.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup14').magnificPopup({
    items: [
      {src: 'img/expo/18-A.jpg'},
      {src: 'img/expo/18-C.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup15').magnificPopup({
    items: [
      {src: 'img/expo/18-B.jpg'},
      {src: 'img/expo/18-D.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup19').magnificPopup({
    items: [
      {src: 'img/expo/28-B.jpg'},
      {src: 'img/expo/28-A.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});


$('.popup16').magnificPopup({
    items: [
      {src: 'img/expo/19.jpg'},
      {src: 'img/expo/23-A.jpg'},
      {src: 'img/expo/21.jpg'},
      {src: 'img/expo/22-A.jpg'},
      {src: 'img/expo/20.jpg'},
      {src: 'img/expo/22-B.jpg'},
      {src: 'img/expo/23-B.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

$('.popup17').magnificPopup({
    items: [
      {src: 'img/expo/24.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
  });

$('.popup20').magnificPopup({
    
    type: 'image',
    closeBtnInside: false,
    closeOnContentClick: true,
  
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="https://gergaz.bandcamp.com/album/t-l-ph-rique-ep" target="_blank">listen here</a>';
      }
    }
  });

$('.popup21').magnificPopup({
    
    type: 'image',
    closeBtnInside: false,
    closeOnContentClick: true,
  
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="https://www.youtube.com/watch?v=nitjazuKjpo" target="_blank">listen here</a>';
      }
    }
  });

$('.popup18').magnificPopup({
    items: [
      {src: 'img/expo/26.jpg'},
      {src: 'img/expo/27.jpg'},
      {src: 'img/expo/27-C.jpg'},
    ],
    gallery: {
      enabled: true,
      arrowMarkup: '<!-- <button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button> -->', 
    // disabled with<!--> markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' 
    // markup of counter
    },
    type: 'image' // this is default type
	});

});


$(document).ready(function() {
	/*code easyZoom (zoom for desk)*/
    var $easyzoom = $(".easyzoom").easyZoom();
    var easyzoomAPI = $easyzoom.data("easyZoom");
    $("#imgbar img").click(function(e) {
      api1.swap($this.data('standard'), $this.attr('href'));
	});
});


$(document).ready(function() {
//	code to desactivate right-clic
	document.oncontextmenu = new Function("return false");
});

function trad() {
  var text = "<h4>A word on the ??Manherd??</h4><br>Spring of 2005 marked the discovery of the first foundations of ??Manherd?? an artistic collaboration concerning the representation of crowds, the idea being to erect what by nature has no face nor pre-defined form. ??Manherd?? , the generic title, is a word-concept formulated and conceived via a misunderstanding or quiproquo of the word ??Mankind??. General aesthetics were hinted at as early as 2000 but it was not until five years later that a broader picture and definition of Manherd would come to light and elaborate its true meaning. In 2006 a retrospective in situe exposition by SHVink. titled ??Sentence?? took place at Loudun,France. The catalyst to formulate and define Manherd began during the preparation phase of the exposition. The project was both inspired by the historical theme ??the Devils of Loudun?? as well as the village or ??theatre?? that gave birth to a debate orchestrated by a plethora of erudite publications and the popular press attracting inquisitive minds from all over France and almost the whole of Europe.<br>A particular conceptualisation of crowds, human masses and mass images are drawn out and put into operation. Accumulations of creatures, objects, scenes and micro-events are all representations that come to surface as a hybrid crowd. The ??Manherd??, heteroclite in its construction and erratical movements may be considered here as an entity whose dislocated body is recomposed in a million different ways. The composition of the work portrays these abstract forms at the heart, allowing empty clearings to suggest multiple and multi dimensional in depth perspectives. This impression is reinforced by the confrontation of representational modes, dimensions are juxtaposed while details are repeated and enlarged.<br>A certain vibration emanates from the contact of the large density in pictural zones contrasted by empty virgin territories within each composition.<br>The visual, musical and bibliographical sources are varied and overflow the field of Art History to be then funneled through forms drawn by hand. The work of SHVink. consists in dissecting a profusion of images that surround us and in canalizing the former, irrigate these into creations mapping out a no-man's land of uncharted territories."  
  var texte = "<h4>?? propos du ??Manherd??</h4><br>L???ann??e 2005 a vu na??tre les premiers fondements de ????Manherd????, une collaboration artistique tournant autour de la repr??sentation de la foule, l???id??e ??tant de dresser le portrait de ce qui par nature n???a pas de visage, pas de forme d??finie. Manherd (anglais pour troupeau humain), mot concept formul?? et con??u en anglais comme un glissement de sens de mankind (humanit??), est le titre g??n??rique du travail de SHVink. Ce travail sous-tend une r??flexion sur les masses, masses humaines, masses d???images.<br>Des amoncellements de cr??atures, d???objets, de sc??nes, de micro-??v??nements, de d??tournements, toutes les repr??sentations remontent ?? la surface du dessin pour former une foule hybride et grouillante : le troupeau humain, assemblage h??t??roclite aux mouvements erratiques, ??tre prot??iforme qui va en se disloquant et en se recomposant de mille mani??res. Les compositions des pi??ces donnent ?? voir ces formes abstraites, des masses au c??ur duquel des trou??es sugg??rent des profondeurs et des perspectives. Cette impression est renforc??e par une confrontation des modes de repr??sentation, une vibration r??sultant de la mise en contact de zones de grande densit?? picturale avec de larges espaces vierges integrant des jeux d?????chelles lorsqu???un d??tail est r??p??t?? d??mesur??ment agrandi.<br>Certains indices de l???esth??tique ?? Manherdienne ?? ??manent d??s les ann??es 2000 mais ce n???est que cinq ans plus tard qu???une notion plus large et ?? la fois plus distincte ??merge et assume son sens originel. En 2006, une r??trospective expos??e par SHVink. et intitul??e ????Sentence???? s???est tenue ?? Loudun, en France. Les premiers contours pour formuler et d??finir le monde de Manherd se sont dessin??es pendant la phase pr??paratrice de l???exposition.?? Ce sont les fondations initiales , la Gen??se du projet???? Manherd ?? qui voit le jour,??inspir??e par le th??me historique des diables de Loudun et de ces lieux. L?????glise Sainte Croix (l???espace de l???exposition en 2006) est transform??e (en 1634) en ????th????tre???? et attire une foule de curieux de la France enti??re et de quasi toute l???Europe.<br>Les sources, visuelles, musicales ou bibliographiques, vari??es et d??bordant le champ de l???histoire de l???art sont pass??es au laminoir du dessin et mises en forme ?? la main. Il s???agit de tailler dans la profusion d???images dont nous sommes entour??s, de d??tourner une partie du flot pour irriguer ces cr??ations, de puiser ?? des sources multiples non pas pour s?????tourdir d???une vari??t?? gratuite et s??duisante mais afin de rendre compte du caract??re pluridimensionnel de l???exp??rience sensible.<br>Les techniques employ??es sont diverses, ??les ratures cohabitent avec les Acad??mies les signes abstraits avec l?????criture, le remplissage obsessionnel avec le savoir-faire...?? : transfert, calque, photocopie, dessin brut ou rehauss?? de couleurs, couleurs pures. Diversit?? aussi des supports, sur bois, sur papier ou sur toile, les traits d??bordent jusqu???aux murs au sol et au plafond."
  var x = document.getElementById("myDIV");
  if (x.innerHTML === text) {
    x.innerHTML = texte;
  } else {
    x.innerHTML = text;
  }
};

function trad1() {
  var text1 = "<h4>Loudun : a theatre</h4><br> As W. M??hlman pointed out, there are ??eras that are rich in demons??. Such is the case for the period that encompasses the 16th and first half of the 17th centuries. The possession at Loudun (1632-1640) occurs towards the end of a long epidemicc of the plague and coincides with a leap forward in rational thinking with the publication of the Discourse on Method by Descartes (1637). The devil's work, then, has already been refined. This possession is to become a battlefield where all sorts of trends are acted out in lively verbal clashes. It is a case of science vs religion, a great public inquiry into what we can be sure of and what we cannot, and the nature of reason, the supernatural and authority. The debate itself is orchestrated by a spate of erudite publications as well as the popular press. It is a 'theatre' which attracts inquisive minds from all over France and almost the whole of Europe - a circus 'for your satisfaction, Sirs' in the words of numerous minutiae of the time.<br>For almost ten years, Loudon is home to a theatrical spectacle and provides a focus for edification, apologetics, pilgrimages, and religiously devout or philanthropic associations. The diabolical becomes commonplace and, little by little, profitable too. It is reintroduced into the language of a society that it continues to torment. Its role in this scenario abides by the traditional rules of any Commedia dell'arte. Thus, the drama unfolds. Violent to begin with, the devil is gradually civilized. He is argumentative, raises discussion, and in the long run, starts monotonously repeating himself. Horror turns into a spectacle and the spectacle into a sermon. Indeed, people still bawl and cry during the exorcims that are praticed after the 'sorcerer', Urban Grandier, has been executated, but this does not put an end to the teaparty provided for the audience in the packed church.<br>"
  var texte1 = "<h4>Loudun : un th????tre</h4><br>W. Mulmann le remarquait, il y a ??des ??poques riches en d??mons??. C???est le cas de la p??riode qui embrasse le XVIe si??cle et la premi??re moiti?? du XVIIe. La possession de Loudun ce situe presque au terme d???une longe ??pid??mie, pendant les ann??es m??mes (1632 - 1640) qui voient un grand sursaut de la raison avec la parution du Discours de la m??thode de Descartes (1637). Alors, la diablerie s???est d??j?? subtilis??e. C???est une place ou se produisent, s???affrontent, se gesticulent et se verbalisent les tendances de toute sorte. La possession devient un grand proc??s public : entre la science et la religion, sur le certain et l???incertain, sur la raison, le surnaturel, l???autorit??. Ce d??bat, toute une litt??rature savante et une presse populaire l???orchestrent. C???est un???? th??atre ?? qui attire les curieux de la France enti??re et quasi de toute l???Europe - un cirque pour la satisfaction de ces Messieurs, selon les termes que l???on trouve en tant de proc??s-verbaux contemporains.<br>Le spectacle s???installe a Loudun pour pr??s de dix ans, offrant bient??t un centre ?? l?????dification, ?? l???apolog??tique, aux p??lerinages, aux association pieuses ou philanthropiques. Le diabolique se banalise. Peu ?? peu, il devient rentable. Il est r??introduit dans le langage d???une soci??t??, tout en continuant ?? la troubler. Il joue dans cette histoire le r??le que lui fixent les r??gles d???une Commedia dell???arte d??j?? traditionnelle. Toute une ??volution se produit. D???abord violent,voici que le diable se civilise peu ?? peu. Il dispute. On le discute. Pour finir, il se r??p??te,monotone. L???horreur se mue en spectacle; le spectacle, en sermon. Certes on pleure et on crie encore pendant les exorcismes qui se poursuivent apr??s l???ex??cution du ??sorcier?? Urbain Grandier, mais cela n???emp??che pas de faire la d??nette dans les ??glises pleines de spectateurs."
  var x = document.getElementById("myDIV1");
  if (x.innerHTML === text1) {
    x.innerHTML = texte1;
  } else {
    x.innerHTML = text1;
  }
};

function trad2() {
  var text2 = "<h4>History of tension</h4><br>From the history of tension let us turn, in conclusion, to the present and the future. It is clear,  that the problem of tension will be completely solved only when we have a perfect society-that is to say, never. Meanwhile, it always remains possible to find partial palliatives. Let us consider a few practical steps that it would be fairly easy to take.<br>First of all we might incorporate into our present profoundly unsatisfactory and disappointing system of education a few simple courses in the art of controlling the autonomic nervous system and the subconscious mind. As things now stand,we teach children the principles of good health, good morals, and good thinking, but we do not teach them how to act upon these principles. We urge them to make good resolutions, but we do nothing whatsoever to help them carry these resolutions into practice. A main source of tension is the consciousness of miserably failing to do what we know we ought to do. If every child were given some training in what Hornell Hart has called autoconditioning, we should do more for general decency and good feeling than all the sermons ever preached.<br>The next step to be taken is prophylactic in character. Human beings pine for self-transcendence, and getting drunk on herd poison is one of the most effective methods of taking a holiday from insulated selfhood and the burdens of responsibility. So long as they indulge in crowd-intoxication at football games and carnivals, at revival meetings and the rallies of democratically organized political parties, no harm is done. We must never forget, however, that the spellbinders, the rabble rousers, the potential Hitlers are always with us. We must never forget that it is very easy for such men to turn an innocent orgy into an instrument of destruction, into a savage, mindless force directed toward the overthrow of liberty. To prevent them from exploiting crowd-intoxication for their own sinister purposes we must be on our guard. Wether a world inhabited by potential Hitlers on one hand and potential herd-poison addicts on the other can be made completely safe for rationality and decency seems doubtful, but at least we can try to make it a little safer than it is at present. For example, we can give our children lessons in general semantics. We can tell them about the frightful dangers of intellectual sin. We can make their flesh creep with by reciting to them the disastrous consequences to societies and to individuals of the rabble-rouser's over simplification, overgeneralization, and over-abstraction. We can remind them to live in present time and to think concretely and realistically, in terms of observable fact. We can unveil the absurd and discreditable secrets of propaganda and illustrate our lectures with examples drawn the from history of politics, religion, and the advertising industry. Would such a training be effective? Perhaps-or perhaps not. Herd poison is a powerful intoxicant. Once they get into a crowd, even upright and sensible men are apt to lose their reason and accept all suggestions, however nonsensical or however immoral,that may be given them. All we can hope to accomplish is to make it more difficult for the rabble-rouser to do his nefarious work.<br>"
  var texte2 = "<h4>Histoire de la Tension</h4><br>Apr??s l???histoire de la tension tournons-nous, en conclusion, ver le present et l???avenir. Il est clair, d???apr??s moi, que le probl??me de la tension ne sera compl??tement r??solu qu???une fois que nous aurons une soci??t?? parfaite - autrement dit , jamais. D???ici la,sera toujours possible de trouver des solutions partielles et des palliatifs temporaires. Voyons quelques mesures pratiques qu???il serait relativement facile de prendre.<br>Nous pourrions d???abord introduire dans notre syst??me ??ducatif profond??ment d??cevant et insatisfaisant quelques cours simples sur l???art de contr??ler le syst??me nerveux autonome et l???inconscient. Pr??sentement, nous enseignons ?? nos enfants des principes de bonne sant??, de bonne moralit?? et de bien-penser, mais nous ne leur apprenons pas la fa??on de se comporter pour appliquer ces principes. Nous les poussons ?? prendre de bonnes r??solutions, mais nous ne faisons strictement rien pour les aider ?? mettre ces r??solutions en pratique. L???une des principals sources de tension vient du sentiment que nous ??prouvons d?????chouer lamentablement ?? faire ce que nous devrions faire. Si on formait chaque enfant ?? ce que Hornell Hart appelait l???autoconditionnement, on servirait mieux la cause de l???honn??tet?? et du bien-vivre que tous les sermons jamais pr??ch??s.<br>L?????tape suivante rel??ve de la prophylaxie. Les ??tres humains aspirent ?? la transcendance, et s???enivrer de son poison est l???un des moyens les plus efficaces pour ??chapper ?? l???isolement ??gocentrique et au fardeau de la responsabilit??. Tant qu???on se retrouve pour s???enivrer collectivement ?? des matches de football et d???autres d??fil??s carnavalesques, dans des congr??s religieux et au rassemblements de partie d??mocratiquement organis??s, on ne fait de mal ?? personne. N???oublions jamais, toutefois, que les gourous, les agitateurs, les Hitlers en puissance sont toujours parmi nous. N???oublions jamais qu???il est tr??s facile pour de tels individus de transformer une orgie innocente en un outil de destruction, en une force sauvage uniquement tourn??e vers l???abolition de la libert??. Pour emp??cher ces gens-l?? de pratiquer l???intoxication de masse au service de leur sinistre objectifs, nous devons ??tre constamment sur nos gardes. Il semble peu probable qu???on aie jamais un monde d??livr?? de ces Hitlers en puissance et de ces adeptes de l???intoxication de masse, dans lequel l???honn??tet?? et la rationalit?? ne serait pas menac??es. Mais au moins peut-on s???efforcer de le rendre un peu moins dangereux qu???il ne l???est. Nous pouvons, par examples , inculquer ?? nos enfants quelques notion de s??mantique g??n??rale. Nous pouvons leur parler des ??pouvantables dangers du p??ch?? intellectuel. Nous pouvons leur donner la chair de poule en leur d??crivant les cons??quences catastrophiques pour les soci??t?? et les individu des exc??s de simplification, g??n??ralisation et d???abstraction commis par ces agitateurs. Nous pouvons leur apprendre ?? vivre dans l?????poque pr??sente et ?? penser de fa??on concr??te et r??aliste, en terme de faits observables. Nous pouvons d??voiler pour eux les secrets absurdes et malhonn??tes de la propagande et illustrer nos lectures par examples tir??s de l???histoire politique, religieuse et de l???industrie de la publicit??. Une telle formation sera-t-elle efficace? Peut-etre,ou peut-??tre pas. L???intoxication de masse fait appel ?? des poisons tr??s puissants. Une fois qu???ils sont r??pandus, des individus intelligents et pleins de probit?? sont capables de perdre leur bon sens et d???accepter les suggestions les plus extravagantes voire les plus malhonn??te. Nous pouvons seulement esp??rer rendre plus difficile l???action n??faste de ces agitateurs.<br>"
  var x = document.getElementById("myDIV2");
  if (x.innerHTML === text2) {
    x.innerHTML = texte2;
  } else {
    x.innerHTML = text2;
  }
};