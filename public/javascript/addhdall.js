async function addQuestion(event) {
    event.preventDefault();

    let answer=false;
    let data_text = document.querySelector('textarea[name="question-text"]').value;
  
    // if (document.getElementById('yes').checked ) {answer=true;}
  
  let arr=data_text.split(/\n/);
  console.log(arr);
  for (i=0;i<arr.length;i++){
    subarr=arr[i].split("\t");
    console.log(subarr);
    let city=subarr[0];
    let county=subarr[1];
    let y2017=subarr[2];
    let y2018=subarr[3];
    let y2019=subarr[4];
    let y2020=subarr[5];
    let y2021=subarr[6];
 
  
    const response = await fetch(`/api/hdall`, {
      method: 'POST',
      body: JSON.stringify({
        city,
        county,
        y2017,
        y2018,
        y2019,
        y2020,
        y2021
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