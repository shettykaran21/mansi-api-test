import { useQuery } from "react-query";

const useTotalTrackedAds = () => {
    const { days, teams } = useContext(DashboardContext);

    const { data, isLoading, isFetching, error, refetch } = useQuery(
        ["/api/programmatic/looker/inlineQuery", teams, days],
        {
            model: "crb_reports",
            view: "attention",
            fields: ["attention.total_tracked_ads"],
            filters: {
                "attention.team_id": teams || "",
                "attention.custom_days": days,
            },
        }
    );

    // Pass data to component
    return {
        data,
        error: error?.message || error,
        isFetching: isLoading || isFetching,
        refetch,
    };
};

export default useTotalTrackedAds;
