import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AccountNavLinks() {
    const location = useLocation(); // Get current route path

    return (
        <div className="border-s bg-gray800
 p-2">
            <div className="flex">
                <Link
                    to="/accounts"
                    className={`text-gray-500 text-md pe-4 font-semibold ${
                        location.pathname === "/accounts" ? "underline text-blue-600" : ""
                    }`}
                >
                    Expense
                </Link>

                <Link
                    to="/invest"
                    className={`text-gray-500 text-md pe-4 font-semibold ${
                        location.pathname === "/invest" ? "underline  text-blue-600" : ""
                    }`}
                >
                    Investments
                </Link>

                <Link
                    to="/transactions"
                    className={`text-gray-500 text-md pe-4 font-semibold ${
                        location.pathname === "/transactions" ? "underline text-blue-600" : ""
                    }`}
                >
                    Transactions
                </Link>
            </div>
        </div>
    );
}

export default AccountNavLinks;