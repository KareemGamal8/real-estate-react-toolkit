import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommercialBlog from "../components/CommercialBlog";
import ExploreListings from "../components/ExploreListings";
import Hero from "../components/Hero";
import LatestProperties from "../components/LatestProperties";
import Services from "../components/Services";
import { getHomeData } from "../slices";

export default function HomePage() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  console.log(state);

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
