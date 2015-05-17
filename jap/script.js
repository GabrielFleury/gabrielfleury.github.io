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
var timeLeft=10;

function initialiser() 
{
	reroll("a");
	
	//permettre le click
	$(".answer").click(verifierReponse);
	$("#btnHiragana").click(hiraganaMode);
	$("#btnKatakana").click(katakanaMode);
}

function hiraganaMode(){
	$("#btnHiragana").addClass('selectedMode');
	$("#btnKatakana").removeClass('selectedMode');
	arraySymboles=arrayHiragana;
	arrayLettres=arrayPhoHiragana;
	reroll("a");
	pts=0;
	ptsTotal=0;
	updatePoints()
}
function katakanaMode(){
	$("#btnHiragana").removeClass('selectedMode');
	$("#btnKatakana").addClass('selectedMode');
	arraySymboles=arrayKatakana;
	arrayLettres=arrayPhoKatakana;
	reroll("a");
	pts=0;
	ptsTotal=0;
	updatePoints()
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
	//empêcher le reclick
	$(".answer").unbind( "click" );
	
	//vérifier
	$question = $("#question").text();
	$reponse = $(this).text();
	$questionNum = $.inArray($question, arrayLettres);
	$reponseNum = $.inArray($reponse, arraySymboles);
	
	//update pointage
	if($questionNum==$reponseNum){
		pts++;
		$(this).addClass('answerGood');
	}
	else{
		$(this).addClass('answerBad');
	}
	ptsTotal++;
	updatePoints()
	
	
	
	//après 1sec changer la question
	setTimeout(function(){
		reroll($question);
		
		//remettre le click
		$(".answer").click(verifierReponse);
		$(".answer").attr("class", "answer");
	}, 1000);
}

function updatePoints(){
	$("#score").text("Score: " + pts + "/" + ptsTotal);
}

$('.answer').on('click', function(e) { e.preventDefault(); });