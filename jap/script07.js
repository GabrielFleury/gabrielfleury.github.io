/**
 * @author Gabriel Fleury
 */
 
$(document).ready(initialiser);	

var arrayHiragana = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "nothing",
    "ゆ",
    "nothing",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
    "nothing",
    "nothing",
    "nothing",
    "を",
	"nothing",
    "nothing",
	"nothing",
    "nothing",
	"ん",
    "が",
	"ぎ",
    "ぐ",
	"げ",
    "ご",
	"ざ",
	"じ",
    "ず",
	"ぜ",
    "ぞ",
	"だ",
	"nothing",
    "nothing",
	"で",
    "ど",
	"ば",
	"び",
    "ぶ",
	"べ",
    "ぼ",
	"ぱ",
	"ぴ",
    "ぷ",
	"ぺ",
    "ぽ"
];

var arrayPhoHiragana = [
    "a",
    "i",
    "u",
    "e",
    "o",
    "ka",
    "ki",
    "ku",
    "ke",
    "ko",
    "sa",
    "shi",
    "su",
    "se",
    "so",
    "ta",
    "chi",
    "tsu",
    "te",
    "to",
    "na",
    "ni",
    "nu",
    "ne",
    "no",
    "ha",
    "hi",
    "fu",
    "he",
    "ho",
    "ma",
    "mi",
    "mu",
    "me",
    "mo",
    "ya",
    "nothing",
    "yu",
    "nothing",
    "yo",
    "ra",
    "ri",
    "ru",
    "re",
    "ro",
    "wa",
    "nothing",
    "nothing",
    "nothing",
    "wo",
	"nothing",
    "nothing",
	"nothing",
    "nothing",
	"n",
    "ga",
	"gi",
    "gu",
	"ge",
    "go",
	"za",
	"ji",
    "zu",
	"ze",
    "zo",
	"da",
	"nothing",
    "nothing",
	"de",
    "do",
	"ba",
	"bi",
    "bu",
	"be",
    "bo",
	"pa",
	"pi",
    "pu",
	"pe",
    "po"
];

var arrayKatakana = [
    "ア",
    "イ",
    "ウ",
    "エ",
    "オ",
    "カ",
    "キ",
    "ク",
    "ケ",
    "コ",
    "サ",
    "シ",
    "ス",
    "セ",
    "ソ",
    "タ",
    "チ",
    "ツ",
    "テ",
    "ト",
    "ナ",
    "ニ",
    "ヌ",
    "ネ",
    "ノ",
    "ハ",
    "ヒ",
    "フ",
    "ヘ",
    "ホ",
    "マ",
    "ミ",
    "ム",
    "メ",
    "モ",
    "ヤ",
    "nothing",
    "ユ",
    "nothing",
    "ヨ",
    "ラ",
    "リ",
    "ル",
    "レ",
    "ロ",
    "ワ",
    "ヰ",
    "nothing",
    "ヱ",
    "ヲ",
	"nothing",
    "nothing",
	"nothing",
    "nothing",
	"ン",
    "ガ",
	"ギ",
    "グ",
	"ゲ",
    "ゴ",
	"ザ",
	"ジ",
    "ズ",
	"ゼ",
    "ゾ",
	"ダ",
	"nothing",
    "nothing",
	"デ",
    "ド",
	"バ",
	"ビ",
    "ブ",
	"ベ",
    "ボ",
	"パ",
	"ピ",
    "プ",
	"ペ",
    "ポ"
];

var arrayPhoKatakana = [
    "a",
    "i",
    "u",
    "e",
    "o",
    "ka",
    "ki",
    "ku",
    "ke",
    "ko",
    "sa",
    "shi",
    "su",
    "se",
    "so",
    "ta",
    "chi",
    "tsu",
    "te",
    "to",
    "na",
    "ni",
    "nu",
    "ne",
    "no",
    "ha",
    "hi",
    "fu",
    "he",
    "ho",
    "ma",
    "mi",
    "mu",
    "me",
    "mo",
    "ya",
    "nothing",
    "yu",
    "nothing",
    "yo",
    "ra",
    "ri",
    "ru",
    "re",
    "ro",
    "wa",
    "wi",
    "nothing",
    "we",
    "wo",
	"nothing",
    "nothing",
	"nothing",
    "nothing",
	"n",
    "ga",
	"gi",
    "gu",
	"ge",
    "go",
	"za",
	"ji",
    "zu",
	"ze",
    "zo",
	"da",
	"nothing",
    "nothing",
	"de",
    "do",
	"ba",
	"bi",
    "bu",
	"be",
    "bo",
	"pa",
	"pi",
    "pu",
	"pe",
    "po"
];

var pts=0;
var ptsTotal=0;
var arraySymboles=arrayHiragana;
var arrayLettres=arrayPhoHiragana;
var timed=false;
var timeLeft=10;
var timeMax=99;
var ticker;

function initialiser() 
{
	reroll("a");
	
	//permettre le click
	$(".answer").click(verifierReponse);
	$("#btnHiragana").click(hiraganaMode);
	$("#btnKatakana").click(katakanaMode);
	$("#btnTemps0").click(infiniteMode);
	$("#btnTemps10").click(timedMode10);
	$("#btnTemps5").click(timedMode5);
}

