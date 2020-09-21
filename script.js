let answer = getAnswer("Is de kaas geel?");

if(answer == "ja")
{
	answer = getAnswer("Zitten er gaten in?");

	if(answer == "ja")
	{
		answer = getAnswer("Is de kaas belachelijk duur?");

		if(answer == "ja")
		{
			window.alert("De kaas is Emmenthaler.");
		}
		else
		{
			window.alert("De kaas is Leerdammer.");
		}
	}
	else
	{
		answer = getAnswer("Is de kaas hard als steen?");

		if(answer == "ja")
		{
			window.alert("De kaas is Parmigiano Reggiano.");
		}
		else
		{
			window.alert("De kaas is Goudse kaas.");
		}
	}
}
else
{
	answer = getAnswer("Heeft de kaas blauwe schimmels?");

	if(answer == "ja")
	{
		answer = getAnswer("Heeft de kaas een korst?");

		if(answer == "ja")
		{
			window.alert("De kaas is Bleu de Rochbaron.");
		}
		else
		{
			window.alert("De kaas is Foume d'Ambert");
		}
	}
	else
	{
		answer = getAnswer("Heeft de kaas een korst?");

		if(answer == "ja")
		{
			window.alert("De kaas is Camembert.");
		}
		else
		{
			window.alert("De kaas is Mozzarella.");
		}
	}
}

/**
* Prompts the user with param question, and displays an error message if the input is invalid.
*/
function getAnswer(question)
{
	let answer = prompt(question);

	if(answer != "ja" && answer != "nee")
	{
		window.alert("Antwoord a.u.b. uitsluitend met ja of nee.");
		return getAnswer(question);
	}

	return answer;
}