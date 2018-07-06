let getFirstSelector = (selector) => {
  return document.querySelector(selector);
}

let nestedTarget = () => {
  return document.querySelector(`#nested .target`);
}


function deepestChild(elArr = [document.getElementById("grand-node")]) {
    //all child nodes pulled out in current iteration
    let babies = [],
        parents = [];
    //loop over all elements returned
    for (let i = 0;i < elArr.length; i++) {
        parents.push(elArr[i]);
        //if the element has children
        if (elArr[i].children.length > 0) {
            //convert the returned (children) HTMLCollection to array 
            for (let x = 0; x < elArr[i].children.length; x++) {
                //pushing each baby onto babiesArray
                babies.push(elArr[i].children.item(x));
            }
        }
    }
    if (babies.length > 0) {
        return deepestChild(babies);
    } else {
        return parents[0];
    }

}

let increaseRandBy = (n) => {
  let ranks = document.querySelectorAll(".ranked-list");
  ranks.forEach(
    function(currentVal, currentIdx, )
    )
}