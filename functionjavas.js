function addPaintAndSupplies(totalCost, callback) {

    let costPaint = prompt("Enter the cost for the paint and supplies:");

    costPaint = parseFloat(costPaint);

    while (costPaint > 200) {
        alert("Can't spend more than $200 for the paint and supply!");
        costPaint = prompt("Re-Enter the cost for paint (less than $200): ");
        costPaint = parseFloat(costPaint);
    };

    if (costPaint > 100){

        costPaint *= 1.1;
    };



        let paintArea = document.querySelector(".paint");

        paintArea.innerHTML = `Paint amount($): ${costPaint.toFixed(2)}`;

        callback (totalCost + costPaint);

        return (totalCost + costPaint);

}


const addFuniture = function (totalCost, callback) {

    let costF = prompt("Enter the cost for furniture: ");

    costF = parseFloat(costF);

    while (costF > 2000) {
        alert("Can't spend more than $2000 for the furniture!");
        costF = prompt("Re-Enter the cost for furniture (less than 2000): ");
        costF = parseFloat(costF);
    };

    if (costF < 500){

        costF -= costF * 0.1;
    };


    let funitureArea = document.querySelector(".furniture");

    funitureArea.innerHTML = `Furniture amount: $${costF.toFixed(2)}`;

    callback (totalCost + costF);

    return (totalCost + costF); 
}



const floorCovering = function (totalCost, callback) {

    let costFl = prompt("Enter the cost for floor coverings: ");

    costFl = parseFloat(costFl);

    while (costFl > 2000) {
        alert("Can't spend more than $2000 for the flooring!");
        costFl = prompt("Re-Enter the cost for flooring (limit $2000): ");
        costFl = parseFloat(costFl);
    
    };

    if (costFl < 500){
        costFl -= costFl* 0.15;
    };

    


    let flooringArea = document.querySelector(".floorCoverings");

    flooringArea.innerHTML = `Floor Covering amount: ${costFl.toFixed(2)}`;

    callback (totalCost + costFl);

    return (totalCost + costFl);

}

    const updateTotals = (total) => {
    
        let totalsArea = document.querySelector(".totalCost");
    
        totalsArea.innerHTML = `Total $ ${total.toFixed(2)}`;
    
    }

    let totalCost = 0;
    totalCost = addPaintAndSupplies(totalCost, updateTotals);
    totalCost = addFuniture(totalCost, updateTotals);
    totalCost = floorCovering(totalCost, updateTotals);
    console.log(totalCost);