import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
// Removed SpeedInsights import

export function Analytics() {
    return (
        <>
            <VercelAnalytics />
            {/* SpeedInsights component removed */}
        </>
    );
}
