import { useMesSignaux } from "@src/hooks/useMesSignaux";
import useUserStore from "@src/store/userStore";
import { SignalCard } from "../signals/signals-card";

export const ProfileSignaux = () => {
  const { user } = useUserStore();
  const { signaux, error, loading } = useMesSignaux(user._id);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!signaux) {
    return <div>No signals</div>;
  } else
    return (
      <div className="my-8 flex h-fit w-full flex-col gap-8">
        {signaux?.map((signal) => (
          <SignalCard key={signal._id} signal={signal} />
        ))}
      </div>
    );
};
