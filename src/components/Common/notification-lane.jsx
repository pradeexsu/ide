import { useEffect, useState } from "react";
import { closeIcon } from "../IOPannel/constant";

const NotificationLane = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);
  return (
    show && (
      <nav className="flex h-12 justify-between bg-red-500">
        <div className="my-auto w-full">
          <div className="text-center  text-white">
            Some Notification goes here...
          </div>
        </div>
        <img
          className="py-auto my-3 mr-10 h-6 w-6"
          src={closeIcon}
          alt="icon"
        />
      </nav>
    )
  );
};

export default NotificationLane;
