import React from "react";
import { Chart } from "react-google-charts";

const ComponentTree = () => {
    const data = [
        ["Parent", "Child","Tooltip"],
        ["CEO", "", "CEO"],
        ["CTO", "CEO", "CTO"],
        ["CFO", "CEO", "CFO"],
        ["Teacher", "CTO", "Teacher"],
        ["Student", "CFO", "Student"],
    ];
    
}