function hiraganaMode(){
	$("#btnHiragana").addClass('selectedMode');
	$("#btnKatakana").removeClass('selectedMode');
	arraySymboles=arrayHiragana;
	arrayLettres=arrayPhoHiragana;
	reroll("a");
	pts=0;
	ptsTotal=0;
	updatePoints();
}
function katakanaMode(){
	$("#btnHiragana").removeClass('selectedMode');
	$("#btnKatakana").addClass('selectedMode');
	arraySymboles=arrayKatakana;
	arrayLettres=arrayPhoKatakana;
	reroll("a");
	pts=0;
	ptsTotal=0;
	updatePoints();
}
function infiniteMode(){
	$("#btnTemps0").addClass('selectedMode');
	$("#btnTemps10").removeClass('selectedMode');
	$("#btnTemps5").removeClass('selectedMode');
	
	$("#timer").css("visibility", "hidden");
	timed=false;
	clearTimeout(ticker);
	
	reroll("a");
	pts=0;
	ptsTotal=0;
	updatePoints();
}
function timedMode10(){
	$("#btnTemps0").removeClass('selectedMode');
	$("#btnTemps10").addClass('selectedMode');
	$("#btnTemps5").removeClass('selectedMode');
	
	$("#timer").css("visibility", "visible");
	timed=true;
	clearTimeout(ticker);
	timeMax=10;
	timeLeft=timeMax;
		
	reroll("a");
	pts=0;
	ptsTotal=0;
	updatePoints();
}

function timedMode5(){
	$("#btnTemps0").removeClass('selectedMode');
	$("#btnTemps10").removeClass('selectedMode');
	$("#btnTemps5").addClass('selectedMode');
	
	$("#timer").css("visibility", "visible");
	timed=true;
	clearTimeout(ticker);
	timeMax=5;
	timeLeft=timeMax;
		
	reroll("a");
	pts=0;
	ptsTotal=0;
	updatePoints();
}

function reroll($derniereQuestion){
	//générer une question random
	$randomNum = Math.floor((Math.random() * 79));
	$randomQuestion = arrayLettres[$randomNum];
	while($randomQuestion=="nothing" || $randomQuestion==$derniereQuestion){
		$randomNum = Math.floor((Math.random() * 79));
		$randomQuestion = arrayLettres[$randomNum];
	}
	$("#question").text($randomQuestion);
	
	//générer des réponses random
	$(".answer").each(function( i ) {
		$(this).text(creerRandomReponse());
	});
	
	//insérer la bonne réponse dans une case random
	//si on trouve pas déjà la bonne réponse
	if($.inArray( arraySymboles[$randomNum], $("#answers").text() )  == -1){
		$(".answer").eq( Math.floor((Math.random()*9)) ).text( arraySymboles[$randomNum] );
	}
	
	//(re)démarrer le timer
	if(timed){
		clearTimeout(ticker);
		timeLeft=timeMax;
		tick();
	}
}

function creerRandomReponse(){
	$randomReponse = arraySymboles[Math.floor((Math.random() * 79))];
	//trouver une reponse qui n'est ni "nothing" ni déjà dans la liste
	while($randomReponse=="nothing"   ||   ($.inArray( $randomReponse, $("#answers").text() ) != -1)){
		$randomReponse = arraySymboles[Math.floor((Math.random() * 79))];
	}
	return $randomReponse;
}

function verifierReponse() 
{
	//empêcher le reclick, stopper le timer
	$(".answer").unbind( "click" );
	clearTimeout(ticker);
	
	//vérifier
	$question = $("#question").text();
	$maReponse = $(this).text();
	$questionNum = $.inArray($question, arrayLettres);
	$maReponseNum = $.inArray($maReponse, arraySymboles);
	
	//update pointage
	if($questionNum==$maReponseNum){
		pts++;
		$(this).addClass('answerGood');
	}
	else{
		corriger(arraySymboles[$.inArray($("#question").text(), arrayLettres)]);
		$(this).addClass('answerBad');
	}
	ptsTotal++;
	updatePoints();
	
	//après 1sec changer la question
	nextQuestion();
}

function corriger($bonneReponse){
	$(".answer").each(function( i ) {
		if($(this).text() == $bonneReponse){
			$(this).attr("class", "answer correction");
		}
	});
}

function updatePoints(){
	$("#score").text("Score: " + pts + "/" + ptsTotal);
}

function nextQuestion(){
	setTimeout(function(){
		reroll( $("#question").text() );
		
		//remettre le click
		$(".answer").click(verifierReponse);
		$(".answer").attr("class", "answer");
		$("#timer").attr("class", "centrer");
	}, 1500);
}

function tick(){
	$("#timer").text(timeLeft);
	
	ticker = setTimeout(function(){ 
		if(timeLeft > 0){
			//keep going
			timeLeft--;
			$("#timer").text(timeLeft);
			tick();
		}
		else{
			//force error
			$("#timer").addClass('answerBad');
			corriger(arraySymboles[$.inArray($("#question").text(), arrayLettres)]);
			ptsTotal++;
			updatePoints();
			//empêcher le reclick, stopper le timer
			$(".answer").unbind( "click" );
			clearTimeout(ticker);
			
			nextQuestion();
		}
	}, 1000);
}

$('.bouton').on('click', function(e) { e.preventDefault(); });
$('.answer').on('click', function(e) { e.preventDefault(); });