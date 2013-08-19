/* This function is called once data have been received from Universalis.
   It can be called anything, but whatever name you give it should also
    be passed in the request to retrieve jsonpmass.js.
   */
function universalisCallback(data)
{ // reportUniversalisDataAsAnAlert(data);
 /* Copy the received data into the appropriate places in your document. 
    In each case, check that the data item has actually been received before trying to copy it.
	*/
 if (data.Mass_G.source) document.getElementById("GospelSource").innerHTML=data.Mass_G.source; // The book, chapter and verse reference.
 if (data.Mass_G.text) document.getElementById("GospelText").innerHTML=data.Mass_G.text;       // The text of the Gospel.
 
 if (data.Mass_R1.source) document.getElementById("R1source").innerHTML=data.Mass_R1.source; // The book, chapter and verse reference.
 if (data.Mass_R1.text) document.getElementById("R1text").innerHTML=data.Mass_R1.text;       // The text of the Gospel.
 
  if (data.Mass_Ps.source) document.getElementById("Pssource").innerHTML=data.Mass_Ps.source; // The book, chapter and verse reference.
 if (data.Mass_Ps.text) document.getElementById("Pstext").innerHTML=data.Mass_Ps.text;       // The text of the Gospel.

 
 if (data.Mass_R2.source) document.getElementById("R2source").innerHTML=data.Mass_R2.source; // The book, chapter and verse reference.
 if (data.Mass_R2.text) document.getElementById("R2text").innerHTML=data.Mass_R2.text;       // The text of the Gospel.

 
 
 if (data.date) document.getElementById("DateString").innerHTML=data.date;                     // The date: for instance, 5 June 2013.
 if (data.day) document.getElementById("DayDescription").innerHTML=data.day;                   // The name of the feast or celebration for the day.
 if (data.copyright) document.getElementById("Copyright").innerHTML=data.copyright;            // The copyright notice.
 

 
 /* CUSTOMISATION: 
	 If you don't want to use a particular piece of information, delete the line from the list above.
	*/
}

/* This function is for debugging and can be omitted from a real page. */
function reportUniversalisDataAsAnAlert(date)
{var x="";
 for (var thing in data)
  {x = x + "\n" + thing + "=";
   var d=data[thing];
   if (typeof d=="object")
     {for (var t in d)
	    x = x + "\n     " + t + "=" + d[t];
	  }
	else
	 x = x + d;
  }
 alert(x);
  };


 

var td = new Date(); 

day = td.getDay();

// day = 6;

if (day==0) {day = 7}

// document.write (day);

var nextSunday= new Date(td.getFullYear(),td.getMonth(),td.getDate()+(7-day)); 
// document.write(nextSunday);

var dd = nextSunday.getDate();
var mm = nextSunday.getMonth()+1; //January is 0!

var yyyy = nextSunday.getFullYear();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} 

 printSunday = yyyy+mm+dd;

// document.write("8 digit code: "+printSunday);

sundayURL = "http://www.universalis.com/" +printSunday+ "/USA.Sunday/jsonpmass.js?callback=universalisCallback";

// document.write("<p>Sunday URL: " +sundayURL);

sundayURL2 = "http://www.universalis.com/" +printSunday+ "/USA.Sunday/mass.htm";

document.write(sundayURL2);

document.write("<script src='" +sundayURL+ "' defer='defer'><\/script>");



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////TODAY' READINGS//////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function universalisCallbackToday(data)
{ // reportUniversalisDataAsAnAlert(data);
 /* Copy the received data into the appropriate places in your document. 
    In each case, check that the data item has actually been received before trying to copy it.
	*/
 if (data.Mass_G.source) document.getElementById("GospelSourceT").innerHTML=data.Mass_G.source; // The book, chapter and verse reference.
 if (data.Mass_G.text) document.getElementById("GospelTextT").innerHTML=data.Mass_G.text;       // The text of the Gospel.
 
 if (data.Mass_R1.source) document.getElementById("R1sourceT").innerHTML=data.Mass_R1.source; // The book, chapter and verse reference.
 if (data.Mass_R1.text) document.getElementById("R1textT").innerHTML=data.Mass_R1.text;       // The text of the Gospel.
 
 if (data.Mass_Ps.source) document.getElementById("PssourceT").innerHTML=data.Mass_Ps.source; // The book, chapter and verse reference.
 if (data.Mass_Ps.text) document.getElementById("PstextT").innerHTML=data.Mass_Ps.text;       // The text of the Gospel.

 
 if (data.Mass_R2.source) document.getElementById("R2sourceT").innerHTML=data.Mass_R2.source; // The book, chapter and verse reference.
 if (data.Mass_R2.text) document.getElementById("R2textT").innerHTML=data.Mass_R2.text;       // The text of the Gospel.

 
 
 if (data.date) document.getElementById("DateStringT").innerHTML=data.date;                     // The date: for instance, 5 June 2013.
 if (data.day) document.getElementById("DayDescriptionT").innerHTML=data.day;                   // The name of the feast or celebration for the day.
 if (data.copyright) document.getElementById("CopyrightT").innerHTML=data.copyright;            // The copyright notice.
 

 
 /* CUSTOMISATION: 
	 If you don't want to use a particular piece of information, delete the line from the list above.
	 
	*/
	
	
	
	
}


document.write("<script src='http://www.universalis.com/USA.Sunday/jsonpmass.js?callback=universalisCallbackToday' defer='defer'><\/script>");
