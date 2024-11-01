import { Fragment } from "react/jsx-runtime";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Link } from "react-router-dom";

interface BreadcrumbUIProps {
  path: { path: string; name: string }[];
}
export const BreadcrumbUI = ({ path }: BreadcrumbUIProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.slice(0, -1).map((link, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={link.path} className="text-lg">
                  {link.name}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem key={"last"}>
          <BreadcrumbPage className="text-lg">
            {path[path.length - 1].name}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
