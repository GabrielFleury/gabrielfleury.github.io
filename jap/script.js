/**
 * @author Gabriel Fleury
 */
 
$(document).ready(initialiser);	
$pts=0;
$ptsTotal=0;

function initialiser() 
{
	reroll("a");
	
	//permettre le click
	$(".answer").click(verifierReponse);
}

function reroll($derniereQuestion){
	//générer une question random
	$randomNum = Math.floor((Math.random() * 79));
	$randomQuestion = hiraB[$randomNum];
	while($randomQuestion=="nothing" || $randomQuestion==$derniereQuestion)
	{
		$randomNum = Math.floor((Math.random() * 79));
		$randomQuestion = hiraB[$randomNum];
	}
	$("#question").text($randomQuestion);
	
	//générer des réponses random
	$(".answer").each(function( i ) {
		$(this).text(creerRandomReponse());
	});
	
	//insérer la bonne réponse dans une case random
	$(".answer").eq( Math.floor((Math.random()*9)) ).text( hiraA[$randomNum] );
}

function creerRandomReponse(){
	$randomReponse = hiraA[Math.floor((Math.random() * 79))];
	while($randomReponse=="nothing")
	{
		$randomReponse = hiraA[Math.floor((Math.random() * 79))];
	}
	return $randomReponse;
}

function verifierReponse() 
{
	//vérifier
	$question = $("#question").text();
	$reponse = $(this).text();
	$questionNum = $.inArray($question, hiraB);
	$reponseNum = $.inArray($reponse, hiraA);
	
	//update pointage
	if($questionNum==$reponseNum){
		$pts++;
	}
	$ptsTotal++;
	$("#score").text("Score: " + $pts + "/" + $ptsTotal);
	
	reroll($question);
}

var hiraA = [
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

var hiraB = [
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