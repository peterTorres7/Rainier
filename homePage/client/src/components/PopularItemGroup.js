import React from 'react';
import PopularItem from './PopularItem';
// import './PopularItem.css';
import './PopularItemGroup.css';

export default function PopularItemGroup() {
    return (
        <div className = "main">
                <PopularItem></PopularItem>
                <PopularItem></PopularItem>
                <PopularItem></PopularItem>
                <PopularItem></PopularItem>
        </div>
    )
}