async function addQuestion(event) {
    event.preventDefault();
    const response = await fetch(`/api/hdall`, {
      method: 'DELETE'
      ,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let answer=false;
    let data_text = document.querySelector('textarea[name="question-text"]').value;
  
    // if (document.getElementById('yes').checked ) {answer=true;}
   // data_text=data_text.replace(",", "");
    console.log(data_text);
  
  let arr=data_text.split(/\n/);
  // console.log(arr);
  for (i=0;i<arr.length;i++){
    
    subarr=arr[i].split("\t");
    console.log(subarr);    let city=subarr[0];
    let county=subarr[1];
    let yone=parseInt(subarr[2].replace(",", ""));
    let ytwo=parseInt(subarr[3].replace(",", ""));
    let ythree=parseInt(subarr[4].replace(",", ""));
    let yfour=parseInt(subarr[5].replace(",", ""));
    let yfive=parseInt(subarr[6].replace(",", ""));
 
  
    const response = await fetch(`/api/hdall`, {
      method: 'POST',
      body: JSON.stringify({
        city,
        county,
        yone,
        ytwo,
        ythree,
        yfour,
        yfive
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
    //   alert(response.statusText);
    // }
  }