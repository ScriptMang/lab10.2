function PageItems({items, handleList}) {
    
    const itemList = items.map(prevItem => {
             const id = string(prevCount => prevCount + 1);
            <li key={id}> prevItem</li>
    })
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
        {itemList}
        </>
    )
}

export default PageItems