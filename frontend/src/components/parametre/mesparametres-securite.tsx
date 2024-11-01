import { FormSecurite } from "./form/form-securite";
import { MesParametresMaininfo } from "./mesparametres-maininfo";

export const MesParametresSecurite = () => {
  return (
    <div className="flex h-fit w-full justify-between">
      <MesParametresMaininfo />
      <FormSecurite />
    </div>
  );
};
