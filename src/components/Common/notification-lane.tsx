import { useEffect } from "react";
import { useEditorStore } from "../../store/store";
import { NotificationType } from "../../store/typings";

const NotificationLane = () => {
  const { notification, clearNotification } = useEditorStore();

  useEffect(() => {
    if (!notification) return;
    const timeout = setTimeout(clearNotification, 4000);
    return () => clearTimeout(timeout);
  }, [notification, clearNotification]);

  const getNotificationColor = (type: NotificationType) => {
    switch (type) {
      case NotificationType.Error:
        return "bg-red-500";
      case NotificationType.Success:
        return "bg-green-500";
      case NotificationType.Warning:
        return "bg-orange-500";
      case NotificationType.None:
        return "bg-blue-500";
    }
  };
  return (
    !!notification && (
      <nav
        className={`flex h-12 justify-between ${getNotificationColor(
          notification?.type
        )}`}
      >
        <div className="my-auto w-full">
          <div className="text-center  text-black ">
            {notification?.message}
          </div>
        </div>
      </nav>
    )
  );
};

export default NotificationLane;
