import { FormGenerale } from "./form/form-generale";
import { MesParametresMaininfo } from "./mesparametres-maininfo";

export const MesParametresGenrale = () => {
  return (
    <div className="flex h-fit w-full justify-between">
      <MesParametresMaininfo />
      <FormGenerale />
    </div>
  );
};
