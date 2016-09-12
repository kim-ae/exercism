using System;
using System.Linq;
using System.Text.RegularExpressions;
public static class Bob
{
	private const string defaultResponse = "Whatever.";
	private const string yellingAnswer = "Whoa, chill out!";
	private const string questionAnswer = "Sure.";
	private const string silentAnswer = "Fine. Be that way!";

	public static string Hey(string input){
		if(input.Trim() == ""){
			return silentAnswer;
		} else if (isYelling (input) && hasLetters(input)) {
			return yellingAnswer;
		} else if(isNormalQuestion(input)){
			return questionAnswer;
		}
		return defaultResponse;
	}

	public static Boolean hasLetters(string sentence){
		return Regex.IsMatch (sentence, @"[a-zA-Z]+");
	}

	private static Boolean isYelling(string sentence){
		char[] words = sentence.ToCharArray();
		return words.Aggregate<char, Boolean> (true,(current, next) => current && next == Char.ToUpper (next));;
	}

	private static Boolean isNormalQuestion(string sentence){
		var trimSentence = sentence.Trim ();
		return trimSentence.ToCharArray () [trimSentence.Length - 1] == '?';
	}
}

