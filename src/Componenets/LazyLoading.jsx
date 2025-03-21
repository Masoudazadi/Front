import React from 'react'

function LazyLoading() {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
            <div className="relative">
                <div className="w-20 h-20 border-blue-200 border-2 rounded-full"></div>
                <div
                    className="w-20 h-20 border-blue-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
            </div>
        </div>
    )
}

export default LazyLoading
