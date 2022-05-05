// make fetch request to /api/users/:id
// include scores in results - done
// format your data for chart.js

// fetch('/api/users/')
const user_id = document.querySelector('body').getAttribute('data-user_id');

const getData = fetch(`/api/hdall`)
    .then(res => res.json())
    .then(res => {
        let dbData=res.map(res => {
            let tr=$('<tr>');
           tr.addClass( "flex w-full mb-4");
             td=$("<td>");
            td.addClass( "p-4 w-52");
            td.text(res.city);
            tr.append(td);
            td=$("<td>");
            td.addClass( "p-4 w-52");
            td.text(res.county);
            tr.append(td);
            td=$("<td>");
            td.addClass( "p-4 w-24");
            td.text(res.yone);
            tr.append(td);
            td=$("<td>");
           td.addClass( "p-4 w-24");
            td.text(res.ytwo);
            tr.append(td);
            td=$("<td>");
          td.addClass( "p-4 w-24");
            td.text(res.ythree);
            tr.append(td);
            td=$("<td>");
           td.addClass( "p-4 w-24");
            td.text(res.yfour);
            tr.append(td);
            td=$("<td>");
            td.addClass( "p-4 w-24");
            td.text(res.yfive);
            tr.append(td);
           $('#tbody').append(tr);
            console.log(res)});

        // let labels = scoresArray.map((score, index) => 'Attempt ' + (index + 1));
        // let scores = scoresArray.map(score => score.score);
        // const data = {
        //     labels: labels,
        //     datasets: [{
        //         label: 'My test results',
        //         backgroundColor: 'rgb(255, 99, 132)',
        //         borderColor: 'rgb(255, 99, 132)',
        //         data: scores,
        //     }]
        // };
console.log(res);
       
    });

    


