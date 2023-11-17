// Catalog.js
import React, { useState } from "react";
import Footer from "../App/Footer/Footer";
import Layout from "../App/Layout/Layout";
import Items from "./Items";

export default function Catalog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ sortBy: null, applyFilters: false });

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    const handleApplyFilters = (filterType) => {
        setFilters({ sortBy: filterType, applyFilters: true });
    }

    return (
        <div>
            <Layout 
                searchLine={true} 
                onSearch={handleSearch} 
                onApplyFilters={handleApplyFilters} 
            />
            <Items searchTerm={searchTerm} filters={filters} />
            <Footer />
        </div>
    );
}