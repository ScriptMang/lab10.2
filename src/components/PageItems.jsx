function PageItems({items}) {
    let id = 0
    const itemList = items.map(prevItem => {
           const newId =  String(id++);
           return <li key={id}>{prevItem}</li>
    });

    //  console.log("Print the list of items before li tags: ", items);
    // console.log("Print the list of items w/ li tags: ", itemList)
    return(
        <>
        <h3>Items per page: 
            <select name="numItems" id="number-of-items-select">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </h3>
        <ul>{itemList}</ul>
        </>
    )
}

export default PageItems