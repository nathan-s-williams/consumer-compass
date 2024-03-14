// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { useRouteError } from "react-router-dom";

interface RouterError extends Error {
    statusText: string;
}
function ErrorPage() {
    // @ts-ignore
    const error: RouterError = useRouteError();

    return (
        <div className="min-h-screen flex justify-center items-center flex-col gap-12">
            <div className="flex items-end gap-6">
                <span className="text-8xl">404</span>
                <span className="pb-1.5 text-2xl">Page Not Found!</span>
            </div>
            <div className="flex flex-col items-center gap-6">
                <p>Details:</p>
                <p className="text-xl"><i>{error.statusText || error.message || "Cannot find page"}</i></p>
            </div>
        </div>
    );
}

export default ErrorPage;