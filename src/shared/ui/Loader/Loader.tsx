import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface PageLoaderProps {
  className?: string;
}

export const Loader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames("lds-spinner", {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
