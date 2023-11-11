export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true';
    } else if (myNum < 5 && myNum >= 0) {
        return 'false';
    }else if (myNum > 5){
        return 'big';

    }else {
        return "negative";
    };
}

/* 
EN: Add your own function starting on line 20 
!Write a function that returns a movie when the user inputs movieOne - movieFive
!The movies are up to you use the 'writeIfElseStatment' example from class for help 
!Add expects to the test checking to make sure you are getting back the correct movie.

*/

export function blockBuster(movie: string): string {
    if (movie == "movie One"){
        return "Coco";
    } else if (movie == "movie Two"){
        return "The Boy Who Harnessed The Wind";
    } else if (movie == "movie Three"){
        return "I'm Thinking of Ending Things";
    } else if (movie == "movie Four") {
        return "Oppenheimer"; 
    } else if (movie == "movie Five") {
        return "Top Gun: Maverick";
    } else {
        return `I'm sorry we do not have ${movie}!`
};
}