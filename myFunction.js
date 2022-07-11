function Algorithm()
{
	var x = document.getElementById("num").value;
	var n=2;
	if(x==null || x=="")
	{
		alert("Enter a Number");
	}
	else if(x<0 || x==0)
	{
		alert("Enter A valid Number");
	}
	else if(x==1 || x==2)
	{
		alert("Prime");
	}
	else 
	{
		while(n<x)
		{
			if(x%n==0){
				alert("Composite");
				break;
			}
			else
				n++;
		if(n==x)
		{
		alert("Prime");
	}
	}
	}
}