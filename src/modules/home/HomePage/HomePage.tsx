import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { getHomeData } from "../../../slices/homeSlice";
import ExploreListings from "../components/ExploreListings";
import Hero from "../components/Hero";
import LatestProperties from "../components/LatestProperties";
import Services from "../components/Services";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <ExploreListings />
      <LatestProperties />
      <Services />
    </>
  );
}
