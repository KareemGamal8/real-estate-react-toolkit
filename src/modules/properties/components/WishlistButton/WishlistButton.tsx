import { Button, Tooltip } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { Property } from "../../../../design-system/types";
import { RootState } from "../../../../store";
import { useWishlist } from "../../../wishlist/hooks";
import classes from "../style.module.css";

export default function WishlistButton({ property }: { property: Property }) {
  const { properties } = useSelector((state: RootState) => state.wishlist);

  const { addToWishlist, removeFromWishlist } = useWishlist(property);

  const findProperty = properties.find(
    (currentProperty) => currentProperty.id === property.id
  );

  return (
    <>
      {!findProperty ? (
        <Tooltip
          transitionProps={{ transition: "skew-up", duration: 300 }}
          label="Wishlist"
          fz="0.6rem"
          fw={600}
          withArrow
          className={classes.card_icon_button}
        >
          <Button
            onClick={() => {
              addToWishlist();
            }}
            variant="outline"
            color="gray.3"
            p={5}
            h="auto"
            radius="xs"
          >
            <IconHeart size={17} />
          </Button>
        </Tooltip>
      ) : (
        <Tooltip
          transitionProps={{ transition: "skew-up", duration: 300 }}
          label="Wishlist"
          fz="0.6rem"
          fw={600}
          withArrow
          className={classes.card_icon_button}
        >
          <Button
            onClick={() => {
              removeFromWishlist();
            }}
            variant="filled"
            color="purple.2"
            p={5}
            h="auto"
            radius="xs"
          >
            <IconHeart size={17} />
          </Button>
        </Tooltip>
      )}
    </>
  );
}
