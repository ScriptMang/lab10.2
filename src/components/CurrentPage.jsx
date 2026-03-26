function CurrentPage({items, totalItems}) {
    let id = 0;
    const itemList = items.map(prevItem => {
           const newId =  String(id++);
           return <li key={id}>{id}. {prevItem}</li>
    });

    //  console.log("Print the list of items before li tags: ", items);
    // console.log("Print the list of items w/ li tags: ", itemList)
    return(
        <>
        <h2 id="pageTitle">Pagination Demo</h2>
        <div id="topItemBar">
            <div id="itemsSelectContainer">
                <h3>Items per page:</h3> 
             <select name="numItems" id="number-of-items-select" defaultValue="5" onChange={()=>{}}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
             </select>
            </div>
           
            <div><i>Total Items: {totalItems}</i></div>
        </div>
        
        <ul id="currentItemList">{itemList}</ul>
        </>
    )
}

export default CurrentPage