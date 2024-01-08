import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomeData } from "../../../slices/homeSlice";
import CommercialBlog from "../components/CommercialBlog";
import ExploreListings from "../components/ExploreListings";
import Hero from "../components/Hero";
import LatestProperties from "../components/LatestProperties";
import Services from "../components/Services";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeData());
  }, []);

  return (
    <>
      <Hero />
      <ExploreListings />
      <LatestProperties />
      <Services />
      <CommercialBlog />
    </>
  );
}
