import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExploreListings from "../components/ExploreListings";
import Hero from "../components/Hero";
import LatestProperties from "../components/LatestProperties";
import { getHomeData } from "../slices";

export default function HomePage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <ExploreListings />
      <LatestProperties />
    </>
  );
}
