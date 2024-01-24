import { useDispatch, useSelector } from "react-redux";
import {
  toastError,
  toastSuccess,
} from "../../../design-system/components/Toast/Toast";
import { Property } from "../../../design-system/types";
import {
  addPropertyToWishlist,
  removePropertyFromWishlist,
} from "../../../slices/wishlistSlice";
import { RootState } from "../../../store";

export function useWishlist(property: Property) {
  const dispatch = useDispatch();
  const { properties } = useSelector((state: RootState) => state.wishlist);

  const addToWishlist = () => {
    if (properties.includes(property)) console.log(1);
    const addPropertyPromise = new Promise((resolve) => {
      resolve(dispatch(addPropertyToWishlist(property)));
    });

    addPropertyPromise
      .then(() => {
        toastSuccess("Added to wishlist successfully");
        console.log(properties.includes(property));
      })
      .catch((error) => {
        toastError(error.message);
      });
  };

  const removeFromWishlist = () => {
    const removePropertyPromise = new Promise((resolve) => {
      resolve(dispatch(removePropertyFromWishlist(property)));
    });

    removePropertyPromise
      .then(() => {
        toastSuccess("Removed from wishlist successfully");
      })
      .catch((error) => {
        console.error("Error adding to wishlist:", error.message);
      });
  };
  return {
    addToWishlist,
    removeFromWishlist,
  };
}
