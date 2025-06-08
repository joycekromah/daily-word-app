"use client";
import{ useState, useEffect } from "react";

export function SortButtonList({ onSort, label = "Sort", defaultOrder = "asc"}) {
    const [sortOrder, setSortOrder] = useState(defaultOrder);

    const handleClick = () => {
        const newOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newOrder); 
        onSort(newOrder);  
    }

    return (
        <button className="sort-btn" onClick={handleClick}>
            {label}:{sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
    );
}
