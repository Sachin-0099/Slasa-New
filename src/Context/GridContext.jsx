// src/context/GridContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import GridData from "../Data/GridData.json";

const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [gridSections, setGridSections] = useState([]);
  const [gridSections2, setGridSections2] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getGridSections")
      .then((res) => res.json())
      .then((data) => {
        if (data.sectionsData && data.sectionsData2) {
          setGridSections(data.sectionsData);
          setGridSections2(data.sectionsData2);
        } else {
          fallbackToLocalGrid();
        }
      })
      .catch(() => {
        fallbackToLocalGrid();
      });
  }, []);

  const fallbackToLocalGrid = () => {
    setGridSections(GridData.sectionsData);
    setGridSections2(GridData.sectionsData2);
  };

  return (
    <GridContext.Provider value={{ gridSections, gridSections2 }}>
      {children}
    </GridContext.Provider>
  );
};

// Custom hook for easy access in any component
export const useGrid = () => {
  return useContext(GridContext);
};
