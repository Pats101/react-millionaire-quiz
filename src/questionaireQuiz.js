
function getQues() {
    const apiUrl = "https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=multiple";
    try{
        fetch(apiUrl).then(
            res => {
                return res.json();
            }
        ).then(loadedQues => {
            console.log(loadedQues);
        }).catch(err => {
            console.log(err);
        });
        // apiQues = await response.json();
        // console.log(apiQues);
    } catch(err) {
        console.log(err);
    }
}

// Load Questions
getQues();