class movies{

    constructor(title,studio,rating="PG"){

        this.t=title;
        this.s=studio;
        this.r=rating;


    }
    getPG(arr){
        
        var newArray = [];
for (var i = 0, len = arr.length; i<len; i++) {
        if (arr[i].rating == "PG") 
        {newArray.push(arr[i]);};
 };
console.log(newArray);
        
    }


}



let firm=new movies("Casino Royale","Eon Productions","PG­13");
//console.log(firm);
const defaultMovies = [
    {
    title: 'Jurassic Park',
    studio: 'test studio1',
    rating: 'PG11'
    },
    {
    title: 'The Dead Pool',
    studio: 'test studio2',
    rating: 'PG'
    },
    {
        title: 'Jurassic Park part2',
        studio: 'test studio3',
        rating: 'PG11'
        },
        {
        title: 'The Dead part3',
        studio: 'test studio4',
        rating: 'PG'
        }
]
//console.log(defaultMovies);
firm.getPG(defaultMovies);


