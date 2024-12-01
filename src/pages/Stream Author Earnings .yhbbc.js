
import wixData from 'wix-data';

$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w("#elementID")
	// Click "Preview" to run your code
var npages = $w("#input6").value;
var q=0;
var size = $w("#dropdown1").value;
if(size==="5in x 8in" || size=== "5.5in x 8.5in")
{
	q=0;
}
else if(size=== "8.5in x 11in")
{
	q=2;
}
else{
	q=1;
}



button7_click(clientX,q,npages);



});

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function button7_click(event,q,npages) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
    	var price=0;
	var count=0;
	console.log(npages);
	if(q === 0)
	{
	if(npages< 50)
	{
		price= 100;
	}
	else if (npages>50 && npages<500) 
	{
		for(var i=0;i<45;i++)
		{
	
			if(npages<(60+count))
			{
				price= 100+ (count * 10 );
			}
		}


	}
	}

	
	else if(q === 1)
	{
	if(npages< 50)
	{
		price= 130;
	}
	else if (npages>50 && npages<500) 
	{
		for(var i=0;i<45;i++)
		{
	
			if(npages<(60+count))
			{
				price= 140+ (count * 10 );
			}
		}


	}
	}



	else if(q === 2)
	{
	if(npages< 50)
	{
		price= 120;
	}
	else if (npages>50 && npages<500) 
	{
		for(var i=0;i<45;i++)
		{
	
			if(npages<(60+count))
			{
				price= 140+ (count * 10 );
			}
		}


	}
	}
	$w("#textBox2").data = price;
console.log(price);
}