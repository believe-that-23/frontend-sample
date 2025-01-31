import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Settings from '../pages/Settings/Settings';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/settings" />} />
        </Routes>
    );
};

export default AppRoutes;
