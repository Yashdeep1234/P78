var listOfImgs = ["https://www.sciencenewsforstudents.org/wp-content/uploads/2020/04/1030_LL_trees-1028x579.png",
    "https://arbordayblog.org/wp-content/uploads/2017/09/japanese-maple-shade-tree-iStock-180454493.jpg",
    "https://media.istockphoto.com/vectors/logo-of-a-green-life-tree-with-roots-and-leaves-vector-illustration-vector-id1130887322?k=6&m=1130887322&s=612x612&w=0&h=wFft0N9UT93zLSNOlKhnp6dorAA_wsyS931R6M4jJ68="
];
var i = 0;

function Next() {
    document.getElementById("tree").src = listOfImgs[i];
    i++;
    if (i == 3) { i = 0 };
}